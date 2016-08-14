const restaurants = {
    title: "Restaurants",
    id: 9,
    data: [
        {
            slug: "thai-house",
            title: "Thai House",
            img: "https://irs2.4sqi.net/img/general/width960/VuMPZ1tG9ptnlHQXA7_QLPzug8M1t3ZrqF77kCuYyn4.jpg",
            shortDescription: "The best Thai restaurant in Tel Aviv",
            longDescription: '',
            id: 233,
            address: '8 Bugrashov St (Ben Yehuda St.) Tel Aviv 63429',
            price: '$$',
            salesText: '5% OFF for hotel guests!',
            type: "resource",
            isRoot: false,
            parentId: 9,
            ratings: {
                avg: 4.4,
                reviews: []
            },
            likedUsers: [
                {
                    fullName: "Cristiano Ronaldo",
                    img: 'http://img.uefa.com/imgml/TP/players/9/2014/324x324/63706.jpg'
                },
                {
                    fullName: "Lionel Messi",
                    img: 'http://img.uefa.com/imgml/TP/players/9/2015/324x324/95803.jpg'
                },
                {
                    fullName: "Eyal Meshumar",
                    img: 'http://mad.walla.co.il/archive/475972-20.gif'
                },
                {
                    fullName: "Yoav Ziv",
                    img: 'http://img.uefa.com/imgml/TP/players/1/2016/324x324/55778.jpg'
                },
                {
                    fullName: "Nosa Igiebor",
                    img: 'http://img.uefa.com/imgml/TP/players/1/2016/324x324/250036953.jpg'
                }
            ]
        },
        {
            slug: "rustico",
            title: "Rustico",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/03/96/90/76/rustico.jpg",
            shortDescription: "Delicious Italian cuisine",
            longDescription: '',
            id: 234,
            address: '15 Shderot Rothschild, Tel Aviv 6688118, Israel',
            price: '$',
            salesText: '',
            type: "resource",
            isRoot: false,
            parentId: 9,
            ratings: {
                avg: 4.6,
                reviews: []
            },
            likedUsers: [
                {
                    fullName: "Cristiano Ronaldo",
                    img: 'http://img.uefa.com/imgml/TP/players/9/2014/324x324/63706.jpg'
                },
                {
                    fullName: "Lionel Messi",
                    img: 'http://img.uefa.com/imgml/TP/players/9/2015/324x324/95803.jpg'
                },
                {
                    fullName: "Eyal Meshumar",
                    img: 'http://mad.walla.co.il/archive/475972-20.gif'
                },
                {
                    fullName: "Yoav Ziv",
                    img: 'http://img.uefa.com/imgml/TP/players/1/2016/324x324/55778.jpg'
                },
                {
                    fullName: "Nosa Igiebor",
                    img: 'http://img.uefa.com/imgml/TP/players/1/2016/324x324/250036953.jpg'
                }
            ]
        },
         {
            slug: "moon",
            title: "Moon",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/01/40/75/b4/6-2-bast-sushi.jpg",
            shortDescription: "Enjoy a peaceful & authentic Asian environment",
            longDescription: '',
            id: 235,
            address: '58 Bograshov Street, Tel Aviv, Israel',
            price: '$$$',
            salesText: '',
            type: "resource",
            isRoot: false,
            parentId: 9,
            ratings: {
                avg: 4.8,
                reviews: []
            },
            likedUsers: [
                {
                    fullName: "Cristiano Ronaldo",
                    img: 'http://img.uefa.com/imgml/TP/players/9/2014/324x324/63706.jpg'
                },
                {
                    fullName: "Lionel Messi",
                    img: 'http://img.uefa.com/imgml/TP/players/9/2015/324x324/95803.jpg'
                },
                {
                    fullName: "Eyal Meshumar",
                    img: 'http://mad.walla.co.il/archive/475972-20.gif'
                },
                {
                    fullName: "Yoav Ziv",
                    img: 'http://img.uefa.com/imgml/TP/players/1/2016/324x324/55778.jpg'
                },
                {
                    fullName: "Nosa Igiebor",
                    img: 'http://img.uefa.com/imgml/TP/players/1/2016/324x324/250036953.jpg'
                }
            ]
        },
        {
            slug: "mezcal-tequila-bar",
            title: "Mezcal Tequila Bar",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/03/f1/70/ab/add-a-caption.jpg",
            shortDescription: "Delicious authentic mexican food",
            longDescription: '',
            id: 236,
            address: '2 Vital | Florentin, Tel Aviv 6608802, Israel',
            price: '$$',
            salesText: '',
            type: "resource",
            isRoot: false,
            parentId: 9,
            ratings: {
                avg: 4.7,
                reviews: []
            },
            likedUsers: [
                {
                    fullName: "Cristiano Ronaldo",
                    img: 'http://img.uefa.com/imgml/TP/players/9/2014/324x324/63706.jpg'
                },
                {
                    fullName: "Lionel Messi",
                    img: 'http://img.uefa.com/imgml/TP/players/9/2015/324x324/95803.jpg'
                },
                {
                    fullName: "Eyal Meshumar",
                    img: 'http://mad.walla.co.il/archive/475972-20.gif'
                },
                {
                    fullName: "Yoav Ziv",
                    img: 'http://img.uefa.com/imgml/TP/players/1/2016/324x324/55778.jpg'
                },
                {
                    fullName: "Nosa Igiebor",
                    img: 'http://img.uefa.com/imgml/TP/players/1/2016/324x324/250036953.jpg'
                }
            ]
        },
        {
            slug: "nanuchka",
            title: "Nanuchka",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/01/1c/b6/cc/party-time-in-nanushka.jpg",
            shortDescription: "Witness the Georgian fantastic mix of food & culture",
            longDescription: '',
            id: 237,
            address: '30 Lilienblum, Tel Aviv 6513309, Israel',
            price: '$$',
            salesText: '',
            type: "resource",
            isRoot: false,
            parentId: 9,
            ratings: {
                avg: 4.7,
                reviews: []
            },
            likedUsers: [
                {
                    fullName: "Cristiano Ronaldo",
                    img: 'http://img.uefa.com/imgml/TP/players/9/2014/324x324/63706.jpg'
                },
                {
                    fullName: "Lionel Messi",
                    img: 'http://img.uefa.com/imgml/TP/players/9/2015/324x324/95803.jpg'
                },
                {
                    fullName: "Eyal Meshumar",
                    img: 'http://mad.walla.co.il/archive/475972-20.gif'
                },
                {
                    fullName: "Yoav Ziv",
                    img: 'http://img.uefa.com/imgml/TP/players/1/2016/324x324/55778.jpg'
                },
                {
                    fullName: "Nosa Igiebor",
                    img: 'http://img.uefa.com/imgml/TP/players/1/2016/324x324/250036953.jpg'
                }
            ]
        }
    ]
};

export default restaurants;