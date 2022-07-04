import React from 'react';
import {
    addNewMessage,
    DialogPageType,
    updateNewMessage
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootReduxType} from '../../redux/redux-store';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';


type MapStateToPropsType = {
    state: DialogPageType
}

let mapStateToProps = (state: RootReduxType): MapStateToPropsType => {
    return {
        state: state.dialogsPage,
    };
};

let DialogAuthRedirectComponent = WithAuthRedirect(Dialogs);


export const DialogContainer = connect(mapStateToProps, {
    addNewMessage,
    updateNewMessage
})(DialogAuthRedirectComponent);