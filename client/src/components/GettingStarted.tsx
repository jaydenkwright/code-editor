import React from 'react'
import Login from './Login'
import Register from './Register'
import Helmet from 'react-helmet'

const GettingStarted = () => {

    return (
        <div className='container'>
            <Helmet>
                <title>Getting Started</title>
            </Helmet>
            <div className='loginRegistrationContainer'>
                <Login />
                <Register />
            </div>
        </div>
    )
}

export default GettingStarted
