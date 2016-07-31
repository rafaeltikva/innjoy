from flask import Blueprint

hotel_homepage = Blueprint('hotel_homepage', __name__)

@hotel_homepage.route('/')
@hotel_homepage.route('/home')
def innjoy_hotel_homepage(hotel):
    return '%s\'s Homepage' % hotel

