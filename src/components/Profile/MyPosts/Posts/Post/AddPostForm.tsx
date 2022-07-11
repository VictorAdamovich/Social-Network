import React, {useCallback} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {addPost} from '../../../../../redux/profile-reducer';
import {formValidators} from '../../../../../utils/validators/formValidators';


export function AddPostForm() {
    const dispatch = useDispatch();
    const addMessage = useCallback((message: string) => {
        dispatch(addPost(message));
    }, []);

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<IFormInput>({mode: 'onChange'});
    const onSubmit: SubmitHandler<IFormInput> = data => {
        addMessage(data.value);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>
                    <input {...register('value', formValidators)}
                           placeholder="Write new post"
                    />
                    <input type="submit"/>
                </label>
                <div>
                    <p style={{color:'red'}}>{errors?.value && (errors?.value?.message || 'Error!')}</p>
                </div>

            </div>
        </form>
    );
}

interface IFormInput {
    value: string;
}
