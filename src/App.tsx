import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor'

function App() {
  return (
    <>
      <div className='window'>
        
      </div>
      <div className='window'>
        <iframe 
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
