import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';

const Jobdata = () => {
    const [users,setUser] = useState([]);
    const [input, setInput] = useState("");
    useEffect(() => {loadUsers();},[]);
    const loadUsers = async() => {
        const result = await axios.get("http://localhost:3003/joblisting");
        setUser(result.data);
    };
    const filteredList = users.filter(list  => {
        return list.designation.toLowerCase().includes(input.toLowerCase())
    });
    
    return (
        <div className="container">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><FaSearch /></span>
                    <input type="text" onChange={e => setInput(e.target.value)} style={{width:"640px"}}  className="form-control" placeholder="Ex: Machine Learning, Fullstack Developer, C++, etc..." />
                    <button type="button" class="btn bg-dark btn-sm"><Link to="/JobRegister">Add Job</Link></button>
                </div>
            </div>
           
            <div className="py-4">
                <table className="table table-hover text-center text-dark border shadow">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Sl.No</th>
                            <th>Position</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Posted</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredList.map((user,index) => (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.designation}</td>
                                    <td>{user.company}</td>
                                    <td>{user.location}</td>
                                    <td>{user.datepost}</td>
                                    <td>{ (() => {
                                            switch (user.status) {
                                                case "Active": return <p className="text-success">Active</p>;
                                                case "Inactive": return <p className="text-danger">Inactive</p>;
                                                case "Recently Added": return <p className="text-warning">Recently Added</p>;
                                                default : return <p>Unknown</p>
                                            }
                                        }) ()}
                                    </td>
                                    <td>
                                        <Link to={`/Edit/${user.id}`} className="btn btn-outline-dark btn-sm">Qualifier</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Jobdata;