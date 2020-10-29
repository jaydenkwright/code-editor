import React, { useState, useContext } from 'react'
import { TextBox, SubmitButton, ErrorBox } from '../styles/styles'
import { useHistory } from 'react-router-dom'
import api from '../api/api'
import UserContext from '../context/UserContext'

const Login = () => {
    const user = useContext<any>(UserContext)
    const { setLoggedIn } = user
    const history = useHistory()
    const [loginEmail, setLoginEmail] = useState<string>('')
    const [loginPassword, setLoginPassword] = useState<string>('')
    const [loginError, setLoginError] = useState<string>('')

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
                    if (response.data){
                        setLoggedIn(true)
                        history.push('/')
                    }
                }catch(error){
                    if (error.response.data){
                        setLoginError(error.response.data.msg)
                    }else{
                        setLoginError("Something went wrong!")
                    }
                }
            }
            login()
        }
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
