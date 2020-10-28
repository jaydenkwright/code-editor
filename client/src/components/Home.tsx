import React, { useEffect, useState } from 'react'
import { H1, H3, SubmitButton, ErrorBox, StyledLink } from '../styles/styles'
import api from '../api/api'
import { useHistory, Link } from 'react-router-dom'

const Home = () => {
    const [projects, setProjects] = useState()
    const [error, setError] = useState<string>()
    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await api.get('/project/user/', {
                    withCredentials: true
                })
                setProjects(response.data)
            } catch (error) {
                setError(error.response.data.msg)
            }
        }

        getProjects()
    }, [])

    const history = useHistory()
    return (
        <div className='container'>
            <div className='homeContainer'>
                <div className='title'>
                    <H1>Hello, Kyle</H1>
                </div>
                { error ? <ErrorBox>{ error}</ErrorBox> : null}
                <div className='projectContainer'>
                    {
                        projects ? projects.map((project: any) => ( 
                            <div key={project.id}>
                                <H1><StyledLink to={`/project/${project.id}`} >{project.title}</StyledLink></H1>
                                <H3>{project.description}</H3>
                            </div>
                        )) : null
                    }
                </div>
                <div className='createProjectContainer'>
                    <SubmitButton noWidth={true} onClick={() => history.push('/project/create')} >Create New Project</SubmitButton>
                </div>
            </div>
        </div>
    )
}

export default Home
