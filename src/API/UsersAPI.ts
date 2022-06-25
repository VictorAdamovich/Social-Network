import {instance} from './instance';
import {GetUsersResponse} from '../redux/users-reducer';

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponse>(`users?page=${currentPage}&count=${currentPage}`)
            .then(res => res.data);
    }
};