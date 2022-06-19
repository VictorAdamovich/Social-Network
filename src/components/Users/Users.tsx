import React from 'react';
import s from './users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png';
import {GetUsersResponse, setTotalUsersCountAC, User} from '../../redux/users-reducer';

export type UserPropsType = {
    users: User[]
    followToggle: (userID: number) => void
    setUsers: (users: User[]) => void
    changePage:(pageNumber:number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export class Users extends React.Component<UserPropsType, any> {
    componentDidMount() {
        axios.get<GetUsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }
    onPageChanged=(pageNumber:number)=>{
        this.props.changePage(pageNumber)
        axios.get<GetUsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span
                            onClick={()=>this.onPageChanged(p)}
                            className={this.props.currentPage === p ? s.selected:s.item}
                        >{`${p} `}</span>;
                    })}
                    {
                        this.props.users.map((u) => <div className={s.userBox} key={u.id}>
                    <span><div><img  alt={'userAvatar'} src={u.photos.small ? u.photos.small : userPhoto} className={s.User_img}/></div>
                        <div>
                            <button
                                onClick={() => this.props.followToggle(u.id)}>
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
    }

}

