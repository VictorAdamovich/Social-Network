import React from 'react';
import {addNewMessage, DialogPageType} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootReduxType} from '../../redux/store';
import {WithAuthRedirect} from '../../HOC\'s/WithAuthRedirect';

let mapStateToProps = (state: RootReduxType): MapStateToPropsType => {
    return {
        state: state.dialogsPage,
    };
};

let DialogAuthRedirectComponent = WithAuthRedirect(Dialogs);


export const DialogContainer = connect(mapStateToProps, {
    addNewMessage,
})(DialogAuthRedirectComponent);


type MapStateToPropsType = {
    state: DialogPageType
}

type mapDispatchToPropsType = {
    addMessage: (message: string) => void
}
