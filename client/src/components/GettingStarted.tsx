import React from 'react'
import Login from './Login'
import Register from './Register'

const GettingStarted = () => {

    return (
        <div className='container'>
            <div className='loginRegistrationContainer'>
                <Login />
                <Register />
            </div>
        </div>
    )
}

export default GettingStarted
