import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

const Editor: React.FC<any> = ({ displayName, language, value, onChange }) => {
    const handleChange = (editor: any, data: any, value: any) => {
        onChange(value)
    }
    return (
        <>
        <div className='editor-title'>
            {displayName}
        </div>
        <div className='editor-container'>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className='editor-wrapper'
                options = {{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </div>
        </>
    )
}

export default Editor
