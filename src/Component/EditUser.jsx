import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import{getUsers,editUser} from '../Service/api'
import { useHistory,useParams } from 'react-router-dom';
const initialValue={
    name:"",
    position:"",
    office:"",
    salary:"",
}
const EditUser = () => {
    const[user,setUser]=useState(initialValue);
    const{name, position,office,salary}=user;
    const {id}=useParams();
    let history=useHistory();

    useEffect(()=>{
        loadUserData();
    },[]);

    const loadUserData=async ()=>{
        const response= await getUsers(id)
        setUser(response.data);
    }

    const editUserDetails= async ()=>{
        const response= await editUser(id,user)
        history.push('/all');
    }

    const onValueChange=(e)=>{
        console.log(e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
    }

    return (
        <form>
            <h1>Edit Information</h1>
            
                <label>Name</label>
                <input name='name' onChange={(e)=>onValueChange(e)} value={name}/><br/>
           
                <label>Username</label>
                <input name='position' onChange={(e)=>onValueChange(e)} value={position}/><br/>
           
                <label>Email</label>
                <input name='office' onChange={(e)=>onValueChange(e)} value={office}/><br/>
            
                <label>Phone</label>
                <input name='salary' onChange={(e)=>onValueChange(e)} value={salary}/><br/>
           
                <Button variant="contained" color="primary" onClick={()=>editUserDetails()}>Edit User</Button>
      
        </form>
    )
}

export default EditUser;