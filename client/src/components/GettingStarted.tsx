import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Login from './Login'
import api from '../api/api'
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
