import React, {ChangeEvent, useState} from 'react';
import {useAppSelector} from '../../../redux/store';
import {updateUserStatusTC} from '../../../redux/profile-reducer';
import {useDispatch} from 'react-redux';
import TextField from '@mui/material/TextField';

export const ProfileStatus = () => {
    const dispatch: any = useDispatch();
    const profileStatus = useAppSelector(state => state.profilePage.status);
    const updateUserStatusHandle = (status: string) => dispatch(updateUserStatusTC(status));

    let [editeMode, setEditeMode] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(profileStatus);

    const editModeHandle = () => {
        setEditeMode(!editeMode);
        updateUserStatusHandle(status);
    };
    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value);

    return (
        <div>
            {editeMode
                ? <div>
                    <TextField id="standard-basic" value={status} variant="standard"
                               autoFocus={true} onChange={onChangeHandle}
                               onBlur={editModeHandle}/>

                </div>
                : <div>
                    <span
                        onDoubleClick={() => setEditeMode(!editeMode)}>{profileStatus || 'Нет статуса'}</span>
                </div>}
        </div>
    );
};

