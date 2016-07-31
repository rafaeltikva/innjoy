import os
from flask import Flask
from config import config
from blueprints import homepage,api,signin, signup, hotel_homepage, hotel_checkin

def init_config(backend_path = ''):
    print 'itializing config...'
    config['APP_ROOT'] = os.path.dirname(backend_path)
    config['BACKEND_ROOT'] = backend_path
    config['FRONTEND_ROOT'] = os.path.join(config['APP_ROOT'], 'frontend')
    config['FRONTEND_SRC'] = os.path.join(config['FRONTEND_ROOT'], 'src')
    config['TEMPLATES_FOLDER'] = os.path.join(config['FRONTEND_SRC'], 'templates')
    config['STATIC_FOLDER'] = os.path.join(config['FRONTEND_SRC'], 'static')
    config['REACT_COMPONENTS'] = os.path.join(config['FRONTEND_SRC'], 'components')
    print config

def save_config(app):
    app.config.update(config)

def init_flask(secret_key='secret'):
    print 'initializing flask...'
    app = Flask(__name__, static_folder=config['STATIC_FOLDER'], template_folder=config['TEMPLATES_FOLDER'])

    # set secret key
    app.secret_key = secret_key

    return app

def register_blueprints(app):
    app.register_blueprint(homepage)
    app.register_blueprint(api)
    app.register_blueprint(signin)
    app.register_blueprint(signup)
    app.register_blueprint(hotel_homepage, subdomain='<hotel>')
    app.register_blueprint(hotel_checkin)

