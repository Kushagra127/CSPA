import React, { Fragment , useState} from 'react';
import { useHistory } from 'react-router-dom'

import "./app.css";

import Header from "./Header";
import Footer from "./Footer";

const Language = () =>
{

    const [language, setLanguage] = useState('');
    const [usercheck, setUserCheck] = useState('');
    const [error,setError] = useState({language:'',status:''})
    let history = useHistory();


    const isValid = () =>
    {
        if(!language && !usercheck) 
        {
            setError({...error,language:'Please select any 1 language',status:'Please select any 1 option'});
        }           
        else if (!language)
        {
            setError({...error,language:'Please select any 1 language'});
        }
        else if(!usercheck)
        {
            setError({...error,status:'Please select any 1 option'});
        }
        else
        {
            return true;
        }
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(language,usercheck);


        setError({...error,language:'',status:''})

        if(isValid())
        {
            if(language === 'english' && usercheck === 'yes')
            {
                history.push('/login')
            }
            else if(language === 'english' && usercheck === 'no')
            {
                history.push('/askregister')
            }
            else if(language === 'hindi' && usercheck === 'yes')
            {
                history.push('/login')
            }
            else if(language === 'hindi' && usercheck === 'no')
            {
                history.push('/askregister')
            }
        }   
    }

    return(
            <Fragment>
                <Header />
                <div className="container preference my-4 p-5">
                    <div className="col-md-8 offset-md-1">	
                        
                        <form  onSubmit={handleSubmit}>
                        <fieldset className="form-group row">
                            <legend className="col-form-label col-sm-8 float-sm-left pt-0 font-weight-bold">
                                Please select your language preference.  <span className="h5 text-danger">*</span><br/>
                                कृपया अपनी भाषा चुनें।  <span className="h5 text-danger">*</span>
                            </legend>
                            <div className="col-sm-4">
                            <div className="form-check p-1">
                                <input 
                                className="form-check-input" 
                                type="radio" 
                                name="language" 
                                id="language" 
                                value="english" 
                                checked = {language === 'english'}
                                onChange={ (e) => setLanguage(e.target.value)}/>
                                <label className="form-check-label" htmlFor="gridRadios1">
                                English
                                </label>
                            </div>
                            <div className="form-check p-1">
                                <input 
                                className="form-check-input" 
                                type="radio" 
                                name="language" 
                                id="language" 
                                value="hindi"
                                checked = {language === 'hindi'}
                                onChange={ (e) => setLanguage(e.target.value)}/>
                                <label className="form-check-label" htmlFor="gridRadios2">
                                हिंदी 
                                </label>
                            </div>
                            <span className="form-text text-danger">{error.language}</span>
                            </div>
                        </fieldset>

                        <fieldset className="form-group row mt-5">
                            <legend className="col-form-label col-sm-8 float-sm-left pt-0 font-weight-bold">
                                Are you a registered user of Covid Severity Checker Application ?  <span className="h5 text-danger">*</span>
                                <br />
                                क्या आप Covid Severity Checker Application के पंजीकृत उपयोगकर्ता हैं ?  <span className="h5 text-danger">*</span>
                            </legend>
                            <div className="col-sm-4">
                            <div className="form-check p-1">
                                <input 
                                className="form-check-input" 
                                type="radio" 
                                name="usercheck" 
                                id="usercheck" 
                                value="yes"
                                checked={usercheck === 'yes'}
                                onChange={ (e) => setUserCheck(e.target.value)}/>
                                <label className="form-check-label" htmlFor="gridRadios1">
                                Yes ( हाँ )
                                </label>
                            </div>
                            <div className="form-check p-1">
                                <input 
                                className="form-check-input" 
                                type="radio" 
                                name="usercheck" 
                                id="usercheck" 
                                value="no" 
                                checked={usercheck === 'no'}
                                onChange={ (e) => setUserCheck(e.target.value)}/>
                                <label className="form-check-label" htmlFor="gridRadios2">
                                No ( नहीं )
                                </label>
                            </div>
                            <span className="form-text text-danger">{error.status}</span>
                            </div>
                        </fieldset>

                        <div className="form-group row">
                            <div className="col-md-10">
                            <button type="submit" className="btn btn-md float-right">
                                Proceed <br />( आगे बढ़े )
                            </button>
                            </div>
                        </div>
                        </form>

                    </div>
                </div>

            <Footer position={"fixed-bottom"} />

            </Fragment>

        );
}

export default Language;