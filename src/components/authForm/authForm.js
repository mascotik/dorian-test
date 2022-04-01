// TODO: Some func might be extract ext file
// TODO: Add flexible design
import { Fragment, useState } from "react";
import { useForm } from 'react-hook-form';

import { sendRequest } from "../../utils";
import './AuthForm.scss';

export const Login = ({ onSubmit }) => {

    const {
        register,
        formState: { errors, isValid, isSubmitting },
        handleSubmit,
        reset
    } = useForm({ criteriaMode: 'all', mode: 'onChange' });

    const [stateAuth, setStateAuth] = useState({
        tab: 'login',
        error: null
    });

    const onSubmitLoginForm = async (props) => {
        const postBody = {
            email: props.email_field,
            password: props.password_field,
        };
        try {
            const res = await sendRequest('/api/login', postBody);

            if (res?.success) {
                reset();
                onSubmit(res);
                setStateAuth({ ...stateAuth, error: null });
                return
            } else {
                setStateAuth({ ...stateAuth, error: 'Login error. Incorrect email or password' });
            }
        } catch (error) {
            console.error(`Login error. (${error}).`);
        }
    };

    const onSubmitRegisterForm = async (props) => {
        const postBody = {
            name: props.name_field,
            email: props.email_field,
            password: props.password_field,
        };
        try {
            const res = await sendRequest('/api/register', postBody);

            if (res?.success) {
                reset();
                onSubmit();
                setStateAuth({ tab: 'login', error: null });
                return;
            } else {
                setStateAuth({ ...stateAuth, error: 'Register error.' });
            }
        } catch (error) {
            console.error(`Register error. (${error}).`);
        }
    };

    const onSubmitForgotForm = async (props) => {
        const postBody = {
            email: props.email_field,
        };
        try {
            const res = await sendRequest('/api/forgot', postBody);

            if (res?.success) {
                reset();
                onSubmit();
                setStateAuth({ tab: 'login', error: null });
            } else {
                setStateAuth({ ...stateAuth, error: 'Recovery password error.' });
            }

        } catch (error) {
            console.error(`Recovery password error. (${error}).`);
        }
    };

    // Show validation errors from Render
    const showError = (error_message) => {
        if (errors?.email_field) {
            error_message = 'Incorrect email address';
        } else if (errors?.password_field) {
            error_message = 'Incorrect password';
        } else if (stateAuth.error) {
            error_message = stateAuth.error;
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
                            autoFocus
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
                            LOGIN
                        </button>
                        <div className="bottom_section">
                            <span
                                className="external_link"
                                onClick={() => setStateAuth({ error: null, tab: 'register' })}

                            >
                                Register</span>
                            <span
                                className="external_link"
                                onClick={() => setStateAuth({ error: null, tab: 'forgot' })}
                            >
                                Forgot Password?
                            </span>
                        </div>

                    </fieldset>
                </form>
            </div>
        )
    }

    const renderRegister = () => {

        return (
            <div className="register_form">
                <form id="register_form" onSubmit={handleSubmit(onSubmitRegisterForm)} action="#" method="post">
                    <fieldset id="register_fieldset">
                        <label className="name_label" htmlFor="name">User name</label>
                        <input
                            {...register(
                                "name_field",
                                {
                                    required: true,
                                    maxLength: 50
                                }
                            )}
                            className="name_field"
                            id="name"
                            type="text"
                            autoFocus
                        />
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
                            REGISTER
                        </button>
                        <div className="bottom_section">
                            <span
                                className="external_link"
                                onClick={() => setStateAuth({ error: null, tab: 'login' })}
                            >
                                Log-in
                            </span>
                        </div>

                    </fieldset>
                </form>
            </div>
        )
    }

    const renderForgot = () => {

        return (
            <div className="forgot_form">
                <form id="forgot_form" onSubmit={handleSubmit(onSubmitForgotForm)} action="#" method="post">
                    <fieldset id="forgot_fieldset">
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
                            autoFocus
                        />
                        <div className="error_message">
                            {showError()}
                        </div>
                        <button
                            className="submit_button"
                            id="submit_button"
                            disabled={!isValid || isSubmitting}
                        >
                            SEND
                        </button>
                        <div className="bottom_section">
                            <span
                                className="external_link"
                                onClick={() => setStateAuth({ error: null, tab: 'register' })}
                            >
                                Register
                            </span>
                        </div>

                    </fieldset>
                </form>
            </div>
        )
    } // renderForgot


    return (
        <Fragment>
            {stateAuth.tab === 'login' && renderLogin()}
            {stateAuth.tab === 'register' && renderRegister()}
            {stateAuth.tab === 'forgot' && renderForgot()}
        </Fragment>
    )
}

export default Login