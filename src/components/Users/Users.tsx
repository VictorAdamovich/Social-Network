import React from 'react';
import s from './users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'



export type UserPropsType = {
    users: User[]
    followToggle: (userID: number) => void
    setUsers: (users: User[]) => void
}

export interface Photos {
    small: string;
    large: string;
}

export interface User {
    name: string;
    id: number;
    uniqueUrlName?: string;
    photos: Photos;
    status: string;
    followed: boolean;
}

export interface GetUsersResponse {
    items: User[];
    totalCount: number;
    error?: any;
}





export class Users extends React.Component<UserPropsType,any>{
    componentDidMount() {
        axios.get<GetUsersResponse>('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items));
    }


    render() {
        return(
            <div>
                {
                    this.props.users.map((u) => <div className={s.userBox} key={u.id}>
                    <span><div><img src={u.photos.small ? u.photos.small : userPhoto} className={s.User_img}/></div>
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
        );
    }

}

