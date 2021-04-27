from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    career_link = db.relationship('CareerLink', backref="user", lazy=True)

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name
            # do not serialize the password, its a security breach
        }

class CareerpathName(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    local_id = db.Column(db.Integer,nullable=False,unique=True)
    careerpath_name = db.Column(db.String(120), unique=True, nullable=False)
    skill_dependency=db.relationship('SkillName',backref='careerpathname',lazy=True)

    def getAllCareers():
        list_careers = CareerpathName.query.all()
        list_careers = list(map(lambda x: x.serialize(), list_careers))
        return(list_careers)

    def __repr__(self):
        return '<CareerpathName %r>' % self.careerpath_name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.careerpath_name
            # "skill": self.skill,
            # do not serialize the password, its a security breach
        }

class SkillName(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    careerpath_name_id = db.Column(db.Integer, db.ForeignKey(CareerpathName.local_id))
    skill_name = db.Column(db.String(120), unique=True, nullable=False)
    user_dependency=db.relationship('CareerLink',backref='skillname',lazy=True)

    def getAllSkills():
        list_skills = SkillName.query.all()
        list_skills = list(map(lambda x: x.serialize(), list_skills))
        return(list_skills)

    def __repr__(self):
        return '<Skillname %r>' % self.skill_name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.skill_name
            # "skill": self.skill,
            # do not serialize the password, its a security breach
        }

class CareerLink (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column (db.Integer,db.ForeignKey(User.id))
    # career_id = db.Column (db.Integer,db.ForeignKey(CareerpathName.local_id))
    skill_id = db.Column (db.Integer,db.ForeignKey(SkillName.id))
    course_name= db.Column (db.String(120),nullable=False)
    course_link= db.Column (db.String(120),nullable=False)
    
