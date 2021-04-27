from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# userpath_table = db.Table("user_careerpath", db.metadata,
#     db.Column("user_id", db.Integer, db.ForeignKey("user.id")),
#     db.Column("careerpath_id", db.Integer, db.ForeignKey("careerpath.id"))
# )

# career_skills_table = db.Table("skill_careerpath", db.metadata,
#     db.Column("skill_id", db.Integer, db.ForeignKey("skill.id")),
#     db.Column("careerpath_id", db.Integer, db.ForeignKey("careerpath.id"))
# )

# skills_link_table = db.Table("skill_careerlink", db.metadata,
#     db.Column("skill_id", db.Integer, db.ForeignKey("skill.id")),
#     db.Column("careerlink_id", db.Integer, db.ForeignKey("careerlink.id"))
# )

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    career_link = db.relationship('CareerLink', backref="user", lazy=True)

    #careerlink = db.relationship("Careerlink", back_populates="user")
    # careerlink = db.relationship("Careerlink", lazy=True)
    # careerpath = db.relationship("Careerpath",
    #                 secondary=userpath_table,
    #                 back_populates="user") # this line is so it updates the field when Sister is updated

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
    



# class Careerpath(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(120), unique=True, nullable=False)
#     user = db.relationship("User",
#                     secondary=userpath_table,
#                     back_populates="careerpath")
#     skill = db.relationship("Skill",
#                     secondary=career_skills_table,
#                     back_populates="careerpath")

#     def __repr__(self):
#         return '<Careerpath %r>' % self.name

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name
#             # "skill": self.skill,
#             # do not serialize the password, its a security breach
#         }


# class Skill(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(120), unique=True, nullable=False)
#     careerpath = db.relationship("Careerpath",
#                     secondary=career_skills_table,
#                     back_populates="skill")
#     careerlink = db.relationship("Careerlink",
#                     secondary=skills_link_table ,
#                     back_populates="skill")

#     def __repr__(self):
#         return '<Skill %r>' % self.name


# class Careerlink(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(120), unique=True, nullable=False)
#     url = db.Column(db.String(120), unique=True, nullable=False)
#     user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
#     skill = db.relationship("Skill",
#                     secondary=skills_link_table ,
#                     back_populates="careerlink")



        