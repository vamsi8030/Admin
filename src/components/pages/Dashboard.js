import React from 'react';
import './Style.css';
import './shadow.css';
import {Link} from 'react-router-dom';
import {TiGlobeOutline} from "react-icons/ti";
import {FaChartArea} from "react-icons/fa";
import {FaThList} from "react-icons/fa";
import {FaUserCircle} from "react-icons/fa"
import {BsBlockquoteLeft} from "react-icons/bs";
import {GoSignOut} from "react-icons/go";
import {FaUserTie} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {RiUserSearchFill} from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <i className="navbar-brand text-warning">
            <TiGlobeOutline />CHAKURI
          </i>
          
          <button className="navbar-toggler" data-toggle="collapse" data-target="#ui-navbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="ui-navbar">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link className="nav-link" to="/"><FaChartArea />Dashboard</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#"><FaThList />Job Search</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#"><BsBlockquoteLeft />About Us</Link>
              </li>

            </ul>

            <ul className="navbar-nav ml-auto">

              <li className="nav-item">
                <Link className="nav-link" to="#"><FaUserCircle />Admin</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#"><GoSignOut />Sign Out</Link>
              </li>

            </ul>

          </div>

        </div>
      </nav>

      <section className="p-3 bg-light">
        <div className="container">
          <div className="row">
            
            <div className="col-md-4">
              <button className="btn btn-primary btn-block">
                <Link className="nav-link text-white" to="/Profile"><FaUser />Profile Management</Link>
              </button>
            </div>
            
            <div className="col-md-4">
              <button className="btn btn-success btn-block">
                <Link className="nav-link text-white" to="/Employer"><FaUserTie />Employer Management</Link>
              </button>
            </div>

            <div className="col-md-4">
              <button className="btn btn-warning btn-block">
                <Link className="nav-link text-white" to="/Jobseeker"><RiUserSearchFill />Jobseeker Management</Link>
              </button>
            </div>

          </div>
        </div>
      </section>
      
      <div className="box bg-dark">

      </div>

    </div>
  );
};

export default Dashboard;
