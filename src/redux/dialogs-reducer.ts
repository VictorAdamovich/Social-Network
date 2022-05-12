const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'


export const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {id: 6, message: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessageText
            return state;
        default:
            return state;
    }
    return state
}