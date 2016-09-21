from flask import Flask, render_template
from flask_restful import Api
from flask_webpack import Webpack

from maruya_restful import Maruya_crud

webpack = Webpack()

def create_app(settings_override=None):
    app = Flask(__name__)

    params = {
        'DEBUG': True,
        'WEBPACK_MANIFEST_PATH': './build/manifest.json'
    }    

    app.config.update(params)

    if settings_override:
        app.config.update(settings_override)

    webpack.init_app(app)

    return app

# Init Flask app
app = create_app()
api = Api(app)

# Register REST resource
api.add_resource(Maruya_crud, '/maruya')

# Add routes
@app.route('/')
def index():
    return render_template('index.jinja2')




