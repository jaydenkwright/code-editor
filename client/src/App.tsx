import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor'
import { time } from 'console';

function App() {
  const [html, setHTML] = useState<string>(`<h1>Hello World</h1>`)
  const [css, setCSS] = useState<string>(``)
  const [javascript, setJavascript] = useState<string>('')
  const [srcDoc, setSrcDoc] = useState<string>('')

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

  return (
    <>
    <div className='window-container'>
      <div className='window code-window'>
      <h3>Kyle</h3>
      <h3>Portfolio Website</h3>
      <h4>Designs for Portfolio website.</h4>
        <Editor 
          language='xml' 
          displayName='HTML' 
          value={html} 
          onChange={setHTML} 
        />
        <Editor
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

export default App;
