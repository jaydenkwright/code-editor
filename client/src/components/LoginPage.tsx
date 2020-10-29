import React from 'react'
import Login from './Login'
import Helmet from 'react-helmet'

const LoginPage = () => {
    return (
        <div className='container'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className='loginRegistrationContainer'>
                <Login />
            </div>
        </div>
    )
}

export default LoginPage
