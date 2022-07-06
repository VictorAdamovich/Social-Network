import {instance} from './instance';
import {ResponseType} from './ApiType';

export const followAPI = {
    followUser(userID: number) {
        return instance.post<ResponseType>(`follow/${userID}`);
    },
    unfollowUser(userID: number) {
        return instance.delete<ResponseType>(`follow/${userID}`);
    }
};