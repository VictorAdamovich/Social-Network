import {instance} from './instance';

export const authAPI = {
    getAuth() {
        return instance.get('/auth/me');
    }
};