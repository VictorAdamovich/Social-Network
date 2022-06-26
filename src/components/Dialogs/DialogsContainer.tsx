import React from 'react';
import {addNewMessage, DialogPageType, updateNewMessage} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootReduxType} from '../../redux/redux-store';


type MapStateToPropsType = {
    state: DialogPageType
    isAuth:boolean | undefined
}

let mapStateToProps = (state: RootReduxType): MapStateToPropsType => {
    return {
        state: state.dialogsPage,
        isAuth:state.auth.isAuth
    };
};

export const DialogContainer = connect(mapStateToProps, {
    addNewMessage,
    updateNewMessage
})(Dialogs);