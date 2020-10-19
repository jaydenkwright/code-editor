import React, { useState, useEffect} from 'react'
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import { stringify } from 'querystring'

const EditorPage = () => {
const [html, setHTML] = useLocalStorage('html', `<h1>Hello World</h1>`)
const [css, setCSS] = useState<string>(``)
const [javascript, setJavascript] = useState<string>('')
const [srcDoc, setSrcDoc] = useState<string>('')
const [current, setCurrent] = useState('html')

useEffect(() => {
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
}, [html, css, javascript])

    interface language {
        language: String,
        displayName: String,
        value: String,
        onChange: any
    }

    type languages =  {
        [key: string]: language
    }

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

return (
    <>
        <div className='window-container'>
            <div className='window code-window'>
                <button onClick={() => setCurrent('html')}>HTML</button>
                <button onClick={() => setCurrent('css')}>CSS</button>
                <button onClick={() => setCurrent('javascript')}>Javascript</button>
                {/* <h3>Kyle</h3>
                <h3>Portfolio Website</h3>
                <h4>Designs for Portfolio website.</h4> */}
                <Editor 
                language={langs[current].language}
                displayName={langs[current].displayName}
                value={langs[current].value}
                onChange={langs[current].onChange}
                />
                {/* <Editor
                language='css' 
                displayName='CSS' 
                value={css} 
                onChange={setCSS} 
                />
                <Editor
                language='javascript' 
                displayName='Javascript' 
                value={javascript} 
                onChange={setJavascript} 
                /> */}
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
