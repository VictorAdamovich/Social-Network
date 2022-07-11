import {instance} from './instance';
import {ResponseType} from './ApiType';
import {AxiosResponse} from 'axios';

export const authAPI = {
    getAuth() {
        return instance.get<ResponseType<{ id: number, login: string, email: string }>>('/auth/me');
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<{email: string, password: string, rememberMe: boolean }, AxiosResponse<ResponseType<{ userId: number }>>>('/auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete<ResponseType>('/auth/login');
    }
};


