import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye, FaSearch } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const TopQualifiedTable = () => {
    const [users,setUser] = useState([]);
    const [input, setInput] = useState("");
    useEffect(() => {loadUsers();},[]);
    const loadUsers = async() => {
        const result = await axios.get("http://localhost:3003/employee");
        setUser(result.data);
    };
    const filteredList = users.filter(list  => {
        return list.name.toLowerCase().includes(input.toLowerCase())
    });
    const deleteEmployee = async id => {
         await axios.delete(`http://localhost:3003/employee/${id}`);
         loadUsers();
    }
    return (
        <div className="App">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><FaSearch /></span>
                    <input type="text" onChange={e => setInput(e.target.value)} style={{width:"620px"}}  className="form-control" placeholder="Search by Name" />
                    <button type="button" class="btn bg-dark btn-sm"><Link to="/Register">Add Employee</Link></button>
                </div>
            </div>
            <div className="py-4">
                <table className="table table-hover text-center text-dark border shadow">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Sl.No</th>
                            <th>Employee Name</th>
                            <th>Designation</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredList.map((user,index) => (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.company}</td>
                                    <td>{user.location}</td>
                                    <td>
                                        <Link className="btn btn-primary btn-sm mr-2"><FaEye /></Link>
                                        <Link to={`/UpdateEmployee/${user.id}`} className="btn btn-success btn-sm mr-2"><FaEdit /></Link>
                                        <Link onClick={() => deleteEmployee(user.id)} className="btn btn-warning btn-sm"><MdDelete /></Link>
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

export default TopQualifiedTable;