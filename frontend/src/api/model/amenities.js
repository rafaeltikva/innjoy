const amenities = {
    title: "Amenities",
    data: [
        {
            slug: "lounge",
            title: "Lounge",
            img: "http://ihg.scene7.com/is/image/ihg/intercontinental-tel-aviv-3955051135-2x1?wid=1052&hei=526&fit=fit,1",
            shortDescription: "Sit back & relax in our luxurious lounge. High-speed internet access and open bar 24/7.",
            longDescription: "Enjoy a stress-free & productive environment to get some work done, recharge or just sit back and let us serve you from our wide selection of food & bevarages.",
            id: 23,
            type: "resource",
            isRoot: true,
            likedUsers: [
                {
                    fullName: "Cristiano Ronaldo",
                    img: ''
                },
                {
                    fullName: "Lionel Messi",
                    img: ''
                },
                {
                    fullName: "Eyal Meshumar",
                    img: ''
                },
                {
                    fullName: "Yoav Ziv",
                    img: ''
                },
                {
                    fullName: "Nosa Igiebor",
                    img: ''
                }
            ]
        },
        {
            slug: "bar",
            title: "Bar",
            img: "http://ihg.scene7.com/is/image/ihg/intercontinental-tel-aviv-4151840387-2x1?wid=1052&hei=526&fit=fit,1",
            shortDescription: "Enjoy a drink in our warm & cosey bar with hundreds of wines from the whole world.",
            longDescription: "Over 5,000 types of beer, 2,500 types of wine at your service... What are you still doing there? Come have a drink with us.",
            id: 31,
            type: "resource",
            isRoot: true,
            likedUsers: [
                {
                    fullName: "Cristiano Ronaldo",
                    img: ''
                },
                {
                    fullName: "Lionel Messi",
                    img: ''
                },
                {
                    fullName: "Eyal Meshumar",
                    img: ''
                },
                {
                    fullName: "Yoav Ziv",
                    img: ''
                },
                {
                    fullName: "Nosa Igiebor",
                    img: ''
                }
            ]
        },
        {
            slug: "fitness",
            title: "Fitness",
            img: "http://www3.hilton.com/resources/media/hi/TLVHITW/en_US/img/shared/full_page_image_gallery/main/HL_gym01_3_675x359_FitToBoxSmallDimension_Center.jpg",
            shortDescription: "Break a sweat with a ocean-view to motivate you",
            longDescription: "Life & Work(out) balance with an ocean-view for inspiration. Who said working out can't be fun?",
            id: 32,
            type: "resource",
            isRoot: true,
            likedUsers: []
        },
        {
            slug: "pool",
            title: "Pool",
            img: "http://courtyard.marriott.com/img/amenities/cy_amenity-pool-lrg.jpg",
            shortDescription: "Don't forget your bathing suite!",
            longDescription: "Yes... We have a huge pool. Take a dip & see for yourself",
            id: 39,
            type: "resource",
            isRoot: true,
            likedUsers: []

        },
        {
            id: 40,
            slug: "spa",
            title: "Spa",
            img: "http://www3.hilton.com/resources/media/hi/TLVHITW/en_US/img/shared/full_page_image_gallery/main/HL_spa03_2_675x359_FitToBoxSmallDimension_Center.jpg",
            shortDescription: "Free your mind & muscles from stress in our captivating spa",
            longDescription: "Discover our wide range of spa treatments. From massages, saunas, mannicures... True relaxation just for you",
            type: "category",
            isRoot: true,
            data: []
        },
        {
            id: 911,
            type: "category",
            parentId: 40,
            slug: "massages",
            title: "Massages",
            isRoot: false,
            data: []

        },
        {
            id: 912,
            type: "category",
            parentId: 40,
            slug: "nails",
            title: "Nails",
            likedUsers: [],
            data: []
        },
        {
            id: 913,
            type: "category",
            parentId: 40,
            slug: "waxing",
            title: "Waxing",
            likedUsers: [],
            data: []
        },
        {
            id: 914,
            type: "category",
            parentId: 40,
            slug: "hair",
            title: "Hair",
            likedUsers: [],
            data: []
        },
        {
            id: 9921,
            slug: "swedish-massage",
            title: "Swedish Massage",
            img: "http://www.lastminute.com/c/content/dam/site_gb/Spa/370x205_treatments_massage_4.jpg",
            shortDescription: "Relaxing the whole body this is the perfect in ultimate indulgence.",
            longDescription: "<p>Swedish massage is the most common and best-known type of massage we offer. Discover true meaning of relaxation and let your body feel wonderful & rejuvenated. </p>" +
            "<p>Swedish massages are shown to reduce pain, improve circulation, ease joint stiffness, and increase range of motion. </p><p>Book your appointment now & add a dose of relaxation to your wonderful vacation.</p>",
            type: "resource",
            isRoot: false,
            parentId: 911,
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
            id: 9922,
            type: "resource",
            isRoot: false,
            parentId: 911,
            slug: "deep-tissue-massage",
            title: "Deep Tissue Massage",
            img: "http://www.lastminute.com/c/content/dam/site_gb/Spa/370x205_treatments_massage_2.jpg",
            shortDescription: "With the focus on your muscles and deep tissue the perfect remedy to tension.",
            longDescription: "This is a long excerpt of deep tissue massage",
            likedUsers: []
        },
        {
            id: 9923,
            type: "resource",
            isRoot: false,
            parentId: 911,
            slug: "aromatherapy-massage",
            title: "Aromatherapy Massage",
            img: "http://www.lastminute.com/c/content/dam/site_gb/Spa/370x205_massage_oils.jpg",
            shortDescription: "Let your therapist help you to choose the perfect combination of oils to suit your needs.",
            longDescription: "This is a long excerpt of aromatherapy massage",
            likedUsers: []
        },
        {
            id: 9924,
            type: "resource",
            parentId: 911,
            isRoot: false,
            slug: "hot-stone-massage",
            title: "Hot Stone Massage",
            img: "http://www.lastminute.com/c/content/dam/site_gb/Spa/370x205_treatments_massage_3.jpg",
            shortDescription: "Warming, no matter what the time of year this massage will help you relax after a busy week.",
            longDescription: "This is a long excerpt of hot stone massage",
            likedUsers: []
        }
    ]
};

export default amenities;