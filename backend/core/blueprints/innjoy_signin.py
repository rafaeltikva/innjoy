from flask import Blueprint

signin = Blueprint('signin', __name__)

@signin.route('/signin')
def innjoy_signin():
    return 'InnJoy Signin Page'

