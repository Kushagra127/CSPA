import React, { Component } from 'react';
import "./app.css";
import logo from "../img/logo.png";

class Header extends Component
{
    render()
    {
        return(
            <div className="header">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand">
                        <img src={logo} width="60" height="60" className="d-inline-block" alt="Logo" />
                        <span className="heading ml-3 h5 font-weight-bold align-middle">Covid Severity Checker App
                        </span>
                    </span>
                </nav>
            </div>
        );
    }
}

export default Header;