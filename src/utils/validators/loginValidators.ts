export const loginValidators={
    required: 'Field is required',
    maxLength: {
        value: 30,
        message: 'Max length is 30 symbols '
    }
}

export const passwordValidators={
    required: 'Field is required',
    minLength: {
        value: 5,
        message: 'Min length is 30 symbols '
    }
}