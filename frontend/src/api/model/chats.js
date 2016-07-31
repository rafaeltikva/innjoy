const chats = {
    data: [
        {
            id: 777,
            user: {
                id: 7,
                name: 'Jimmy',
                role: 'Concierge',
                avatar: ''
            },
            options: {
                showBubble: true,
                showWindow: false,
                hasNew: true
            },
            messages: [
                {
                    id: 233,
                    author: "Jimmy",
                    date: '02/06/2016',
                    avatar: '',
                    isRead: true,
                    message: "Hey! How you Doin?!"
                },
                {
                    id: 234,
                    author: "Rafael",
                    date: '02/06/2016',
                    avatar: '',
                    isRead: true,
                    message: "I'm fine and you?!"
                },
                {
                    id: 235,
                    author: "Jimmy",
                    date: '02/06/2016',
                    avatar: '',
                    isRead: false,
                    message: "I'm excellent!"
                }
            ]
        },
        {
            id: 2101,
            user: {
                id: 9,
                name: 'Jane',
                role: 'Spa',
                avatar: ''
            },
            options: {
                showBubble: true,
                showWindow: false,
                hasNew: true
            },
            messages: [
                {
                    id: 433,
                    author: "Jane",
                    date: '03/04/2016',
                    avatar: '',
                    isRead: true,
                    message: "Hey Rafael, ready for your Swedish massage?"
                },
                {
                    id: 434,
                    author: "Rafael",
                    date: '03/04/2016',
                    avatar: '',
                    isRead: true,
                    message: "Hell yea!"
                },
                {
                    id: 435,
                    author: "Jane",
                    date: '04/04/2016',
                    avatar: '',
                    isRead: false,
                    message: "Well come on then!"
                }
            ]
        },

        {
            id: 2001,
            user: {
                id: 8,
                name: 'Billy',
                role: 'Front Desk',
                avatar: ''
            },
            options: {
                showBubble: true,
                showWindow: false,
                hasNew: true
            },
            messages: [
                {
                    id: 333,
                    author: "Billy",
                    date: '02/06/2016',
                    avatar: '',
                    isRead: true,
                    message: "Hey Rafael, you're taxi is here."
                },
                {
                    id: 334,
                    author: "Rafael",
                    date: '02/06/2016',
                    avatar: '',
                    isRead: true,
                    message: "Great, I'll be down in 5 minutes."
                },
                {
                    id: 335,
                    author: "Billy",
                    date: '03/06/2016',
                    avatar: '',
                    isRead: false,
                    message: "No problem. The driver is having a cup of coffee. "
                },
                {
                    id: 336,
                    author: "Billy",
                    date: '03/06/2016',
                    avatar: '',
                    isRead: false,
                    message: "Take your time :)"
                }
            ]
        },
        {
            id: 982,
            user: {
                id: 10,
                name: 'Ramon',
                role: 'Bellboy',
                avatar: ''
            },
            options: {
                showBubble: false,
                showWindow: false,
                hasNew: false
            },
            messages: [
                {
                    id: 333,
                    author: "Rafael",
                    date: '22/07/2016',
                    avatar: '',
                    isRead: true,
                    message: "Hey Ramon, can you take my bags to the underground parking?"
                },
                {
                    id: 334,
                    author: "Ramon",
                    date: '22/07/2016',
                    avatar: '',
                    isRead: true,
                    message: "Of course sir"
                },
                {
                    id: 335,
                    author: "Rafael",
                    date: '22/07/2016',
                    avatar: '',
                    isRead: true,
                    message: "Thanks"
                }
            ]
        }]
};

export default chats;