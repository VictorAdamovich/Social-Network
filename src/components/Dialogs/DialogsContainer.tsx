import React from 'react';
import {addNewMessageAC, DialogPageType, updateNewMessageAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootReduxType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStateToPropsType={
    state:DialogPageType
}

type MapDispatchToPropsType={
    onAddMessage:()=>void
    onChangeHandler:(text:string)=>void
}


let mapStateToProps = (state:RootReduxType):MapStateToPropsType => {
    return {
        state: state.dialogsPage
    };
};

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        onAddMessage:()=>{
            dispatch(addNewMessageAC());
        },
        onChangeHandler:(text:string)=>{
            dispatch(updateNewMessageAC(text));
        }

    };
};


export const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);