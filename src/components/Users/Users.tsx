import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import {User} from '../../redux/users-reducer';

type UserPropsType = {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    followingInProgress: number[]
    users: User[]
    onPageChanged: (pageNumber: number) => void
    followUser:any,
    unfollowUser:any
}

const Users = (props: UserPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        key={p}
                        onClick={() => props.onPageChanged(p)}
                        className={props.currentPage === p
                            ? s.selected
                            : s.item}
                    >{`${p} `}</span>;
                })}

                {props.users.map((u) => <div className={s.userBox} key={u.id}>
                    <span><div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img alt={'userAvatar'}
                             src={u.photos.small
                                 ? u.photos.small
                                 : userPhoto}
                             className={s.User_img}/>
                    </NavLink>
                    </div>
                        <div>
                                {!u.followed
                                    ? <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => props.followUser(u.id)}>Follow</button>
                                    : <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => props.unfollowUser(u.id)}>Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {'u.location.country'}
                            </div>
                            <div>
                                {'u.location.city'}
                            </div>
                        </span>
                    </span>
                </div>)
                }
            </div>
        </div>
    );
};

export default Users;