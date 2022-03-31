import { useEffect } from "react";


export const Login = () => {

    console.log('BEGIN');
    useEffect(() => {
        const sendRequest = async (url, body) => {
            const resp = await fetch(url, {
                method: 'post',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await resp.json();
            console.log(data);
        }

        const registerBody = { "email": "test@test.com", "name": "Alex", "password": "111" }
        sendRequest('/api/register', registerBody)
        setTimeout(() => sendRequest('/api/login', registerBody), 5000)
        setTimeout(() => sendRequest('/api/forgot', registerBody), 10000)
        console.log('LOAD');
    },[])

    

    return (
        <h1>Hello</h1>
    )
}

export default Login