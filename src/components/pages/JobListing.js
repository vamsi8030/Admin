import React from 'react';
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
import JobData from './Jobdata';

const JobListing = () => {
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
                                    <h3>JobListing</h3>
                                </div>
                                <div className="card-body bg-light">
                                    <JobData />
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

export default JobListing;