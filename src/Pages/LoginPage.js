import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import Login from "../Components/AuthForm/AuthForm";

const LoginPage = ({ userData }) => {

    const onSubmitHandler = (props) => userData.setUserCallback(props?.name);

    return (
        <Fragment>
            {userData.user && <Navigate replace to="/" />}
            <header>
                <h2>Authorization</h2>
                <Login onSubmit={onSubmitHandler} />
            </header>
        </Fragment>
    )
}

export default LoginPage