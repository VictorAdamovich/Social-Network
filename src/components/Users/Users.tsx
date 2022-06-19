import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {User} from '../../redux/users-reducer';


type UserPropsType = {
    users: User[]
    onPageChanged: (pageNumber: number) => void
    setFollowToggle: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
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
                        onClick={() => props.onPageChanged(p)}
                        className={props.currentPage === p ? s.selected : s.item}
                    >{`${p} `}</span>;
                })}

                {props.users.map((u) => <div className={s.userBox} key={u.id}>
                    <span><div><img alt={'userAvatar'} src={u.photos.small ? u.photos.small : userPhoto}
                                    className={s.User_img}/></div>
                        <div>
                            <button
                                onClick={() => props.setFollowToggle(u.id)}>
                                {u.followed
                                    ? 'unfollow'
                                    : ' follow '}
                            </button>
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