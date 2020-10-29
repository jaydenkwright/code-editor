import React, { useState } from 'react'
import { TextArea, TextBox, SubmitButton, Select, Option, ErrorBox } from '../styles/styles'
import { useHistory } from 'react-router-dom'
import api from '../api/api'
import Helmet from 'react-helmet'

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
                        const HTMLresponse = await api.post('/code/create', {
                            projectId: response.data.id,
                            lang: 'html',
                            code: ''
                        },{
                            withCredentials: true
                        })
                        const CSSreponse = await api.post('/code/create', {
                            projectId: response.data.id,
                            lang: 'css',
                            code: ''
                        },{
                            withCredentials: true
                        })
                        const JAVASCRIPTresponse = await api.post('/code/create', {
                            projectId: response.data.id,
                            lang: 'javascript',
                            code: ''
                        },{
                            withCredentials: true
                        })
                        if (HTMLresponse && CSSreponse && JAVASCRIPTresponse){
                            history.push(`/project/${response.data.id}`)
                        }
                    }
                } catch (error) {
                    if (error.response.data){
                        setError(error.response.data.msg)
                    }else{
                        setError("Something went wrong!")
                    }
                }
            }
            createProject()
        }
    }

    return (
    <div className='container'>
        <Helmet>
            <title>Create a project</title>
        </Helmet>
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
