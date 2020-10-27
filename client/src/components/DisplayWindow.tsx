import React, { useEffect} from 'react'

const DisplayWindow: React.FC<any> = ({srcDoc, setSrcDoc, html, css, javascript}) => {
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
    )
}

export default DisplayWindow
