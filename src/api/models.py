from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

userpath_table = db.Table("user_careerpath", db.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey("user.id")),
    db.Column("careerpath_id", db.Integer, db.ForeignKey("careerpath.id"))
)

career_skills_table = db.Table("skill_careerpath", db.metadata,
    db.Column("skill_id", db.Integer, db.ForeignKey("skill.id")),
    db.Column("careerpath_id", db.Integer, db.ForeignKey("careerpath.id"))
)

skills_link_table = db.Table("skill_careerlink", db.metadata,
    db.Column("skill_id", db.Integer, db.ForeignKey("skill.id")),
    db.Column("careerlink_id", db.Integer, db.ForeignKey("careerlink.id"))
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    #careerlink = db.relationship("Careerlink", back_populates="user")
    careerlink = db.relationship("Careerlink", lazy=True)
    careerpath = db.relationship("Careerpath",
                    secondary=userpath_table,
                    back_populates="user") # this line is so it updates the field when Sister is updated

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Careerpath(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    user = db.relationship("User",
                    secondary=userpath_table,
                    back_populates="careerpath")
    skill = db.relationship("Skill",
                    secondary=career_skills_table,
                    back_populates="careerpath")

    def __repr__(self):
        return '<Careerpath %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
            # "skill": self.skill,
            # do not serialize the password, its a security breach
        }


class Skill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    careerpath = db.relationship("Careerpath",
                    secondary=career_skills_table,
                    back_populates="skill")
    careerlink = db.relationship("Careerlink",
                    secondary=skills_link_table ,
                    back_populates="skill")

    def __repr__(self):
        return '<Skill %r>' % self.name


class Careerlink(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    url = db.Column(db.String(120), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    skill = db.relationship("Skill",
                    secondary=skills_link_table ,
                    back_populates="careerlink")



        