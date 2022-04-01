import { Fragment } from "react"
import { Navigate } from "react-router-dom"

const MainPage = ({ userData }) => {

    return (
        <Fragment>
            {!userData.user ? <Navigate replace to="/auth" /> : null}
            <header>
                <h1>Main page {userData.user}</h1>
            </header>
        </Fragment>
    )
}

export default MainPage