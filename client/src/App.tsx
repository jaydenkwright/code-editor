import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import api from './api/api'
import EditorPage from './components/EditorPage'
import GettingStarted from './components/GettingStarted'
import LoginPage from './components/LoginPage'

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null)
  useEffect(() => {
    const isLoggedIn = async () => {
      try {
        const response = await api.get('/user/isLoggedIn',
        {
          withCredentials: true
        })
        setLoggedIn(true)
      } catch (error) {
        setLoggedIn(false)
      }
    }

    isLoggedIn()
  }, [loggedIn])

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <EditorPage />
        </Route>
        <Route path='/getStarted' exact>
          <GettingStarted />
        </Route>
        <Route path='/login' exact>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
