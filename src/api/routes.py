"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import re
from flask import Flask, request, jsonify, url_for
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from flask import Flask, request, jsonify, url_for, Blueprint

from api.models import db, User, CareerpathName, SkillName, CareerLink

from .special_methods.data_injector import upload_careers,upload_skills

from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash ##HASH
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required ##TOKEN
import datetime 
#--------------
import random
import smtplib
api = Blueprint('api', __name__)

@api.before_app_first_request
def main_load():
    upload_careers()
    upload_skills()

#esto no va aqui

@api.route('/user/<string:id>/careerpath', methods=['GET'])
def getUserCareerPath(id):
    usercareerlinks = CareerLink.query.filter_by(user_id=id).all()
    if usercareerlinks is not None:
        skills = list(map(lambda x: SkillName.query.filter_by(id=x.skill_id).all(), usercareerlinks))
        if skills is not None:
            usercareerpaths = list(map(lambda x: CareerpathName.query.filter_by(id=x.careerpath_name_id).all(), skills))
    return jsonify(usercareerpaths)
        

@api.route('/register', methods=['POST'])
def handle_register():

    request_body = request.get_json()
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    name = request.json.get("name", None)
    
    error_messages=[]

    if not email:
        error_messages.append({"msg":"Email required"}), 400
    if not password:
        error_messages.append({"msg":"Password required"}), 400
    if not name:
       error_messages.append({"msg":"Name required"}), 400
    if len(error_messages) >0:
        return jsonify(error_messages),400

    if not re.match('^[(a-z0-9\_\-\.)]+@[(a-z0-9\_\-\.)]+\.[(a-z)]{2,8}$',email.lower()):
        error_messages.append({'msg':'Enter a valid email format'}),400
    elif not re.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[^\n\t]{8,20}$', password):
        error_messages.append({'msg':'Password must contain at list: a lowercase letter, a capital letter, a number, one special character and minimum 8 characters'}),400

    if len(error_messages) >0:
        return jsonify(error_messages),400

    existing_user_email = User.query.filter_by(email=email,name=name, password=password).first()

    if existing_user_email:
        error_messages.append({"msg":"This email already exists."}), 400
    
    if len(error_messages) >0:
        return jsonify(error_messages),400
    #generating hash
    encrypted_password=generate_password_hash(password)

    user=User(email=email, password=password,name=name,is_active=True)

    db.session.add(user)
    db.session.commit()

    return jsonify("user created"), 200

@api.route('/login', methods=['POST'])
def login():
    email=request.json.get('email', None)
    password=request.json.get('password', None)

    error_mesages_request=[]
    if not email and not password:
        error_mesages_request.append({'msg':'Email and password are required!'}),400
    elif not email:
        error_mesages_request.append({'msg':'Please, specify the email!'}),400
    elif not password:
        error_mesages_request.append({'msg':'Password is required!'}),400

    if len(error_mesages_request)>0:
        return jsonify(error_mesages_request),400
    #searching the user
    error_messages_userInfo=[]
    try:
        user = User.query.filter_by(email=email, password=password).first()
        expiration = datetime.timedelta(days=1)
        access_token = create_access_token(identity=user.id, expires_delta=expiration)
        return jsonify('The login has been successful.', {'token':access_token, 'user_id':user.id, 'name':user.name}),200
    except:
        return jsonify("Bad Username or password"),401
    # if not user:
    #     #user not found
    #     error_messages_userInfo.append({'msg': 'Bad email or password'})
    #     return jsonify(error_messages_userInfo),401
    # if not check_password_hash(user.password,password):
    #     error_messages_userInfo.append({'msg': 'Bad password'})
    #     return jsonify(error_messages_userInfo),401
    
     #set expiry period
    #expiration = datetime.timedelta(days=1)
    #create token
    #access_token = create_access_token(identity=user.id, expires_delta=expiration)

    #return jsonify('The login has been successful.', {'token':access_token, 'user_id':user.id}),200

#debuggin route
@api.route("/user_identity", methods=["GET"])
@jwt_required()
def protected():
    
    # We can now access our sqlalchemy User object via `current_user`.
    return jsonify("funcionando correctamente")


def mail(asunto,mensaje,correo):
    email='emailproyecto2021@gmail.com'
    message=mensaje
    subject=asunto
    message='Subject:{}\n\n{}'.format(subject,message)
    server=smtplib.SMTP('smtp.gmail.com',587)

    server.ehlo()
    server.starttls()
    server.login('EMAIL','CONTRASEÑA')
    server.sendmail(email,correo,message)
    server.quit
#-----------------------------
@api.route('/forgot',methods=['POST'])
def restore_password():
    if request.method == 'POST':
        body = request.get_json()
        email = body.get('email')
        restore_id = User.query.filter_by(email=email).first()
        if not restore_id:
            return jsonify({'status':'failed','msg':'user does not exists'}),400
        code=round(random.random()*10000)
        restore_id.code=code
        header='Password reset'
        container ='this is your security code: '+str(code)
        correo=email
        mail(header,container,correo)
        print(mail)
        db.session.add(restore_id)
        db.session.commit()
        return jsonify({'status':'Success','msg':'The code has been send'}),200
#---------------------------------------------

