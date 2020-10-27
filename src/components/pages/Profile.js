import React from 'react';
import './Style.css';
import {FaUser} from 'react-icons/fa';
import {Link} from 'react-router-dom';
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

const Profile = () => {
  return (
    <div className="App">

      <section className="p-2 bg-teal text-white">
        <div className="container">
          <div className="row">
            <h1><FaUser />Profile</h1>
          </div>
        </div>
      </section>

      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header bg-secondary text-white text-center">
                  <h3>Profile Management</h3>
                </div>
                <div className="card-body bg-light">
                  
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

export default Profile;
