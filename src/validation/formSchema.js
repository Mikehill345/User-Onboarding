import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .required('name is required')
        .min(3, 'Username must be 3 chars or longer'),
    email: yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup.string()
        .required('password is required')
        .min(7, 'password must be atleast 7 chars'),
    tos: yup.boolean(),
})
