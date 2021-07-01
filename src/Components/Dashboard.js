import React, { Component, Fragment } from 'react';

import Header from "./Header";
import Footer from "./Footer";

import "./dashboard.css";
class Dashboard extends Component
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
            que11:'',
            que12:'',
            que13:'',
            que14:'',
            que15:'',
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
        const { que1,que2,que3,que4,que5,que6,que7,que8,que9,que10,que11,que12,que13,que14,que15,submitted } = this.state;
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
                                <div className="heading-top text-center p-1">
                                   Covid Symptoms
                                  </div><br/>

                                    <div className="form-group">
                                    <input type="checkbox" />
                                    <label htmlFor="que1" className="font-weight-bold pl-2">
                                        Sore Throat</label><br/>
                                    <input type="checkbox"/>
                                    <label htmlFor="que2" className="font-weight-bold pl-2">
                                    Fever</label><br/>
                                    <input type="checkbox"/>
                                    <label htmlFor="que3" className="font-weight-bold pl-2">
                                     Dry Cough </label> <br/>
                                      <input type="checkbox"/>
                                      <label htmlFor="que4" className="font-weight-bold pl-2">
                                      Body ache </label><br/>
                                      <input type="checkbox"/>
                                        <label htmlFor="que5" className="font-weight-bold pl-2">
                                       Headache</label><br/>
                                      <input type="checkbox"/>
                                      <label htmlFor="que6" className="font-weight-bold pl-2">
                                      Runny nose </label><br/>
                                      <input type="checkbox"/>
                                      <label htmlFor="que7" className="font-weight-bold pl-2">
                                      Nausea</label><br/>
                                      <input type="checkbox"/>
                                      <label htmlFor="que8" className="font-weight-bold pl-2">
                                      Vomitting</label><br/>
                                      <input type="checkbox"/>
                                      <label htmlFor="que8" className="font-weight-bold pl-2">
                                      Loss of Smell</label>
                                      <br/>
                                      <input type="checkbox"/>
                                      <label htmlFor="que8" className="font-weight-bold pl-2">
                                      Loss of Taste</label>
                                      <br/>
                                      <input type="checkbox"/>
                                      <label htmlFor="que8" className="font-weight-bold pl-2">
                                      Rashes on Body</label>
                                      <br/>
                                      <input type="checkbox"/>
                                      <label htmlFor="que8" className="font-weight-bold pl-2">
                                      Conjunctivitis</label>
                                        </div>

                                        <div className="heading-top text-center p-1">
                                           Comorbid Diseases
                                          </div><br/>
                                          <div className="form-group">
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                          Diabetes</label><br/>
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                        COPD/Emphysema</label><br/>
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                          Renal/Kidney disease (dialysis/nephritis)</label><br/>
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                          Peripheral Vascular Disease (Deep vein thrombosis etc)</label><br/>
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                          Congestive Heart Failure</label><br/>
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                          Dementia</label><br/>
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                          History of Cancer</label><br/>
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                          Stroke</label><br/>
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                          Liver disease</label><br/>
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                         Heart Attack</label><br/>
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                          Peptic Ulcer</label><br/>
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                          Paralysis of Limbs</label><br/>
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                          AIDS</label><br/>
                                          <input type="checkbox"/>
                                          <label htmlFor="que1" className="font-weight-bold pl-2">
                                          Rheumatological disease (Arthritis, Lupus etc)</label><br/>
                                          </div>

                                    {/* Box End */}
                                </div>
                                {/* Column end */}
                            </div>

                            <div className="col-lg-7 col-md-7 p-3">
                                <div className="heading-top text-center p-3">
                                    Insert Report Data
                                </div>
                                <div className="question-box px-5 pt-3">
                                    <table className="table table-bordered">
                          <thead>
                          <tr>
                          <th scope="col">Sr no</th>
                          <th scope="col">Test-type</th>
                          <th scope="col">Values</th>
                            <th scope="col">Units</th>
                          <th scope="col">Range</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                          <th scope="row">1</th>
                          <td>Ferritin</td>
                          <td>  <input
                          type="number" min="0"/></td>
                          <td>ng/ml</td>
                          <td>0-1000 </td>
                          </tr>
                          <tr>
                          <th scope="row">2</th>
                          <td>PCT</td>
                          <td> <input
                          type="number" min="0"/></td>
                          <td>ng/ml</td>
                          <td>0-3000</td>
                          </tr>
                          <tr>
                          <th scope="row">3</th>
                          <td >D-dimer</td>
                          <td> <input
                          type="number" min="0"/></td>
                          <td>ng/ml</td>
                          <td>0-3000</td>
                          </tr>
                          <tr>
                          <th scope="row">4</th>
                          <td >CRP</td>
                          <td> <input
                          type="number" min="0"/></td>
                          <td>mg/L</td>
                          <td>0-200</td>
                          </tr>
                          <tr>
                          <th scope="row">5</th>
                          <td >LDH</td>
                          <td> <input
                          type="number" min="1"/></td>
                          <td>U/L</td>
                          <td>1-1500</td>
                          </tr>
                          <tr>
                          <th scope="row">6</th>
                          <td >IL6</td>
                          <td> <input
                          type="number" min="1" /></td>
                          <td>pg/ml</td>
                          <td>1-50</td>
                          </tr>
                          <tr>
                          <th scope="row">7</th>
                          <td >Lymphocyte Percentage</td>
                          <td> <input
                          type="number" min="1" /></td>
                          <td>%</td>
                          <td>1-100</td>
                          </tr>
                          <tr>
                          <th scope="row">8</th>
                          <td > Neutrophil Percentage</td>
                          <td> <input
                          type="number" min="1" /></td>
                          <td>%</td>
                          <td>1-100</td>
                          </tr>
                          <tr>
                          <th scope="row">9</th>
                          <td >Direct Bilirubin</td>
                          <td> <input
                          type="number" min="1" /></td>
                          <td>mg/dL</td>
                          <td>1-50</td>
                          </tr>
                          <tr>
                          <th scope="row">10</th>
                          <td >Body Temperature</td>
                          <td> <input
                          type="number" min="1" /></td>
                          <td>°C</td>
                          <td>-</td>
                          </tr>
                          <tr>
                          <th scope="row">11</th>
                          <td >SPO2 Value</td>
                          <td> <input
                          type="number" min="1" /></td>
                          <td>-</td>
                          <td>-</td>
                          </tr>
                          <tr>
                          <th scope="row">12</th>
                          <td >BP</td>
                          <td> <input
                          type="number" min="1" /></td>
                          <td>mmHg</td>
                          <td>-</td>
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

export default Dashboard;
