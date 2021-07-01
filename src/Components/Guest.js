import React, { Fragment } from 'react';
import "./app.css";

import Header from "./Header";
import Footer from "./Footer";

const Guest = () =>
{
    return(
            <Fragment>
            <Header />
            <div className="container preference my-4 p-4">
                <div className="col-md-10 offset-md-1 pt-4">	
                    <h1 className="p-5">Guest</h1>
                </div>
            </div>

            <Footer />
            </Fragment>
    );
}

export default Guest;