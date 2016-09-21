from flask_restful import Resource

class Maruya_crud(Resource):
    def get(self):
        return {'hello': 'world'}