@api.route('/users/recovery/<string:email>',methods=['POST'])
def user_verification(email):
    body=request.get_json()
    codigo=body.get('code')
    # email=body.get('email')
    user=User.query.filter(User.email==email).first()
    print(user)
    if user==None:
        return jsonify({"status":"failed","msg":"User does not exist"}),404
    if codigo==user.code:
        return jsonify({"status":"success","msg":"Code is correct","id":user.id}),200
    else:
        return jsonify({"status":"failed","msg":"Code is not correct"}),404

@api.route('/users/actualizarcontrasena/<int:id>',methods=['PUT'])
def pass_update(id):
    body=request.get_json()
    password=body.get("password")
    user=User.query.get(id)
    if user==None:
        return jsonify({"status":"failed","msg":"User does not exist"}),404
    if not re.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[^\n\t]{8,20}$', password):
        return jsonify({'msg':'Password must contain at list: a lowercase letter, a capital letter, a number, one special character and minimum 8 characters'}),400
    
    hashed_password = generate_password_hash(password)

    user.password = hashed_password
    user.code=None
    db.session.add(user)
    db.session.commit()
    return jsonify({"status":"succed","msg":"password updated properly"}),200


@api.route('/careerpath/all', methods=['GET'])
def api_all():
    careerpaths = CareerpathName.query.all()
    careerpaths = list(map(lambda x:x.serialize(), careerpaths))
#     #careerpaths = [
#     #{'id': 0,
#     'img':'{frontEndUrl}',
#      'name': 'Front-End Developer',
#      'skills': 'HTML5, CSS, Javascript'
     
#      },
#     {'id': 1,
#     'img':'{frontEndUrl}',
#      'name': 'Back-End Developer',
#      'skills': 'Java, Python, Node, Ruby, .Net, SQL, Apache, IIS Servers'
#      },
#     {'id': 2,
#     'img':'{frontEndUrl}',
#      'name': 'Mobile Developer',
#      'skills': 'Java, React Native, REST'
#      }
# ]
    return jsonify(careerpaths)

# @api.route('/learningpathview/', methods=['GET'])
# def api_skills():
#     careerskills = Careerskills.query.all()
#     careerskills = list(map(lambda x:x.serialize(), careerskills))
#     return jsonify(careerskills)


#---------------------------------------------------------------------
    # @api.route('/learningpathview', methods=['POST'])
    # @jwt_required()
    # def add_course():
    #     current_user = get_jwt_identity()
    #     user = User.query.filter_by(id=current_user).first()
    #     if not user:
    #         return jsonify({"msg":"You are not a no registered user"}),401
    #     newCareerLink = request.get_json()
    #     # No empty requests
    #     if newCareerLink == []:
    #         return jsonify("Empty request"),404
    #     careerLinks = CareerLink.query.filter_by(user_id=user.id) 
    #     existing_careerlink = list(map(lambda CareerLink: CareerLink.serialize(), careerLinks))
    #     message_to_avoid_repetition=[]
    #     for items in existing_careerlink:
    #         if items['url'] is not None and newCareerLink['url'] == items['url']: 
    #             message_to_avoid_repetition.append('Item already added')    
    #         if len(message_to_avoid_repetition) > 0:  
    #             return jsonify(message_to_avoid_repetition),400 #### the list is return in case of having any message
    #     # create new course 
    #     newCareerLinkItem=CareerLink(name=name,url=newCareerLink['url'], skill=skill)
    #     db.session.add(newCareerLinkItem)
    #     db.session.commit()
    # return jsonify(newCareerLink), 200

@api.route('/learningpathview', methods=['POST'])
@jwt_required()
def add_course():
    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).first()
    if not user:
        return jsonify({"msg":"You are not a no registered user"}),401
    request_body = request.get_json()
    course_name = request.json.get("name",None)
    course_link = request.json.get("url", None)
    skill_id = request.json.get("skill",None)
    error_mesages_request=[]
    if not course_link and not course_name:
        error_mesages_request.append({'msg':'Name and URL are required!'}),400
    careerLink = CareerLink(user = user, skill_id = skill_id, course_name = course_name, course_link = course_link)
    db.session.add(careerLink)
    db.session.commit()
    return jsonify(careerLink.serialize()), 200


@api.route('/careerlink/all', methods=['GET'])
def api_careerall():
    careerlinks = CareerLink.query.all()
    careerlinks = list(map(lambda x:x.serialize(), careerlinks))
    return jsonify(careerlinks)

@api.route('/getuser/all', methods=['GET'])
def api_userall():
    users = User.query.all()
    users = list(map(lambda x:x.serialize(), users))
    return jsonify(users) 


@api.route('/skill/all', methods=['GET'])
def api_skillall():
    skills = SkillName.query.all()
    skills = list(map(lambda x:x.serialize(), skills))
    return jsonify(skills) 


@api.route('/publish-careerlinks', methods=['POST'])
@jwt_required()
def publish_careerlinks():
    body=request.get_json()
    current_user = get_jwt_identity()

    #quien es la persona que esta guardando un usuario

    course_name = request.json.get("course_name",None)
    course_url = request.json.get("course_url",None)
    skill_id= request.json.get("skill_id",None)

    careerlink = CareerLink()
    careerlink.skill_id=skill_id
    careerlink.course_name=course_name
    careerlink.course_link=course_url
    careerlink.user_id=current_user
    
    db.session.add(careerlink)  #agrega un servicio a la base de datos
    db.session.commit()
    return jsonify("Career Links have been added") 

   
    