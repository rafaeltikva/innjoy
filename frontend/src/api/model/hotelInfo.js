import userInfo from './userInfo'
import {greetUser} from '../helpers'

const hotelInfo = {
    id: 92,
    title: "Hotel Name",
    data: {
        name: "David Intercontinental",
        address: "Moshe Dayan St. 55, Tel Aviv",
        logo: "",
        images: [
            {
                src: "http://ihg.scene7.com/is/image/ihg/intercontinental-tel-aviv-4157920255-2x1?hei=720&wid=1440&fit=fit,1",
                alt: 'Welcome'
            },

            {
                src: "http://ihg.scene7.com/is/image/ihg/intercontinental-tel-aviv-4153895183-2x1?hei=720&amp;wid=1440&amp;fit=fit,1",
                alt: 'Welcome'
            },
            {
                src: "http://ihg.scene7.com/is/image/ihg/intercontinental-tel-aviv-4150041747-2x1?hei=720&amp;wid=1440&amp;fit=fit,1",
                alt: 'Rooms'

            },
            {
                src: "http://ihg.scene7.com/is/image/ihg/intercontinental-tel-aviv-4151443406-2x1?hei=720&amp;wid=1440&amp;fit=fit,1",
                alt: 'Amenities'

            }
        ],
        options: {
            greeting: greetUser(userInfo.firstName)
        },
        services: {
            hotel: {
                title: "Hotel Services",
                data: [
                    {
                        title: "Concierge",
                        slug: "concierge",
                        description: "",
                        id: 2
                    },
                    {
                        title: "Front Desk",
                        slug: "front-desk",
                        description: "",
                        id: 3
                    },
                    {
                        title: "Room Service",
                        slug: "room-service",
                        description: "",
                        id: 4
                    },

                    {
                        title: "Amenities",
                        slug: "amenities",
                        description: "",
                        id: 5
                    },
                    {
                        title: "Spa",
                        slug: "amenities/spa",
                        description: "",
                        id: 15
                    },
                    {
                        slug: "transportation",
                        title: "Transportation",
                        description: "",
                        id: 6
                    }, {
                        slug: "gift-shop",
                        title: "Gift Shop",
                        description: "",
                        id: 7
                    }
                ]
            },
            nearby: {
                title: "Nearby",
                data: [
                    {
                        slug: "coffee",
                        title: "Coffee",
                        description: "",
                        id: 8
                    },
                    {
                        slug: "restaurants",
                        title: "Restaurants",
                        description: "",
                        id: 9
                    },
                    {
                        slug: "shopping",
                        title: "Shopping",
                        description: "",
                        id: 10
                    },
                    {
                        slug: "fun",
                        title: "Fun",
                        description: "",
                        id: 11
                    },
                    {
                        slug: "events",
                        title: "Events",
                        description: "",
                        id: 12
                    }
                ]
            }
        }
    }

};

export default hotelInfo;