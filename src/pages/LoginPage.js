import { Fragment } from "react"
import { Navigate } from "react-router-dom"
import Login from "../components/authForm/authForm"
//import { sendRequest } from "../utils"

const LoginPage = ({ userData }) => {

    const onSubmitHandler = () => {

        console.log('Login page onSubmit');


    }


    return (
        <Fragment>
            {userData.user && <Navigate replace to="/" />}
            <header>
                <p>Login page {userData.user} </p>
                <Login onSubmit={onSubmitHandler} />
            </header>
        </Fragment>
    )
}

export default LoginPage