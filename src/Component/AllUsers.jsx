import React, { useState, useEffect } from 'react';
import {getUsers,deleteUser} from '../Service/api';
import { Link } from 'react-router-dom';


const AllUsers = () => {
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        getAllUsers();
    },[])

const getAllUsers=async()=>{
    console.log("Get")
    let response= await getUsers();
    setUsers(response.data);
}

const deleteUserData = async (id) =>{
    await deleteUser(id);
    getAllUsers();
}
const editUserData = async (id) =>{
    await deleteUser(id);
    getAllUsers();
}
    return (
        <table border="5">
            <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Salary</th>
                    <th colspan="2">Action</th>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.office}</td>
                        <td>{user.salary}</td>
                        <td>
                        <Link to={`/edit/${user._id}`}><button type="button">Edit</button></Link>
                        <button onClick={()=>{deleteUserData(user._id)}}>Delete</button>
                        </td>
                    </tr>
             ))}
            </tbody>
        </table>
    )
}

export default AllUsers;