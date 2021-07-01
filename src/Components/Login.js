import React, { Fragment,useState } from 'react';
import { useHistory } from 'react-router-dom'
import "./app.css";

import Header from "./Header";
import Footer from "./Footer";

const Login = () =>
{
    const [details,setDetails] = useState({name:"",password:""});
    const [submit,setSubmit] = useState(false);
    const [error,setError] = useState({nameError:'',passwordError:''})
    let history = useHistory();

    const isValid = () =>
    {
        if(!details.name && details.name.length < 5 && !details.password )
        {
            setError({nameError:"UserID should contain atleast 5 characters",passwordError:"Please enter the password"})
        }
        else if(details.name.length < 5 )
        {
            setError({nameError:"UserID should contain atleast 5 characters"})
        }
        else if(!details.name )
        {
            setError({nameError:"Please Enter your userid"})
        }
        else if(!details.password )
        {
            setError({passwordError:"Please enter the password"})
        }
        else
        {
            return true;
        }

    }


    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(details);
        setSubmit(true);

        if(isValid())
        {
            history.push('/dashboard')
        }
    }


    return(
            <Fragment>
                <Header />
                <div className="container preference my-4 p-4">

                    <div className="col-md-12 text-center font-weight-bold">
                        <h1 className="text-center">Login</h1><br/><br/>
                    </div>

                    <div className="col-md-9 offset-md-3 pt-2">
                        <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="details" className="col-md-4 col-form-label font-weight-bold">
                                Enter your User- ID :
                            </label>
                            <div className="col-md-4">
                                <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                maxLength="10"
                                onChange={ (e) => setDetails({...details,name:e.target.value})} value={details.name}/>
                                <small className="form-text font-weight-bold text-danger">{error.nameError}</small>
                            </div> 
                        </div>
                        <br/>

                        <div className="form-group row">
                            <label htmlFor="password" 
                            className="col-md-4 col-form-label font-weight-bold">
                                Enter your password :
                            </label>
                            <div className="col-md-4">
                            <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={ (e) => setDetails({...details,password:e.target.value})} value={details.password}/>
                            <small className="form-text font-weight-bold text-danger">{error.passwordError}</small>
                            </div>
                        </div>
                        
                        <div className="form-group row mt-3">
                            <div className="col-md-8">
                            <button type="submit" className="btn btn-md float-right">
                                Submit
                            </button>
                            </div>
                        </div>
                        </form>

                    </div>
                </div>

            <Footer  position={"fixed-bottom"}/>
        </Fragment>
    );
}

export default Login;
