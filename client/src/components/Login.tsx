import React, { useState } from 'react'
import { TextBox, SubmitButton, ErrorBox } from '../styles/styles'
import { useHistory } from 'react-router-dom'
import api from '../api/api'

const Login = () => {
    const history = useHistory()
    const [loginEmail, setLoginEmail] = useState<string>('')
    const [loginPassword, setLoginPassword] = useState<string>('')
    const [loginError, setLoginError] = useState<string>('')
    const [loginConfirmation, setLoginConfrimation] = useState(null)

    const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (loginEmail && loginPassword){
            const login = async () => {
                try{
                    const response = await api.post('/user/login', {
                        email: loginEmail,
                        password: loginPassword
                    }, {
                        withCredentials: true
                    })
                    setLoginConfrimation(response.data)
                }catch(error){
                    setLoginError(error.response.data.msg)
                }
            }
            login()
        }
    }

    if (loginConfirmation){
        history.push('/')
    }
    return (
        <div className='loginContainer'>
            { loginError ? <ErrorBox>{loginError}</ErrorBox> : null}
            <form onSubmit={submitLogin}>
                <TextBox type='email' placeholder='Email Address' onChange={(e) => setLoginEmail(e.target.value)} maxLength={200} />
                <TextBox type='password' placeholder='Password' onChange={(e) => setLoginPassword(e.target.value)} maxLength={300} />
                <SubmitButton active={true}>Login</SubmitButton>
            </form>
        </div>
    )
}

export default Login
