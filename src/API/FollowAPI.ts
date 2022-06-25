import {instance} from './instance';

export const followAPI = {
    followUser(userID: number) {
        return instance.post(`follow/${userID}`);
    },
    unfollowUser(userID: number) {
        return instance.delete(`follow/${userID}`);
    }
};