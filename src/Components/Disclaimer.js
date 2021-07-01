import React, { Fragment,useState } from 'react';
import "./app.css";
import {Link, useHistory} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

const Disclaimer = () =>
{
    const [term1, setTerm1] = useState('')
    const [term2, setTerm2] = useState('')
    let history = useHistory();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(term1,term2);

        if(term1 && term2)
        {
            history.push('/guest');
        }
        else
        {
            let msg = 'To continue please check all the boxes \nDo you want to exit ?'
            let choice = window.confirm(msg);
            if(choice ===  true)
            {
                history.push('/');
            }
        }
    }


    return(
        <Fragment>
            <Header />

            <div className="container preference mt-4 p-4">
                <div className="col-md-10 offset-md-1 pt-4">	
                    <h1 className="py-3" style={{color:'red'}}>Disclaimer</h1>
                    <p>
                    Before using this app, please read and accept below disclaimer, Terms of Service and our Privacy Policy:
                    <br />
                    If you are concerned about your health, please consult your doctor.
                    <br />
                    The purpose of this App is to just provide you the information about the current state of your health and to help you track the progression of the disease due to Coronavirus infection. Any information you receive from this App is purely based on the inputs you provide and this product does not guarantee the accuracy of the information it provides to you. 
                    <br />
                    This App is not a medical App and the information generated by this App is not to be considered as a diagnostic report and it is not a substitute for medical opinion. Please consult a Doctor for accurate diagnosis and treatment.
                    <br />
                    This app will require you to provide your personal and health information and values in your Covid related test reports ( E.g. RT-PCR Test, CT-Scan, Rapid Antigen Test, D-Dimer Test, PCT, CRP, LDH etc.). 
                    </p>

                    <form >
                        <div className="form-group">
                            <div className="form-check">
                            <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name="terms1"
                            id="terms1"
                            checked={term1}
                            onChange={(e) => setTerm1('yes')}/>
                            <label className="form-check-label" htmlFor="terms1">
                                I read and accept Terms of Service and 
                                <Link to="/"> Privacy Policy. </Link>
                                <span className="h5 text-danger">*</span>
                            </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-check">
                            <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name="terms2"
                            id="terms2"
                            checked={term2}
                            onChange={(e) => setTerm2('yes')}/>
                            <label className="form-check-label" htmlFor="terms2">
                            I agree to the processing of my personal and health information for evaluating the severity of my illness. <span className="h5 text-danger">*</span>
                            </label>
                            </div>
                        </div>
   
    
                        <div className="form-group row">
                            <div className="col-md-10">
                            <button type="submit" className="btn btn-md float-right" onClick={handleSubmit}>
                                Submit
                            </button>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-md-10">
                            <Link to='/register'>
                                <button type="button" className="btn btn-md float-right">
                                    Go to register
                                </button>
                            </Link>
                            
                            </div>
                        </div>
                        </form>
                        

                </div>
            </div>

            <Footer position={"fixed-bottom"} />

        </Fragment>

    );
}

export default Disclaimer;