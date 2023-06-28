import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';
const initialValue={
    name:"",
    position:"",
    office:"",
    salary:"",
}
const AddUser = () => {
    const[user,setUser]=useState(initialValue);
    const{name, position,office,salary}=user;
    let history=useHistory();

    const onValueChange=(e)=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
    }

    const addUserDetails= async ()=>{
        await addUser(user)
        history.push('/')
    }

    return (
    <div>
        <form>
            <h1>Add User</h1>
            <label>Name</label>
            <input onChange={(e)=>onValueChange(e)} name="name" value={name}/><br/>
            <label>Position</label>
            <input onChange={(e)=>onValueChange(e)} name="position" value={position}/><br/>
            <label>Office</label>
            <input onChange={(e)=>onValueChange(e)} name="office" value={office}/><br/>
            <label>Salary</label>
            <input onChange={(e)=>onValueChange(e)} name="salary" value={salary}/><br/>
            <Button variant="contained" onClick={()=>addUserDetails()} color='primary' type="button">Add</Button>
        </form>
    </div>
    )
}

export default AddUser;