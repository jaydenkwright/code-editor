import React, { useState } from 'react'
import { TextBox, SubmitButton, ErrorBox } from '../styles/styles'
import { useHistory } from 'react-router-dom'
import api from '../api/api'

const Register = () => {
    const history = useHistory()
    const [registerName, setRegisterName] = useState<string>('')
    const [registerUsername, setRegisterUsername] = useState<string>('')
    const [registerEmail, setRegisterEmail] = useState<string>('')
    const [registerPassword, setRegisterPassword] = useState<string>('')
    const [registrationError, setRegistrationError] = useState<string>('')
    const [registrationConfirmation, setRegisterConfirmation] = useState(null)

    const submitRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (registerName && registerUsername && registerEmail && registerPassword){
            const register = async () => {
                try{
                    const response = await api.post('/user/register', {
                        name: registerName,
                        username: registerUsername,
                        email: registerEmail,
                        password: registerPassword
                    }, {
                        withCredentials: true
                    })
                    setRegisterConfirmation(response.data)
                }catch(error){
                    if (error.response.data){
                        setRegistrationError(error.response.data.msg)
                    }else{
                        setRegistrationError("Something went wrong!")
                    }
                }
            }
            register()
        }
    }

    if (registrationConfirmation) {
        history.push('/login')
    }
    
    return (
        <div className='registrationContainer'>
            { registrationError ? <ErrorBox>{registrationError}</ErrorBox> : null}
            <form onSubmit={submitRegister}>
                <TextBox type='text' placeholder='Name' maxLength={50} onChange={(e) => setRegisterName(e.target.value)} />
                <TextBox type='text' placeholder='Username' maxLength={100} onChange={(e) => setRegisterUsername(e.target.value)} />
                <TextBox type='email' placeholder='Email Address' maxLength={200} onChange={(e) => setRegisterEmail(e.target.value)} />
                <TextBox type='password' placeholder='Password'maxLength={300} onChange={(e) => setRegisterPassword(e.target.value)} />
                <SubmitButton active={true}>Register</SubmitButton>
            </form>
        </div>
    )
}

export default Register
