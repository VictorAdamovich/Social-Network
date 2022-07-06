import {instance} from './instance';
import {ResponseType} from './ApiType';

export const authAPI = {
    getAuth() {
        return instance.get<ResponseType<{id:number,login:string,email:string}>>('/auth/me');
    }
};