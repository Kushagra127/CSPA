import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Language from "./Components/Language";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AskRegister from "./Components/askregister"
import Disclaimer from "./Components/Disclaimer";
import Dashboard from "./Components/Dashboard";
import Guest from "./Components/Guest";
import Privacy from "./Components/Privacy"; 

class App extends Component
{
    render()
    {
        return(
            <Router>
                <Route exact path="/">
                    <Language />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/askregister">
                    <AskRegister />
                </Route>
                <Route exact path="/disclaimer">
                    <Disclaimer />
                </Route>
                <Route exact path="/guest">
                    <Guest />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/privacy">
                    <Privacy />
                </Route>
            </Router>
            
        )
    }
}

ReactDOM.render(<App />,document.getElementById("root"));