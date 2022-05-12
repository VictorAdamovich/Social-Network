import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

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
            ],
            newMessageText: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}


export const addPostAC = () => ({type: 'ADD_POST'})
export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})
export const addNewMessageAC = () => ({type: 'ADD-NEW-MESSAGE'})
export const updateNewMessageAC = (text: string) => ({type: 'UPDATE-NEW-MESSAGE', newMessageText: text})