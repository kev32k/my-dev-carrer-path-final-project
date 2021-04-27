from api.models import db, CareerpathName, SkillName

def upload_careers():
    list_careers = CareerpathName.getAllCareers()
    if len(list_careers) == 0:        
        list_new_careers = [
            {
                "local_id": 1,
                "careerpath_name": "Front-End Developer",
            },
            {
                "local_id": 2,
                "careerpath_name": "Back-End Developer",
            },
            {
                "local_id": 3,
                "careerpath_name": "Mobile Developer",
            }
        ]
        
        for i in range(len(list_new_careers)):

            body = list_new_careers[i]
            career_path_item = CareerpathName()
            career_path_item.local_id = body['local_id']
            career_path_item.careerpath_name = body['careerpath_name']
            db.session.add(career_path_item)  # agrega un servicio a la base de datos
            db.session.commit()

def upload_skills():
    list_skills = SkillName.getAllSkills()
    if (list_skills==0):
        list_new_skills = [
            {
                "careerpath_name_id": 1,
                "skill_name": "HTML5",
            },
            {
                "careerpath_name_id": 1,
                "skill_name": "CSS",
            },
            {
                "careerpath_name_id": 1,
                "skill_name": "JavaScript",
            },
            {
                "careerpath_name_id": 1,
                "skill_name": "React",
            },
            {
                "careerpath_name_id": 1,
                "skill_name": "Angular",
            },
            {
                "careerpath_name_id": 1,
                "skill_name": "JQuery",
            },
            {
                "careerpath_name_id": 1,
                "skill_name": "Bootstrap",
            },
            {
                "careerpath_name_id": 2,
                "skill_name": "Java",
            },
            {
                "careerpath_name_id": 2,
                "skill_name": "Python",
            },
            {
                "careerpath_name_id": 2,
                "skill_name": "Node",
            },
            {
                "careerpath_name_id": 2,
                "skill_name": "Ruby",
            },
            {
                "careerpath_name_id": 2,
                "skill_name": ".NET",
            },
            {
                "careerpath_name_id": 2,
                "skill_name": "SQL",
            },
            {
                "careerpath_name_id": 2,
                "skill_name": "APACHE",
            },
            {
                "careerpath_name_id": 2,
                "skill_name": "ISS server",
            },
            {
                "careerpath_name_id": 3,
                "skill_name": "JAVA",
            },
            {
                "careerpath_name_id": 3,
                "skill_name": "React Native",
            },
            {
                "careerpath_name_id": 3,
                "skill_name": "REST",
            }
        ]
        
        for item in range (len(list_new_skills)):
            body = list_new_skills[item]
            skill_name_item = SkillName()
            skill_name_item.careerpath_name_id = body['careerpath_name_id']
            skill_name_item.skill_name = body['skill_name']
            db.session.add(skill_name_item)  # agrega un servicio a la base de datos
            db.session.commit()


