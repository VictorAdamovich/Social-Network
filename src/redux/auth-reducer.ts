import {authAPI} from '../API/AuthAPI';

const SET_USER_DATA = 'SET_USER_DATA';

export type dataAuthStateType = {
    id: number
    login: string
    email: string
    isAuth?:boolean
}

let initialState: dataAuthStateType = {
    id: 24020,
    login: 'VictorAdamovich',
    email: 'ndptrv@yandex.by',
    isAuth:false
};

export type AuthACType = ReturnType<typeof setAuthUserDate>

export const authReducer = (state: dataAuthStateType = initialState, action: AuthACType): dataAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth:true
            };
        }
        default: {
            return state;
        }
    }
};

export const setAuthUserDate = ({id, login, email}: dataAuthStateType) => ({
    type: SET_USER_DATA,
    payload: {id, login, email}
}) as const;


export const getAuth=()=>{
    return (dispatch:any)=>{
        authAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserDate({id, login, email}));
                }
            });
    }




}