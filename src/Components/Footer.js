import React, { Component } from 'react';
import "./app.css";

class Footer extends Component
{
    render()
    {
        const position = this.props.position;
        return(
            <div className={`footer h5 p-4 text-center bg-light ${position}`}>
                &copy; Copyright Jatayu Healthcare Technologies Pvt. Ltd. All Rights Reserved
            </div>
        );
    }
}

export default Footer;