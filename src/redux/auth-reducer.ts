import {authAPI, LoginParamsType} from '../API/AuthAPI';
import {Dispatch} from 'redux';

const SET_USER_DATA = 'SET_USER_DATA';

export type dataAuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

let initialState: dataAuthStateType = {
    id: 24020,
    login: 'VictorAdamovich',
    email: 'ndptrv@yandex.by',
    isAuth: false
};

export type AuthACType = ReturnType<typeof setAuthUserDate>

export const authReducer = (state: dataAuthStateType = initialState, action: AuthACType): dataAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export const setAuthUserDate = ({
                                    id,
                                    login,
                                    email,
                                    isAuth = true
                                }: dataAuthStateType) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
}) as const;


export const getAuth = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data;
                    dispatch(setAuthUserDate({id, login, email, isAuth: true}));
                }
            });
    };
};

export const loginTC = (data:LoginParamsType) => {
    return (dispatch: any) => {
        authAPI.login(data)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuth());
                }
            });

    };
};

export const logoutTS = () => {
    return (dispatch: any) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDate({
                        id: null,
                        login: null,
                        email: null,
                        isAuth: false
                    }));
                }
            });

    };
};