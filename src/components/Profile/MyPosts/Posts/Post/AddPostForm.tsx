import React from 'react';
import {useDispatch} from 'react-redux';
import {addPost} from '../../../../../redux/profile-reducer';
import {useFormik} from 'formik';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function AddPostForm() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            post: ''
        }, validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.post) {
                errors.post = 'Required';
            } else if (values.post.length < 2) {
                errors.post = 'Short post';
            }
            return errors;
        },

        onSubmit: values => {
            dispatch(addPost(values.post));
            formik.resetForm();
        },
    });


    return (
        <FormControl>
            <form onSubmit={formik.handleSubmit}>
                <FormGroup>

                    <TextField
                        {...formik.getFieldProps('post')}
                        fullWidth={true}
                        type="post"
                        label="New post"
                        margin="normal"
                    />
                    {formik.errors.post
                        && formik.touched.post
                        && <div
                            style={{color: 'red'}}>{formik.errors.post}</div>}
                    <Button type={'submit'} variant={'contained'}
                            color={'primary'}>
                        Send
                    </Button>
                </FormGroup>
            </form>
        </FormControl>
    );
}

type FormikErrorType = {
    post?: string
}
