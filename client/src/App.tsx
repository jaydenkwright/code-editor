import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import api from './api/api'
import EditorPage from './components/EditorPage'
import GettingStarted from './components/GettingStarted'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import CreateProject from './components/CreateProject'
import { UserProvider } from './context/UserContext'

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null)
  useEffect(() => {
    const isLoggedIn = async () => {
      try {
        const response = await api.get('/user/isLoggedIn',
        {
          withCredentials: true
        })
        if (response.data){
          setLoggedIn(true)
        }
      } catch (error) {
        setLoggedIn(false)
      }
    }

    isLoggedIn()
  }, [loggedIn])


  return (
    <UserProvider value={{ loggedIn, setLoggedIn }}>
      {loggedIn ? 
        <Router>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/project/create' exact>
              <CreateProject />
            </Route>
            <Route path='/project/:id' exact>
              <EditorPage />
            </Route>
            <Route path='*'>
              <Redirect to="/" />
            </Route>
          </Switch>
      </Router>
     :
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
            <Route path='*'>
              <Redirect to="/" />
            </Route>
          </Switch>
      </Router> }
    </UserProvider>
  );
}

export default App;
