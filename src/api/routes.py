"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


@api.route('/register', methods=['POST'])
def create_account():
    body = request.get_json()

    if body is None:
        return "The request body is null", 400
    if 'name' not in body:
        return "Empty name", 400
    if 'email' not in body:
        return "Empty email", 400
    if 'password' not in body:
        return "Empty password", 400
# como se registra el usuario
    user = User()
    user.name = body['name']
    user.email = body['email']
    user.password = body['password']
    user.is_active = True
    db.session.add(user)
    db.session.commit()

    response_body = {
        "msg": "Added user"
    }
    return jsonify(response_body), 200



@api.route('/login', methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).one_or_none()

    if not user or not user.check_password(password):
        return jsonify("Wrong email or password"), 401

    expiration = timedelta(hours=80)
    access_token = create_access_token(identity=user, expires_delta=expiration)

    return jsonify(access_token=access_token)