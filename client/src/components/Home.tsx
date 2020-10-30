import React, { useEffect, useState } from 'react'
import { H1, H3, SubmitButton, ErrorBox, StyledLink } from '../styles/styles'
import api from '../api/api'
import { useHistory } from 'react-router-dom'
import Helmet from 'react-helmet'

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
                console.log(error)
                if (error.response){
                    setError(error.response.data.msg)
                }else{
                    setError("Something went wrong!")
                }
            }
        }

        getProjects()
    }, [])

    const history = useHistory()
    return (
        <div className='container'>
            <Helmet>
                <title>Code Editor</title>
            </Helmet>
            <div className='homeContainer'>
                <div className='title'>
                    <H1>Projects</H1>
                </div>
                { error ? <ErrorBox>{ error}</ErrorBox> : null}
                <div className='projectContainer'>
                    {
                        projects && projects.length > 0 ? projects.map((project: any) => ( 
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
