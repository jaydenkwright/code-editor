import React, { useState, useEffect, useContext } from 'react'
import Editor from './Editor'
import DisplayWindow from './DisplayWindow'
import useLocalStorage from '../hooks/useLocalStorage'
import { languages } from '../interfaces/EditorInterface'
import { Button, H1, H3, SubmitButton } from '../styles/styles'
import UserContext from '../context/UserContext'
import api from '../api/api'
import { useHistory, useParams } from 'react-router-dom'

const EditorPage = () => {
    const history = useHistory()
    const { id } = useParams<any>()
    const user = useContext<any>(UserContext)
    const { loggedIn } = user
    const [html, setHTML] = useLocalStorage('html', `test`)
    const [css, setCSS] = useLocalStorage('css', '')
    const [javascript, setJavascript] = useLocalStorage('javascript', '')
    const [lastUpdateHtml, setLastUpdateHtml] = useState<string>('')
    const [lastUpdateCss, setLastUpdateCss] = useState<string>('')
    const [lastUpdateJs, setLastUpdateJs] = useState<string>('')
    const [srcDoc, setSrcDoc] = useState<string>('')
    const [current, setCurrent] = useState('html')
    const [project, setProject] = useState()
    const [error, setError] = useState<string>()

    const langs: languages = {
        html: {
            language: 'xml',
            displayName: 'HTML',
            value: html,
            onChange: setHTML
        },
        css: {
            language: 'css',
            displayName: 'CSS',
            value: css,
            onChange: setCSS,
        },
        javascript: {
            language: 'javascript',
            displayName: 'Javascript',
            value: javascript,
            onChange: setJavascript
        }
    }

    useEffect(() => {
        const getProject = async (id: number) => {
            try {
                const response = await api.get(`/project/${id}`, {
                    withCredentials: true
                })
                setProject(response.data)
            } catch (error) {
                if (error.response.data){
                    setError(error.response.data.msg)
                }else{
                    setError("Something went wrong!")
                }
            }
        }
        const getCode = async (id: number) => {
            try {
                const response = await api.get(`/code/project/${id}`, {
                    withCredentials: true
                })
                if (response.data && response.data.length > 0){
                    setHTML(response.data.filter((c: any) => c.lang === 'html')[0].code)
                    setLastUpdateHtml(response.data.filter((c: any) => c.lang === 'html')[0].code)
                    setCSS(response.data.filter((c: any) => c.lang === 'css')[0].code)
                    setLastUpdateCss(response.data.filter((c: any) => c.lang === 'css')[0].code)
                    setJavascript(response.data.filter((c: any) => c.lang === 'javascript')[0].code)
                    setLastUpdateJs(response.data.filter((c: any) => c.lang === 'javascript')[0].code)
                }else{
                    history.push('/')
                }
            } catch (error) {
                if (error.response.data){
                    setError(error.response.data.msg)
                }else{
                    setError("Something went wrong!")
                }
            }
        }

        const updateCode = async (lang: string, projectId: number) => {
            try {
                const response = await api.put(`/code/update/${lang}/${projectId}`, {
                    code: langs[lang].value
                }, {
                    withCredentials: true
                })
            } catch (error) {
                if (error.response.data.msg){
                    setError(error.response.data.msg)
                }else{
                    setError("Something went wrong!")
                }
            }
        }
        
        if (id && !project){
            getProject(id)
            getCode(id)
        }

        if (id) {
            const updateInterval = setInterval(() => {
                console.log('update')
                if (html !== lastUpdateHtml){
                    setLastUpdateHtml(() => html)
                    updateCode('html', id)
                }
                if (css !== lastUpdateCss){
                    setLastUpdateCss(() => css)
                    updateCode('css', id)
                }
                if (javascript !== lastUpdateJs){
                    setLastUpdateJs(() => javascript)
                    updateCode('javascript', id)
                }
            }, 60 * 1000);
    
            return () => clearInterval(updateInterval);
        }
    }, [html, css, javascript, lastUpdateHtml, lastUpdateCss, lastUpdateJs])


    return (
        <>
            <div className='window-container'>
                <div className='window code-window'>
                    {
                    loggedIn ? <>
                        <H3 onClick={() => history.push('/')}>Home</H3>
                        {
                            id && project ?
                                project.title ? <H1>{project.title}</H1> : <H1>Untitled</H1>
                            : null
                        }
                        </>
                    : <>
                        <SubmitButton block={true} onClick={() => history.push('/getStarted')} noWidth={true} >Get Started</SubmitButton>
                    </>
                    }

                    <Button active={current === 'html' ? true : false} onClick={() => setCurrent('html')}>HTML</Button>
                    <Button active={current === 'css' ? true : false} onClick={() => setCurrent('css')}>CSS</Button>
                    <Button active={current === 'javascript' ? true : false} onClick={() => setCurrent('javascript')}>Javascript</Button>
                    <Editor 
                        language={langs[current].language}
                        displayName={langs[current].displayName}
                        value={langs[current].value}
                        onChange={langs[current].onChange}
                    />
                </div>
                <div className='window display'>
                    <DisplayWindow 
                        srcDoc={srcDoc} 
                        setSrcDoc={setSrcDoc} 
                        html={html} css={css} 
                        javascript={javascript} 
                    />
                </div>
            </div>
        </>
    );
}

export default EditorPage
