import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import {User} from '../../redux/users-reducer';
import {followAPI} from '../../API/FollowAPI';


type UserPropsType = {
    users: User[]
    onPageChanged: (pageNumber: number) => void
    setFollow: (userID: number) => void
    setUnfollow: (userID: number) => void
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

    const followUserHandle = (userID: number) => {
        followAPI.followUser(userID).then((response: any) => {
            if (response.data.resultCode === 0) {
                props.setFollow(userID);
            }
        });
    };
    const unfollowUserHandle = (userID: number) => {
        followAPI.unfollowUser(userID).then((response: any) => {
            if (response.data.resultCode === 0) {
                props.setUnfollow(userID);
            }
        });
    };


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        key={p}
                        onClick={() => props.onPageChanged(p)}
                        className={props.currentPage === p ? s.selected : s.item}
                    >{`${p} `}</span>;
                })}

                {props.users.map((u) => <div className={s.userBox} key={u.id}>
                    <span><div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img alt={'userAvatar'}
                             src={u.photos.small ? u.photos.small : userPhoto}
                             className={s.User_img}/>
                    </NavLink>
                    </div>
                        <div>
                                {!u.followed
                                    ? <button
                                        onClick={() => followUserHandle(u.id)}>Follow</button>
                                    : <button
                                        onClick={() => unfollowUserHandle(u.id)}>Unfollow</button>}
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