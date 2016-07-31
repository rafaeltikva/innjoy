from flask import Blueprint

signup = Blueprint('signup', __name__)

@signup.route('/signup')
def innjoy_signup():
    return 'InnJoy Signup Page'

