import React, { useState } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const RegisterEmployee = () => {
    let history = useHistory();
    const [employee,setUser] = useState({
        name:"",
        designation:"",
        company:"",
        location:""
    });
    const {name,designation,company,location} = employee;
    const onInputChange = e =>{
        setUser({...employee,[e.target.name] : e.target.value})
    };
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3003/employee",employee);
        history.push("/Employer");
    };
    return(
        <div className="App">
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Employee name" name="name" value={name} onChange = {e => onInputChange(e)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Designation</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Employee designation" name="designation" value={designation} onChange = {e => onInputChange(e)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Company</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Employee Company" name="company" value={company} onChange = {e => onInputChange(e)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Location</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Employee Location" name="location" value={location} onChange = {e => onInputChange(e)} />
                    </div>
                </div>
                <button className="btn btn-center btn-primary btn-sm-2">Add Details</button>
            </form>
        </div>
    );
};

export default RegisterEmployee;