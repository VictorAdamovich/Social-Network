import {instance} from './instance';
import {User} from '../redux/users-reducer';
import {ResponseType} from './ApiType';

export const profileAPI = {
    getUserProfile(userId:string) {
        return instance.get<User>(`profile/` + userId)
    },
    getUserStatus(userId:string){
        return instance.get<string>(`profile/status/` + userId)
    },
    updateUserStatus(status:string){
        return instance.put<ResponseType<{status:string}>>(`/profile/status`,{status})
    }
};