import * as yup from 'yup';

export const authFormSchemaRegister = yup
    .object({
        name: yup
            .string()
            .required('Name is required')
            .min(5, 'Minimum 5 chars')
            .matches(/^([A-z0-9])*([A-z0-9]$)/, 'Name is incorrect')
            .typeError('Name is incorrect'),
        email: yup
            .string()
            .required('Id is required')
            .min(5, 'Minimum 5 chars')
            .matches(/^([A-z0-9])*([A-z0-9]$)/, 'Id is incorrect')
            .typeError('Id is incorrect'),
        password: yup
            .string()
            .required('Id is required')
            .min(5, 'Minimum 5 chars')
            .matches(/^([A-z0-9])*([A-z0-9]$)/, 'Id is incorrect')
            .typeError('Id is incorrect'),
    })
    .required();