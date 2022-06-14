import React from 'react';
import {UserType} from '../../redux/users-reducer';
import s from './users.module.css';

type UserPropsType = {
    users: UserType[]
    followToggle: (userID: number) => void
    setUsers: (users: UserType[]) => void
}


export const Users = (props: UserPropsType) => {
    return (
        <div>
            {
                props.users.map((u: UserType) => <div key={u.id}>
                    <span><div><img src={u.photoUrl} className={s.User_img}/></div>
                        <div>
                            <button
                                onClick={() => props.followToggle(u.id)}>
                                {u.followed
                                    ? 'unfollow'
                                    : ' follow '}
                            </button>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>
                    </span>


                </div>)
            }
        </div>
    );
};

