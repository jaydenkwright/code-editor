import React, { useState } from 'react'
import { TextArea, TextBox, SubmitButton, Select, Option, ErrorBox } from '../styles/styles'
import { useHistory } from 'react-router-dom'
import api from '../api/api'

const Home = () => {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [privacy, setPrivacy] = useState<string>('Private')
    const [error, setError] = useState<string | null>(null)
    const history = useHistory()

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (title && description){
            const createProject = async () => {
                try {
                    const response = await api.post('/project/create', {
                        title,
                        description,
                        privacy: privacy === 'Private' ? true : false
                    }, {
                        withCredentials: true
                    })
                    if (response.data){
                        history.push(`/project/${response.data.id}`)
                    }
                } catch (error) {
                    setError(error.response.data.msg)
                }
            }
            createProject()
        }
    }

    return (
    <div className='container'>
            { error ? <ErrorBox>{error}</ErrorBox> : null}
            <form onSubmit={submit}>
                <TextBox type='text' placeholder='Title' maxLength={100} onChange={(e) => setTitle(e.target.value)} />
                <TextArea placeholder='Description' maxLength={200} onChange={(e) => setDescription(e.target.value)} ></TextArea>
                <Select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
                    <Option value='Private'>
                        Private
                    </Option>
                    <Option value='Public'>
                        Public
                    </Option>
                </Select>
                <SubmitButton>Submit</SubmitButton>
            </form>
    </div>
    )
}

export default Home