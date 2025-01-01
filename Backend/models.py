from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__= "users"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True )
    name = db.Column(db.String(50), nullable=False , unique=True)
    email = db.Column(db.String(50), nullable=False,unique=True )
    password = db.Column(db.String(50),nullable=False)
    profile_url = db.Column(db.String(100))



