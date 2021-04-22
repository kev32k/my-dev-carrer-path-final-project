from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    #career_links = db.relationship('CareerLink', backref='user', lazy=True)

class UserPath(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(120), db.ForeignKey('User.id'), unique=True, nullable=False)
    careerpath_id = db.Column(db.String(120), db.ForeignKey('CareerPath.id'), unique=True, nullable=False)

class CareerPath(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)

class CareerSkills(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    careerpath_id = db.Column(db.String(120), db.ForeignKey('CareerPath.id'), unique=True, nullable=False)
    skill_id = db.Column(db.String(120), db.ForeignKey('Skill.id'), unique=True, nullable=False)

class Skill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    #career_links = db.relationship('CareerLink', backref='Skill', lazy=True)

class CareerLink(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    link = db.Column(db.String(120), unique=True, nullable=False)
    status = db.Column(db.String(80), unique=False, nullable=False)
    user_id = db.Column(db.Boolean(), db.ForeignKey('User.id'), unique=False, nullable=False)
    skill_id = db.Column(db.Boolean(), db.ForeignKey('Skill.id'), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }