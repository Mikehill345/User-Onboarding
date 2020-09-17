import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .required('name is required')
        .min(3, 'Username must be 3 chars or longer'),
    email: yup.string()
        .email('Valid email required')
        .required('Valid email required'),
    password: yup.string()
        .required('password is required')
        .min(7, 'password is too short'),
    tos: yup.boolean(),
})
