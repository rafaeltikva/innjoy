from flask import Blueprint

homepage = Blueprint('homepage', __name__)

@homepage.route('/')
@homepage.route('/index')
def innjoy_homepage():
    return 'InnJoy Homepage'

