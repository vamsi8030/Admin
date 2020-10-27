import React, {useState} from 'react';
import axios from 'axios';
import './Style.css';
import {Link} from 'react-router-dom';
import {FaRegEdit} from 'react-icons/fa';
import {ImUserCheck} from 'react-icons/im';
import {FaListAlt} from 'react-icons/fa';
import {TiLocation} from 'react-icons/ti';
import {FaSearchLocation} from 'react-icons/fa';
import {DiGoogleAnalytics} from 'react-icons/di';
import {BiMinusFront} from 'react-icons/bi';
import {BiMinusBack} from 'react-icons/bi';
import {GrStackOverflow} from 'react-icons/gr';
import {GiArtificialIntelligence} from 'react-icons/gi';
import {MdDeveloperBoard} from 'react-icons/md';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaWhatsappSquare} from 'react-icons/fa';
import {MdContactMail} from 'react-icons/md';
import {RiArrowGoBackFill} from 'react-icons/ri';
import {useHistory} from "react-router-dom";

const JobRegister = () => {
    let history = useHistory();
    const [joblisting,setUser] = useState({
        designation:"",
        status:"",
        location:"",
        datepost:"",
        recruiter_name:"",
        recruiter__position:"",
        company:"",
        description:"",
        proposal:""
    });
    const {datepost,recruiter_name,recruiter_position,company,description,proposal} = joblisting;
    const onInputChange = e =>{
        setUser({...joblisting,[e.target.name] : e.target.value})
    };
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3003/joblisting",joblisting);
        history.push("/JobListing");
    };
    return (
        <div className="App">
            <section className="p-3 bg-teal">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">
                            <button className="btn btn-outline-dark btn-block">
                                <Link className="nav-link text-white" to="/Register"><FaRegEdit />Registration</Link>
                            </button>
                        </div>
            
                        <div className="col-md-4">
                            <button className="btn btn-outline-dark btn-block">
                                <Link className="nav-link text-white" to="/TopQualified"><ImUserCheck />Top Qualified</Link>
                            </button>
                        </div>

                        <div className="col-md-4">
                            <button className="btn btn-outline-dark btn-block">
                                <Link className="nav-link text-white" to="/JobListing"><FaListAlt />Job Listing</Link>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            
            <section className="p-3">
                <div className="container">
                    <div className="row">

                        <div className="col-md-9">
                            <div className="card">
                                <div className="card-header bg-secondary text-white text-center">
                                    <div className="row">
                                        <h3 className="col-md-11 text-center">New Job Details</h3>
                                        <Link className="col-md-1 btn btn-center btn-secondary btn-sm-2" to="/JobListing"><RiArrowGoBackFill /></Link>
                                    </div>
                                </div>
                                <div className="card-body bg-light">
                                    <form onSubmit={e => onSubmit(e)}>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Designation</label>
                                            <div className="col-sm-8">
                                                <select className="form-control form-control-lg" name="designation" onChange = {e => onInputChange(e)}>
                                                    <option>--Select Designation--</option>
                                                    <option value="Electric Design Engineer">Electric Design Engineer</option>
                                                    <option value="Software Engineer">Software Engineer</option>
                                                    <option value="Data Science">Data Science</option>
                                                    <option value="Business Intelligent Consultant">Business Intelligent Consultant</option>
                                                    <option value="Web Developer">Web Developer</option>
                                                    <option value="Database Co-Ordinator">Database Co-Ordinator</option>
                                                    <option value="Front End Developer">Front End Developer</option>
                                                    <option value="Back End Developer">Back End Developer</option>
                                                    <option value="Embedded Systems">Embedded Systems</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Status</label>
                                            <div className="col-sm-8">
                                                <select className="form-control form-control-lg" placeholder="Select Status" name="status" onChange = {e => onInputChange(e)}>
                                                    <option>--Select Status--</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                    <option value="Recently Added">Recently Added</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Location</label>
                                            <div className="col-sm-8">
                                                <select className="form-control form-control-lg" name="location" onChange = {e => onInputChange(e)}>
                                                    <option>--Select Location--</option>
                                                    <option value="Bangalore">Bangalore</option>
                                                    <option value="Chennai">Chennai</option>
                                                    <option value="Delhi">Delhi</option>
                                                    <option value="Kerala">Kerala</option>
                                                    <option value="Mumbai">Mumbai</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Date of Post</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control form-control-lg" name="datepost" value={datepost} onChange = {e => onInputChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Recruiter Name</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control form-control-lg" name="recruiter_name" value={recruiter_name} onChange = {e => onInputChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Recruiter Designation</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control form-control-lg" name="recruiter_position" value={recruiter_position} onChange = {e => onInputChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Recruiter Company</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control form-control-lg" name="company" value={company} onChange = {e => onInputChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Company Description</label>
                                            <div className="col-sm-8">
                                                <textarea rows="4" cols="50" className="form-control form-control-lg" name="description" value={description} onChange = {e => onInputChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Company Proposal</label>
                                            <div className="col-sm-8">
                                                <textarea rows="2" cols="50" className="form-control form-control-lg" name="proposal" value={proposal} onChange = {e => onInputChange(e)} />
                                            </div>
                                        </div>
                                        <button className="btn btn-center btn-primary btn-sm-2">Add Details</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <div className="row-align-items-center">
                                        <div className="col">
                                            <Link className="nav-link text-white" to="#"><TiLocation />Bangalore</Link>
                                            <Link className="nav-link text-white" to="#"><TiLocation />Chennai</Link>
                                            <Link className="nav-link text-white" to="#"><TiLocation />Kerala</Link>
                                            <Link className="nav-link text-white" to="#"><TiLocation />Delhi</Link>
                                            <Link className="nav-link text-white" to="#"><TiLocation />Mumbai</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-light">
                                    <Link className="nav-link text-primary" to="#"><FaSearchLocation />Jobs By Location</Link>
                                </div>                            
                            </div>

                            <div className="card mt-4">
                                <div className="card-header bg-success text-white">
                                    <div className="row-align-items-center">
                                        <div className="col">
                                            <Link className="nav-link text-white" to="#"><DiGoogleAnalytics />Data Analyst</Link>
                                            <Link className="nav-link text-white" to="#"><BiMinusFront />Front End</Link>
                                            <Link className="nav-link text-white" to="#"><BiMinusBack />Back End</Link>
                                            <Link className="nav-link text-white" to="#"><GrStackOverflow />Full Stack</Link>
                                            <Link className="nav-link text-white" to="#"><GiArtificialIntelligence />AI and ML</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-light">
                                    <Link className="nav-link text-primary" to="#"><MdDeveloperBoard />Popular Searches</Link>
                                </div>                            
                            </div>

                            <div className="card mt-4">
                                <div className="card-header bg-warning text-white">
                                    <div className="row-align-items-center">
                                        <div className="col">
                                            <Link className="nav-link text-white" to="#"><FaFacebookSquare />Facebook</Link>
                                            <Link className="nav-link text-white" to="#"><FaLinkedin />LinkedIn</Link>
                                            <Link className="nav-link text-white" to="#"><FaTwitterSquare />Twitter</Link>
                                            <Link className="nav-link text-white" to="#"><FaInstagramSquare />Instagram</Link>
                                            <Link className="nav-link text-white" to="#"><FaWhatsappSquare />Whatsapp</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-light">
                                    <Link className="nav-link text-primary" to="#"><MdContactMail />Contact Through</Link>
                                </div>                            
                            </div>                            
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default JobRegister;