import { Fragment } from "react";
import { useForm } from 'react-hook-form';

import { sendRequest } from "../../utils"
import './authForm.scss'

export const Login = ({ onSubmit }) => {

    const {
        register,
        formState: { errors, isValid, isSubmitting },
        handleSubmit,
        reset
    } = useForm({ criteriaMode: 'all', mode: 'onChange' });

    const onSubmitLoginForm = async ({ email_field, password_field }) => {
        const postBody = {
            email: email_field,
            password: password_field,
        };
        try {
            const { success } = await sendRequest('/api/login', postBody)

            if (success) {
                console.log('Success');
            } else {
                console.log('Login error', success);
            }
            reset()
            onSubmit();
        } catch (error) {
            console.error(`Error on post channel. (${error}).`);
        }
    };

    const showError = () => {
        let error_message = null
        if (errors.email_field) {
            error_message = 'Incorrect email address'
        } else if (errors.password_field) {
            error_message = 'Incorrect password'
        }
        return (
            <Fragment>
                {error_message}
            </Fragment>
        )
    }


    const renderLogin = () => {

        return (
            <div className="login_form">
                <form id="login_form" onSubmit={handleSubmit(onSubmitLoginForm)} action="#" method="post">
                    <fieldset id="login_fieldset">
                        <label className="email_label" htmlFor="email">E-Mail</label>
                        <input
                            {...register(
                                "email_field",
                                {
                                    required: true,
                                    maxLength: 50,
                                    pattern: /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/gm
                                }
                            )}
                            className="email_field"
                            id="email"
                            type="email"
                        />
                        <label className="password_label" htmlFor="password">Password</label>
                        <input
                            {...register(
                                "password_field",
                                { required: true, maxLength: 50 }
                            )}
                            className="password_field"
                            id="password"
                            type="password"
                        />
                        <div className="error_message">
                            {showError()}
                        </div>
                        <button
                            className="submit_button"
                            id="submit_button"
                            disabled={!isValid || isSubmitting}
                        >
                            <span className="submit_button_text">LOGIN</span>
                        </button>
                        <div className="bottom_form">
                            <span className="external_link">Register</span>
                            <span className="external_link">Forgot Password?</span>
                        </div>

                    </fieldset>
                </form>
            </div>
        )
    }



    return (
        <Fragment>
            {renderLogin()}
        </Fragment>
    )
}

export default Login