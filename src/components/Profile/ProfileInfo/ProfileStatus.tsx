import React, {ChangeEvent, useState} from 'react';

export const ProfileStatus = (props: ProfileStatusType) => {


    let [editeMode, setEditeMode] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(props.status);

    const editModeHandle = () => {
        setEditeMode(!editeMode);
        props.updateUserStatus(status);
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
                        onDoubleClick={editModeHandle}>{props.status || 'Нет статуса'}</span>
                </div>}
        </div>
    );
};

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}
