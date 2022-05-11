export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?', likeCount: 4},
                {id: 2, message: 'Its my first post?', likeCount: 11}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dimych',
                    avatar: 'https://abrakadabra.fun/uploads/posts/2021-12/1640107975_1-abrakadabra-fun-p-krutie-anime-avatarki-dlya-standoff-1.jpg'
                },
                {
                    id: 2,
                    name: 'Andrei',
                    avatar: 'https://abrakadabra.fun/uploads/posts/2021-12/1640107975_1-abrakadabra-fun-p-krutie-anime-avatarki-dlya-standoff-1.jpg'
                },
                {
                    id: 3,
                    name: 'Sveta',
                    avatar: 'https://abrakadabra.fun/uploads/posts/2021-12/1640107975_1-abrakadabra-fun-p-krutie-anime-avatarki-dlya-standoff-1.jpg'
                },
                {
                    id: 4,
                    name: 'Victor',
                    avatar: 'https://abrakadabra.fun/uploads/posts/2021-12/1640107975_1-abrakadabra-fun-p-krutie-anime-avatarki-dlya-standoff-1.jpg'
                },
                {
                    id: 5,
                    name: 'Valera',
                    avatar: 'https://abrakadabra.fun/uploads/posts/2021-12/1640107975_1-abrakadabra-fun-p-krutie-anime-avatarki-dlya-standoff-1.jpg'
                }
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Howe are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo '}
            ]
        },
    },
    _callSubscriber(state: any) {
        console.log('hello')
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action: any) {
        if (action.type === 'ADD_POST') {
            let newPost = {id: 5, message: this._state.profilePage.newPostText, likeCount: 0}
            this._state.profilePage.posts.unshift(newPost)
            this._callSubscriber(this._state)
            this._state.profilePage.newPostText = ''
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}
