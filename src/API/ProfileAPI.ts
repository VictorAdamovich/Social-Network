import {instance} from './instance';
import {User} from '../redux/users-reducer';

export const profileAPI = {
    setUserProfile(userId:string) {
        return instance.get<User>(`profile/` + userId)
    }
};