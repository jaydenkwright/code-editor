import React, { useState, useEffect} from 'react'
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import { languages } from '../interfaces/EditorInterface'
import { Button, H1, H3 } from '../styles/styles'

const EditorPage = () => {
const [html, setHTML] = useLocalStorage('html', `<h1>Hello World</h1>`)
const [css, setCSS] = useLocalStorage('css', '')
const [javascript, setJavascript] = useLocalStorage('javascript', '')
const [srcDoc, setSrcDoc] = useState<string>('')
const [current, setCurrent] = useState('html')

useEffect(() => {
    const codeTimeOut = () => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${javascript}</script>
            </html>
            `)
         }, 1000)
        
        return () => clearTimeout(timeout)
    }

    codeTimeOut()

}, [html, css, javascript])

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

    const loggedIn = true
return (
    <>
        <div className='window-container'>
            <div className='window code-window'>
                {
                loggedIn ? <>
                    <H3>Home</H3>
                    <H1>Untitled</H1>
                    </>
                : <>
                    <Button block={true}>Login</Button>
                    <Button block={true}>Register</Button>
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
                <iframe 
                srcDoc={srcDoc}
                title='output' 
                sandbox='allow-scripts'
                frameBorder='0'
                width='100%'
                height='100%'
                />
            </div>
        </div>
    </>
);
}

export default EditorPage
