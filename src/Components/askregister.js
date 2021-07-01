import React, { Fragment , useState} from 'react';
import { useHistory } from 'react-router-dom'

import "./app.css";

import Header from "./Header";
import Footer from "./Footer";


const AskRegister = () =>
{
    const [userchoice,setUserChoice] = useState('');
    const [submitted, setSubmitted] = useState(false);

    let history = useHistory();

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        console.log(userchoice);
        setSubmitted(true);

        if(userchoice)
        {
            if(userchoice === 'yes' )
            {
                history.push('/register');
            }
            else
            {
                history.push('/disclaimer');
            }
        }
        // else
        // {
        //     alert("Please select the proper input");
        // }
    }

    return(
        <Fragment>
            <Header />
            <div className="container preference my-4 p-4">
                <div className="col-md-10 offset-md-1 pt-4">
                    <form onSubmit={handleSubmit}>
                    <fieldset className="form-group row mt-5">
                        <legend className="col-form-label col-md-8 float-sm-left pt-0 font-weight-bold">
                            Do you want to register for Covid Severity Checker Application ?
                        </legend>
                        <div className="col-md-4">
                        <div className="form-check p-1">
                            <input 
                            className="form-check-input" 
                            type="radio" 
                            name="userchoice" 
                            id="userchoice" 
                            value="yes" 
                            checked = { userchoice === 'yes'}
                            onChange = { (e) => setUserChoice(e.target.value)}/>
                            <label className="form-check-label" htmlFor="gridRadios1">
                            Yes
                            </label>
                        </div>
                        <div className="form-check p-1">
                            <input 
                            className="form-check-input" 
                            type="radio" 
                            name="userchoice" 
                            id="userchoice" 
                            value="no" 
                            checked = { userchoice === 'no'}
                            onChange = { (e) => setUserChoice(e.target.value)}/>
                            <label className="form-check-label" htmlFor="gridRadios2">
                            No
                            </label>
                        </div>
                        {submitted && !userchoice &&
                            <small className="form-text text-danger">Please check it.</small>
                        }
                        </div>
                    </fieldset>

                    <div className="form-group row">
                        <div className="col-md-9 mt-3">
                        <button type="submit" className="btn btn-md float-right">
                            Proceed
                        </button>
                        </div>
                    </div>
                    </form>

                </div>
            </div>

        <Footer position={"fixed-bottom"}/>

        </Fragment>

    );
}

export default AskRegister;