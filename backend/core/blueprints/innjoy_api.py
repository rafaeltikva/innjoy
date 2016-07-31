from flask import render_template
from flask import Blueprint

api = Blueprint('api', __name__)

@api.route('/api/')
def innjoy_api():
    return 'API page'
    #return render_template('index.html')