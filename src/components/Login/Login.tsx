import React, {useCallback} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {loginTC} from '../../redux/auth-reducer';
import {useAppSelector} from '../../redux/store';
import {Navigate} from 'react-router-dom';


export default function Login() {
    const dispatch:any = useDispatch();
    const loginHandle = useCallback((email: string, password: string, rememberMe: boolean) => {
        dispatch(loginTC(email, password, rememberMe));
    }, []);
    const isAuth = useAppSelector(state => state.auth.isAuth)


    const {register, handleSubmit} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => loginHandle(data.email,data.password,data.rememberMe);

    if (isAuth) return <Navigate to="/profile"/>
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input {...register('email')}
                       type="email"
                       placeholder="yandex@yandex.by"/>
            </div>
            <div>
                <label>Password</label>
                <input {...register('password')} type={'password'} placeholder="qwery"/>
            </div>
            <div>
                <label>rememberMe</label>
                <input type={'checkbox'}{...register('rememberMe')} />
            </div>

            <input type="submit"/>
        </form>
    );
}

interface IFormInput {
    email: string;
    password: string;
    rememberMe: boolean;
}
