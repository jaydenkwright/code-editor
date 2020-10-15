import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor'

function App() {
  const [html, setHTML] = useState('')
  const [css, setCSS] = useState('')
  const [javascript, setJavascript] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javascript}</script>
      </html>
    `)
    }, 300)
  }, [html, css, javascript])

  return (
    <>
      <div className='window top-window'>
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
      <div className='window'>
        <iframe 
          srcDoc={srcDoc}
          title='output' 
          sandbox='allow-scripts'
          frameBorder='0'
          width='100%'
          height='100%'
        />
      </div>
    </>
  );
}

export default App;
