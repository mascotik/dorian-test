import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { authFormSchemaRegister } from './validators'


export const Login = ({ onSubmit }) => {
    const {
        register,
        formState: { errors, isValid, isSubmitting },
        handleSubmit,
    } = useForm({ criteriaMode: 'all', mode: 'onChange', resolver: yupResolver(authFormSchemaRegister) });






    
    return (
        <Fragment>
            <h1>Login component</h1>
            <button onClick={onSubmit}>User B</button>
        </Fragment>
    )
}

export default Login