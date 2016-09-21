from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class Maruya_crud(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(Maruya_crud, '/maruya')



@app.route('/')
def index():
    return 'Maruya app running'
