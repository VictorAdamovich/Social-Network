import {renderEntireTree} from "../render";

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi,how are you?', likeCount: 4},
            {id: 2, message: 'Its my first post?', likeCount: 11}
        ],
        newPostText:''
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: 'Dimych',
                avatar: 'https://bipbap.ru/wp-content/uploads/2019/08/0c7559dc264ad49ccfc6c8925dbd65a2.jpg'
            },
            {
                id: 2,
                name: 'Andrei',
                avatar: 'https://bipbap.ru/wp-content/uploads/2019/08/0c7559dc264ad49ccfc6c8925dbd65a2.jpg'
            },
            {
                id: 3,
                name: 'Sveta',
                avatar: 'https://bipbap.ru/wp-content/uploads/2019/08/0c7559dc264ad49ccfc6c8925dbd65a2.jpg'
            },
            {
                id: 4,
                name: 'Victor',
                avatar: 'https://bipbap.ru/wp-content/uploads/2019/08/0c7559dc264ad49ccfc6c8925dbd65a2.jpg'
            },
            {
                id: 5,
                name: 'Valera',
                avatar: 'https://bipbap.ru/wp-content/uploads/2019/08/0c7559dc264ad49ccfc6c8925dbd65a2.jpg'
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
}


export const addPost = () => {
    let newPost = {id: 5, message: state.profilePage.newPostText, likeCount: 0}
    state.profilePage.posts.unshift(newPost)
    renderEntireTree(state)
    state.profilePage.newPostText=''
}

export const updateNewPostText=(newText:string)=>{
    state.profilePage.newPostText=newText
    renderEntireTree(state)
}