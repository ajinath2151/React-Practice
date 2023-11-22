import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import countryData from '../concept/CountryData.json';

const CountryWiseStateSelection = () => {

  const [countryId, setCountryId] = useState('');
  const [stateId, setStateId] = useState('');
  const [state, setState] = useState([]);

const handleCountry = (e)=>{
  const getCountryId = e.target.value;
  // console.log(getCountryId);
  const getStateData = countryData.find(country=>country.countryId===getCountryId).States;
  setState(getStateData)
}


  return (
    <div>
      <Container className="content">
        <div className="row">
          <div className="col-sm-12">
            <h3>Select country name and state name form json file</h3>

            <form action="" className="row g-3">
              <div className="col-md-3">
                <div className="text-dark">
                  <Form.Select
                    name="country"
                    className="form-control"
                    aria-label="Default select example"
                    onChange={(e)=>handleCountry(e)}
                  >
                    <option value="">Select Country</option>
                    {
                      countryData.map((getCountryItem,index)=>(
                        <option value={getCountryItem.countryId} key={index}>{getCountryItem.countryName}</option>
                      ))
                    }                    
                  </Form.Select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-dark">
                  <Form.Select
                    name="state"
                    className="form-control"
                    aria-label="Default select example"
                  >
                    <option value="">Select State</option>
                    {
                      state.map((getStateItem,index)=>(
                        <option value={getStateItem.stateId} key={index}>{getStateItem.stateName}</option>

                      ))
                    }                    
                  </Form.Select>
                </div>
              </div>
              <div className="col-md-2" style={{padding:'9px'}}></div>
              <label htmlFor="" className="form-label"></label>
              <div className="text-dark">
                <button name="submit" className="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountryWiseStateSelection;
