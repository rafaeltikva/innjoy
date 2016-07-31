from flask import Flask

app = Flask(__name__, static_folder='../../frontend/src/static', template_folder='../../frontend/src/templates')