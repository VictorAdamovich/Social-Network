import {instance} from './instance';
import {ResponseType} from './ApiType';
import {AxiosResponse} from 'axios';

export const authAPI = {
    getAuth() {
        return instance.get<ResponseType<MeParamsType>>('/auth/me');
    },
    login(data:any) {
        return instance.post<LoginParamsType, AxiosResponse<ResponseType<{ userID: number }>>>('/auth/login', data);
    },
    logout() {
        return instance.delete<ResponseType>('/auth/login');
    }
};

// types
export type MeParamsType = {
    id: number
    email: string
    login: string

}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}


