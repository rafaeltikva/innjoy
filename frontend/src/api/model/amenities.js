const amenities = {
    title: "Amenities",
    data: [
        {
            slug: "lounge",
            title: "Lounge",
            img: "http://ihg.scene7.com/is/image/ihg/intercontinental-tel-aviv-3955051135-2x1?wid=1052&hei=526&fit=fit,1",
            shortExcerpt: "Sit back & relax in our luxurious lounge. High-speed internet access and open bar 24/7.",
            longExcerpt: "Enjoy a stress-free & productive environment to get some work done, recharge or just sit back and let us serve you from our wide selection of food & bevarages.",
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
            shortExcerpt: "Enjoy a drink in our warm & cosey bar with hundreds of wines from the whole world.",
            longExcerpt: "Over 5,000 types of beer, 2,500 types of wine at your service... What are you still doing there? Come have a drink with us.",
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
            shortExcerpt: "Break a sweat with a ocean-view to motivate you",
            longExcerpt: "Life & Work(out) balance with an ocean-view for inspiration. Who said working out can't be fun?",
            id: 32,
            type: "resource",
            isRoot: true,
            likedUsers: []
        },
        {
            slug: "pool",
            title: "Pool",
            img: "http://courtyard.marriott.com/img/amenities/cy_amenity-pool-lrg.jpg",
            shortExcerpt: "Don't forget your bathing suite!",
            longExcerpt: "Yes... We have a huge pool. Take a dip & see for yourself",
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
            shortExcerpt: "Free your mind & muscles from stress in our captivating spa",
            longExcerpt: "Discover our wide range of spa treatments. From massages, saunas, mannicures... True relaxation just for you",
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
            slug: "swedish_massage",
            title: "Swedish Massage",
            img: "http://www.lastminute.com/c/content/dam/site_gb/Spa/370x205_treatments_massage_4.jpg",
            shortExcerpt: "Relaxing the whole body this is the perfect in ultimate indulgence.",
            longExcerpt: "This is a long excerpt of swedish massage",
            type: "resource",
            isRoot: false,
            parentId: 911,
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
            id: 9922,
            type: "resource",
            isRoot: false,
            parentId: 911,
            slug: "deep_tissue_massage",
            title: "Deep Tissue Massage",
            img: "http://www.lastminute.com/c/content/dam/site_gb/Spa/370x205_treatments_massage_2.jpg",
            shortExcerpt: "With the focus on your muscles and deep tissue the perfect remedy to tension.",
            longExcerpt: "This is a long excerpt of deep tissue massage",
            likedUsers: []
        },
        {
            id: 9923,
            type: "resource",
            isRoot: false,
            parentId: 911,
            slug: "aromatherapy_massage",
            title: "Aromatherapy Massage",
            img: "http://www.lastminute.com/c/content/dam/site_gb/Spa/370x205_massage_oils.jpg",
            shortExcerpt: "Let your therapist help you to choose the perfect combination of oils to suit your needs.",
            longExcerpt: "This is a long excerpt of aromatherapy massage",
            likedUsers: []
        },
        {
            id: 9924,
            type: "resource",
            parentId: 911,
            isRoot: false,
            slug: "hot_stone_massage",
            title: "Hot Stone Massage",
            img: "http://www.lastminute.com/c/content/dam/site_gb/Spa/370x205_treatments_massage_3.jpg",
            shortExcerpt: "Warming, no matter what the time of year this massage will help you relax after a busy week.",
            longExcerpt: "This is a long excerpt of hot stone massage",
            likedUsers: []
        }
    ]
};

export default amenities;