import React from 'react';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {RootReduxType} from '../../redux/store';
import {loginTC} from '../../redux/auth-reducer';
import {Paper} from '@mui/material';

export const Login = () => {
    const dispatch: any = useDispatch();
    const isLoggedIn = useSelector<RootReduxType>((data) => data.auth.isAuth);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        }, validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 2) {
                errors.password = 'Short password';
            }
            return errors;
        },

        onSubmit: values => {
            dispatch(loginTC(values));
            formik.resetForm();
        },
    });

    if (isLoggedIn) {
        return <Navigate to="/profile"/>;
    }

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <Paper style={{padding: '10px',margin:'10px'}}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}> here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <form onSubmit={formik.handleSubmit}>
                        <FormGroup>
                            <TextField
                                {...formik.getFieldProps('email')}
                                onBlur={formik.handleBlur}
                                label="Email"
                                margin="normal"/>
                            {formik.errors.email
                                && formik.touched.email
                                &&
                                <div style={{color: 'red'}}>{formik.errors.email}</div>}
                            <TextField
                                {...formik.getFieldProps('password')}
                                type="password"
                                label="Password"
                                margin="normal"
                            />
                            {formik.errors.password
                                && formik.touched.password
                                && <div
                                    style={{color: 'red'}}>{formik.errors.password}</div>}
                            <FormControlLabel
                                {...formik.getFieldProps('rememberMe')}
                                checked={formik.values.rememberMe}
                                label={'Remember me'}
                                control={<Checkbox/>}/>
                            <Button type={'submit'} variant={'contained'}
                                    color={'primary'}>
                                Login
                            </Button>
                        </FormGroup>
                    </form>
                </FormControl>
            </Paper>
        </Grid>
    </Grid>;
};


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


