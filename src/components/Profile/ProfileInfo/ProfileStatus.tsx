import React, {useState} from 'react';

export const ProfileStatus = (props: ProfileStatusType) => {

    let [editeMode, setEditeMode] = useState<boolean>(false);

    const editModeHandle = () => setEditeMode(!editeMode);

    return (
        <div>
            {editeMode
                ? <div>
                    <input type="text"
                           autoFocus={true}
                           value={props.status}
                           onDoubleClick={editModeHandle}
                    />
                </div>
                : <div>
                    <span onDoubleClick={editModeHandle}>{props.status}</span>
                </div>}
        </div>
    );
};

type ProfileStatusType = {
    status: string
}
