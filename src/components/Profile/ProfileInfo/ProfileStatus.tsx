import React, {ChangeEvent, useState} from 'react';
import {useAppSelector} from '../../../redux/store';
import {updateUserStatusTC} from '../../../redux/profile-reducer';

export const ProfileStatus = () => {
    const profileStatus = useAppSelector(state => state.profilePage.status);
    const updateUserStatusHandle = (status: string) => updateUserStatusTC(status);

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
                    <input type="text"
                           autoFocus={true}
                           value={status}
                           onChange={onChangeHandle}
                           onDoubleClick={editModeHandle}
                           onBlur={editModeHandle}
                    />
                </div>
                : <div>
                    <span
                        onDoubleClick={editModeHandle}>{profileStatus || 'Нет статуса'}</span>
                </div>}
        </div>
    );
};

