import React from 'react';
import {addNewMessage, DialogPageType, updateNewMessage} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootReduxType} from '../../redux/redux-store';


type MapStateToPropsType = {
    state: DialogPageType
}

let mapStateToProps = (state: RootReduxType): MapStateToPropsType => {
    return {
        state: state.dialogsPage
    };
};

export const DialogContainer = connect(mapStateToProps, {
    addNewMessage,
    updateNewMessage
})(Dialogs);