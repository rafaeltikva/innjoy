from flask import Blueprint

hotel_checkin = Blueprint('hotel_checkin', __name__)

@hotel_checkin.route('/checkin')
def innjoy_hotel_checkin():
    return 'Hotel Checkin Page'

