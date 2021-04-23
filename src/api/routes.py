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
from api.models import db, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash ##HASH
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required ##TOKEN
import datetime 
#--------------
import random
import smtplib
api = Blueprint('api', __name__)

app.config["JWT_SECRET_KEY"] = "super-secret"  # TOKEN
jwt = JWTManager(app)  #TOKEN

app.url_map.strict_slashes = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DB_CONNECTION_STRING')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)
CORS(app)
setup_admin(app)

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    return generate_sitemap(app)

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

    existing_user_email = User.query.filter_by(email=email, password=password).first()

    if existing_user_email:
        error_messages.append({"msg":"This email already exists."}), 400
    
    if len(error_messages) >0:
        return jsonify(error_messages),400
    #generating hash
    encrypted_password=generate_password_hash(password)

    user=User(email=email, password=encrypted_password, name=name, is_active=True)

    #db.session.add(user)
    #db.session.commit()

    return jsonify(response_body), 200

@app.route('/login', methods=['POST'])
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
    user = User.query.filter_by(email=email).first()
    if not user:
        #user not found
        error_messages_userInfo.append({'msg': 'Bad email or password'})
        return jsonify(error_messages_userInfo),401
    if not check_password_hash(user.password,password):
        error_messages_userInfo.append({'msg': 'Bad password'})
        return jsonify(error_messages_userInfo),401
    
     #set expiry period
    expiration = datetime.timedelta(days=1)
    #create token
    access_token = create_access_token(identity=user.id, expires_delta=expiration)

    return jsonify('The login has been successful.', {'token':access_token, 'user_id':user.id}),200

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
@app.route('/forgot',methods=['POST'])
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
@app.route('/users/recovery/<string:email>',methods=['POST'])
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

@app.route('/users/actualizarcontrasena/<int:id>',methods=['PUT'])
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

