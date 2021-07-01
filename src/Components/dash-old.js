import React, { Component, Fragment } from 'react';

import Header from "./Header";
import Footer from "./Footer";

import "./dash.css";
class Dash extends Component
{
    constructor(props)
    {
        super(props);

        this.state ={
            que1:'',
            que2:'',
            que3:'',
            que4:'',
            que5:'',
            que6:'',
            que7:'',
            que8:'',
            que9:'',
            que10:'',
            submitted:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        console.log([name],value)
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.setState({ submitted:true });
        
    }


    render()
    {
        const { que1,que2,que3,que4,que5,que6,que7,que8,que9,que10,submitted } = this.state;
        return(

            <Fragment>
                <Header />

                <div className="container-fluid my-2">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-lg-5 col-md-5 px-lg-5 py-3">
                                <div className="heading-top text-center p-3">
                                    Questionnaire
                                </div>
                                <div className="question-box pl-3 py-3">

                                    <div className="form-group">
                                        <label htmlFor="que1" className="font-weight-bold">
                                            Do you feel sick? <span className="h5 text-danger">*</span>
                                        </label>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que1" 
                                            id="que1" 
                                            value="yes" 
                                            checked = {que1 === 'yes'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que1" 
                                            id="que1" 
                                            value="no" 
                                            checked = {que1 === 'no'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="no">
                                                No
                                            </label>
                                        </div>
                                        {submitted && !que1 && 
                                        <small className="form-text text-danger font-weight-bold">Please select any 1 option</small>
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="que2" className="font-weight-bold">
                                            Is your temperature (measured by a thermometer) above 99^F (37.2^C)? <span className="h5 text-danger">*</span>
                                        </label>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que2" 
                                            id="que2" 
                                            value="yes" 
                                            checked = {que2 === 'yes'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que2" 
                                            id="que2" 
                                            value="no" 
                                            checked = {que2 === 'no'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="no">
                                                No
                                            </label>
                                        </div>
                                        {submitted && !que2 && 
                                        <small className="form-text text-danger font-weight-bold">Please select any 1 option</small>
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="que3" className="font-weight-bold">
                                            Do you have a sore throat? <span className="h5 text-danger">*</span>
                                        </label>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que3" 
                                            id="que3" 
                                            value="yes" 
                                            checked = {que3 === 'yes'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que3" 
                                            id="que3" 
                                            value="no" 
                                            checked = {que3 === 'no'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="no">
                                                No
                                            </label>
                                        </div>
                                        {submitted && !que3 && 
                                        <small className="form-text text-danger font-weight-bold">Please select any 1 option</small>
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="que4" className="font-weight-bold">
                                            Do you have a headache? <span className="h5 text-danger">*</span>
                                        </label>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que4" 
                                            id="que4" 
                                            value="yes" 
                                            checked = {que4 === 'yes'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que4" 
                                            id="que4" 
                                            value="no" 
                                            checked = {que4 === 'no'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="no">
                                                No
                                            </label>
                                        </div>
                                        {submitted && !que4 && 
                                        <small className="form-text text-danger font-weight-bold">Please select any 1 option</small>
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="que5" className="font-weight-bold">
                                            Do you have a cough or any shortness of breath? <span className="h5 text-danger">*</span>
                                        </label>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que5" 
                                            id="que5" 
                                            value="yes" 
                                            checked = {que5 === 'yes'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que5" 
                                            id="que5" 
                                            value="no" 
                                            checked = {que5 === 'no'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="no">
                                                No
                                            </label>
                                        </div>
                                        {submitted && !que5 && 
                                        <small className="form-text text-danger font-weight-bold">Please select any 1 option</small>
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="que6" className="font-weight-bold">
                                            Do you have any unexplained muscle aches or fatigue? <span className="h5 text-danger">*</span>
                                        </label>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que6" 
                                            id="que6" 
                                            value="yes" 
                                            checked = {que6 === 'yes'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que6" 
                                            id="que6" 
                                            value="no" 
                                            checked = {que6 === 'no'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="no">
                                                No
                                            </label>
                                        </div>
                                        {submitted && !que6 && 
                                        <small className="form-text text-danger font-weight-bold">Please select any 1 option</small>
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="que7" className="font-weight-bold">
                                            Have you recently lost your sense of taste or smell? <span className="h5 text-danger">*</span>
                                        </label>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que7" 
                                            id="que7" 
                                            value="yes" 
                                            checked = {que7 === 'yes'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que7" 
                                            id="que7" 
                                            value="no" 
                                            checked = {que7 === 'no'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="no">
                                                No
                                            </label>
                                        </div>
                                        {submitted && !que7 && 
                                        <small className="form-text text-danger font-weight-bold">Please select any 1 option</small>
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="que8" className="font-weight-bold">
                                            Have you recently had any new gastronintestinal symptoms such as diarrhea? <span className="h5 text-danger">*</span>
                                        </label>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que8" 
                                            id="que8" 
                                            value="yes" 
                                            checked = {que8 === 'yes'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que8" 
                                            id="que8" 
                                            value="no" 
                                            checked = {que8 === 'no'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="no">
                                                No
                                            </label>
                                        </div>
                                        {submitted && !que8 && 
                                        <small className="form-text text-danger font-weight-bold">Please select any 1 option</small>
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="que9" className="font-weight-bold">
                                            Do you have a congestion or a runny nose? <span className="h5 text-danger">*</span>
                                        </label>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que9" 
                                            id="que9" 
                                            value="yes" 
                                            checked = {que9 === 'yes'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que9" 
                                            id="que9" 
                                            value="no" 
                                            checked = {que9 === 'no'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="no">
                                                No
                                            </label>
                                        </div>
                                        {submitted && !que9 && 
                                        <small className="form-text text-danger font-weight-bold">Please select any 1 option</small>
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="que10" className="font-weight-bold">
                                            Have you recently experienced nausea or vomiting? <span className="h5 text-danger">*</span>
                                        </label>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que10" 
                                            id="que10" 
                                            value="yes" 
                                            checked = {que10 === 'yes'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check pl-4">
                                            <input 
                                            className="form-check-input" type="radio" 
                                            name="que10" 
                                            id="que10" 
                                            value="no" 
                                            checked = {que10 === 'no'}
                                            onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="no">
                                                No
                                            </label>
                                        </div>
                                        {submitted && !que10 && 
                                        <small className="form-text text-danger font-weight-bold">Please select any 1 option</small>
                                        }
                                    </div>

                                    {/* Box End */}
                                </div>
                                {/* Column end */}
                            </div>

                            <div className="col-lg-7 col-md-7 p-3">
                                <div className="heading-top text-center p-3">
                                    Upload Files
                                </div>
                                <div className="box px-5 pt-3">
                                    <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                        <th scope="col">Test Name</th>
                                        <th scope="col">Upload File</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>RT-PCR</td>
                                        <td>
                                            <div className="form-group">
                                                <input type="file" className="form-control-file" id="file1" accept="application/pdf" />
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>PCT</td>
                                        <td>
                                            <div className="form-group">
                                                <input type="file" className="form-control-file" id="file1" accept="application/pdf" />
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>D-Dimer</td>
                                        <td>
                                            <div className="form-group">
                                                <input type="file" className="form-control-file" id="file1" accept="application/pdf" />
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>CRP</td>
                                        <td>
                                            <div className="form-group">
                                                <input type="file" className="form-control-file" id="file1" accept="application/pdf" />
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>LDH</td>
                                        <td>
                                            <div className="form-group">
                                                <input type="file" className="form-control-file" id="file1" accept="application/pdf" />
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>CT Scan</td>
                                        <td>
                                            <div className="form-group">
                                                <input type="file" className="form-control-file" id="file1" accept="application/pdf" />
                                            </div>
                                        </td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* Box End */}
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group row">
                                    <div className="col-lg-12 col-md-12">
                                    <button type="submit" className="btn btn-lg float-right">Submit</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default Dash;