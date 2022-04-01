import { Fragment } from "react";
import { Navigate } from "react-router-dom";

import './MainPage.scss';

const MainPage = ({ userData }) => {

    return (
        <Fragment>
            {!userData.user ? <Navigate replace to="/auth" /> : null}
            <header>
                <h1>Main page</h1>
                <h2>Hello {userData.user}</h2>
            </header>
        </Fragment>
    )
}

export default MainPage