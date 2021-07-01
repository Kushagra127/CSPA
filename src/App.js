import React, { Component, Fragment } from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

class App extends Component
{
    render()
    {
        return(
            <Fragment>
                <Header />
                <Footer />
            </Fragment>
        )
    }
}

export default App;