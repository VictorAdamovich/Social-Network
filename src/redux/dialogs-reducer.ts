const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';


export type DialogsPageACType =
    ReturnType<typeof updateNewMessageAC> |
    ReturnType<typeof addNewMessageAC>


export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
    avatar: string
}


export type DialogPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}


let initialState: DialogPageType = {
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
};

export const dialogsReducer = (state: DialogPageType = initialState, action: DialogsPageACType): DialogPageType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let newMessage: MessagesType = {id: 6, message: state.newMessageText};
            return {
                ...state,
                messages: state.messages.concat(newMessage),
                newMessageText:''
            };
        }
        case UPDATE_NEW_MESSAGE: {
            return{...state,
                newMessageText:action.payload.text,
            }
        }
        default: {
            return state;
        }
    }
    return state;
};

export const updateNewMessageAC = (text: string) => {
    return {type: UPDATE_NEW_MESSAGE, payload: {text}} as const;
};

export const addNewMessageAC = () => ({type: ADD_NEW_MESSAGE} as const);

