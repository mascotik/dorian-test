import { Fragment } from "react"
import { Navigate } from "react-router-dom"
import Login from "../components/Login/Login"
import { sendRequest } from "../utils"

const LoginPage = ({ userData }) => {

    const onClickButton = () => {
        const registerBody = { "email": "test@test.com", "name": "Alex", "password": "111" }
        sendRequest('/api/register', registerBody).then(
            (data) => {
                const { success } = data
                if (success) {
                    userData.setUser('Roma')    
                } else {
                    console.log('Error register',data.success);
                }
            }
        )
        //        setTimeout(() => sendRequest('/api/login', registerBody), 5000)
        //        setTimeout(() => sendRequest('/api/forgot', registerBody), 10000)

        
    }


    return (
        <Fragment>
            { userData.user && <Navigate replace to="/" />} 
            <header>
                <h1>Login page { userData.user } </h1>
                <Login onSubmit={onClickButton}/>
            </header>
        </Fragment>
    )
}

export default LoginPage