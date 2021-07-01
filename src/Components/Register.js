import React, { Component, Fragment } from 'react';
import "./app.css";
import {Link} from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";

class Register extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
            name:"",
            dob:'',
            gender:'',
            userid:'',
            password:'',
            confirmpass:'',
            zipcode:'',
            date:'',
            submitted:false,
            useridError : '',
            passwordError:'',
            zipcodeError:'',
            terms1Error:'',
            terms2Error:'',
            terms1:false,
            terms2:false,
            redirect:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.todayDate = this.todayDate.bind(this);
        this.valid = this.valid.bind(this);
        this.onCheckChange = this.onCheckChange.bind(this);
    }
    // const register=()=>{
    //   Axios.post("https://localhost3001/server/register",
    //   {userId:userdetail,password:password,}).then((response)=>{
    //     console.log(response);
    //   });
    // };

    todayDate = () =>
    {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

    checkPassword = (pass) =>
    {
        if(pass.length >=5 && pass.length <= 10 && pass.match(/[A-Z]/) && pass.match(/[a-z]/) && pass.match(/[0-9]/) && pass.match(/[#@]/))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    valid = () =>
    {
        if(this.state.userid.length < 5 && this.state.password !== this.state.confirmpass && !this.checkPassword(this.state.confirmpass) && this.state.zipcode.length !== 6 && this.state.terms1 === false && this.state.terms2 === false)
        {
            if(this.state.password !== this.state.confirmpass)
            {
                this.setState({useridError:"UserID should contain atleast 5 characters",passwordError:"Password do not match",zipcodeError:"Invalid Zip code",terms1Error:"Agree the terms",terms2Error:"Agree the terms"})
            }
            else if(!this.checkPassword(this.state.confirmpass))
            {
                this.setState({useridError:"UserID should contain atleast 5 characters",passwordError:"Password should contain atleast 1 capital and small letter with 1 symbol and 1 number",zipcodeError:"Invalid Zip code",terms1Error:"Agree the terms",terms2Error:"Agree the terms"})
            }
        }
        if(this.state.userid.length < 5)
        {
            this.setState({useridError:"UserID should contain atleast 5 characters"})
        }
        else if(!this.checkPassword(this.state.confirmpass))
        {
            this.setState({passwordError:"Password should contain atleast 1 capital and small letter with 1 symbol and 1 number with minimum 5 characters"})
        }
        else if(this.state.password !== this.state.confirmpass)
        {
            this.setState({passwordError:"Password do not match"})
        }

        else if(this.state.zipcode.length !== 6)
        {
            this.setState({zipcodeError:"Invalid Zip code"})
        }
        else if(this.state.terms1 === false)
        {
            this.setState({terms1Error:"Agree the terms"})
        }
        else if(this.state.terms2 === false)
        {
            this.setState({terms2Error:"Agree the terms"})
        }
        else
        {
            return true;
        }

    }





    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    onCheckChange(e){
        this.setState({[e.target.name]:e.target.checked});
    }



    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.terms);

        const currDate = this.todayDate();
        this.setState({ date:currDate });
        this.setState({ submitted:true });

        this.setState({useridError:'',passwordError:'',zipcodeError:'',terms1Error:'',terms2Error:''})

        if(this.valid())
        {
            alert("Thank you");
        }
    }

    render()
    {
        const { name,dob,gender,userid,password,confirmpass,zipcode,submitted,terms1,terms2 } = this.state;

        const date = this.todayDate()

        return(
            <Fragment>
                <Header />

                <div className="container preference my-4 p-4">
                    <div className="col-md-10 offset-md-1 pt-4">
                        <p className="font-weight-bold h5">
                            Patient Details
                        </p>
                        <p>
                            Provide correct details of the patient as this inofrmation is important for analysis. Remeber mobile number and/or email ID you have provided as these will be your IDs to access the app next time.
                        </p>
                    </div>
                    <div className="col-md-10 offset-md-2 mt-5">
                        <form >
                        <div className="form-group row">
                            <label htmlFor="name" className="col-md-4 col-form-label">
                                Patient Name  <span className="h5 text-danger">*</span>
                            </label>
                            <div className="col-md-6 p-2">
                            <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            required
                            value={name}
                            onChange={this.handleChange} />
                            {submitted && !name &&
                            <small className="form-text text-danger">Name is required</small>
                            }
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="dob" className="col-md-4 col-form-label">
                                Patient's Date of Birth  <span className="h5 text-danger">*</span>
                            </label>
                            <div className="col-md-6 p-2">
                            <input
                            type="date"
                            className="form-control"
                            id="dob"
                            name="dob"
                            required
                            max={date}
                            value={dob}
                            onChange={this.handleChange} />
                            {submitted && !dob &&
                            <small className="form-text text-danger">Date of Birth is required</small>
                            }
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="gender" className="col-md-4 col-form-label">
                                Patient's Gender  <span className="h5 text-danger">*</span>
                            </label>
                            <div className="col-md-6 p-2">
                            <select
                            id="gender"
                            name="gender"
                            className="form-control"
                            value={gender}
                            onChange={this.handleChange}>
                                <option>Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {submitted && !gender &&
                            <small className="form-text text-danger">Gender is required</small>
                            }
                            </div>
                        </div>


                        <div className="form-group row">
                            <label htmlFor="userid" className="col-md-4 col-form-label">
                                UserID  <span className="h5 text-danger">*</span>
                            </label>
                            <div className="col-md-6 p-2">
                            <input
                            type="text"
                            className="form-control"
                            id="userid"
                            name="userid"
                            maxLength="10"
                            value={userid}
                            onChange={this.handleChange}/>
                            {submitted && !userid &&
                            <small className="form-text text-danger">Userid is required</small>
                            }
                            <small className="form-text text-danger">{this.state.useridError}</small>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="password" className="col-md-4 col-form-label">
                                Password  <span className="h5 text-danger">*</span>
                            </label>
                            <div className="col-md-6 p-2">
                            <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}/>
                            {submitted && !password &&
                            <small className="form-text text-danger">Password is required</small>
                            }
                           <small className="form-text text-danger">{this.state.passwordError}</small>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="confirmpass" className="col-md-4 col-form-label">
                                Confirm Password  <span className="h5 text-danger">*</span>
                            </label>
                            <div className="col-md-6 p-2">
                            <input
                            type="password"
                            className="form-control"
                            id="confirmpass"
                            name="confirmpass"
                            value={confirmpass}
                            onChange={this.handleChange}/>
                            {submitted && !confirmpass &&
                            <small className="form-text text-danger">Confirm Password is required</small>
                            }
                            <small className="form-text text-danger">{this.state.passwordError}</small>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="zipcode" className="col-md-4 col-form-label">
                                Zip code  <span className="h5 text-danger">*</span>
                            </label>
                            <div className="col-md-6 p-2">
                            <input
                            type="text"
                            className="form-control"
                            id="zipcode"
                            name="zipcode"
                            maxLength="6"
                            value={zipcode}
                            onChange={this.handleChange}/>
                            {submitted && !zipcode &&
                            <small className="form-text text-danger">Zipcode is required</small>
                            }
                            <small className="form-text text-danger">{this.state.zipcodeError}</small>
                            </div>
                        </div>

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

                        <div className="form-group">
                            <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            name="terms1"
                            id="terms1"
                            checked={terms1}
                            onChange={this.onCheckChange}/>
                            <label className="form-check-label" htmlFor="terms1">
                                I read and accept Terms of Service and
                                <Link to="/"> Privacy Policy. </Link>
                                <span className="h5 text-danger">*</span>
                            </label>
                            </div>
                            {submitted && !terms1 &&
                            <small className="form-text text-danger">Please check it.</small>
                            }
                            <small className="form-text text-danger">{this.state.terms1Error}</small>
                        </div>

                        <div className="form-group">
                            <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            name="terms2"
                            id="terms2"
                            checked={terms2}
                            onChange={this.onCheckChange}/>
                            <label className="form-check-label" htmlFor="terms2">
                            I agree to the processing of my personal and health information for evaluating the severity of my illness. <span className="h5 text-danger">*</span>
                            </label>
                            </div>
                            {submitted && !terms2 &&
                            <small className="form-text text-danger">Please check it.</small>
                            }
                            <small className="form-text text-danger">{this.state.terms2Error}</small>
                        </div>


                        <div className="form-group row">
                            <div className="col-md-10">
                            <button type="submit" className="btn btn-md float-right" onClick={this.handleSubmit}>
                                Submit
                            </button>
                            </div>
                        </div>
                        </form>

                    </div>
                </div>

                <Footer />

            </Fragment>

        );
    }
}

export default Register;
