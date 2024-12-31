from flask import Flask,request,jsonify
from config import Config
from flask_restx import Api ,reqparse ,Resource ,fields
from flask_cors import CORS
from models import db,User

Config = Config()
app = Flask(__name__)
app.config.from_object(Config)
CORS(app, resources={r"/apiv1/*": {"origins": "http://localhost:5173"}})



api = Api(app, version='1.0', title='Your API', description='API Description')
api_ns = api.namespace("Reference", path='/apiv1', description="Reference Data")
api_ns = api.namespace("Reference", path='/apiv1', description="Reference Data")



db.init_app(app)

with app.app_context():
    db.create_all()



@api.route('/swagger')
class SwaggerResource(Resource):
    def get(self):
        return api.swagger_ui()
    
# create user table

User_fields = api.model('Users', {
    'id': fields.Integer,
    'name': fields.String(description=''),
    'email': fields.String(description=''),
    'password': fields.String(description=''),
    'profile_url':fields.String(description='')
})

create_user_parser = api.model('CreateUser', {
    'name': fields.String(required=True, description='The name of the user'),
    'email': fields.String(required=True, description='The email of the user'),
    'password': fields.String(required=True, description='The password of the user'),
    'profile_url': fields.String(required=True, description='The password of the user'),
})

@api_ns.route('/Users')
class GUDUser(Resource):
    @api_ns.marshal_with(User_fields)
    def get(self):
        print("GET request received")  
        user = db.session.query(User).all()
        return user

    @api.expect(create_user_parser)
    def post(self): 
        
        data = request.json
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        profile_url = data.get('profile_url')
        new_user = User(name=name, email=email, password=password, profile_url=profile_url)
        db.session.add(new_user)
        db.session.commit()
        return {"message": "User created successfully", "id": new_user.id}, 201









    
if __name__=='__main__':
    app.run(host='127.0.0.1',port=5000)