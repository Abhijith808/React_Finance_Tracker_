import axios from 'axios';

const userUrl="http://localhost:8080";


export const addUser= async (user)=>{
    return await axios.post(`${userUrl}`, user);
}

export const getUsers= async (id)=>{
    id=id || '';
    return await axios.get(`${userUrl}/${id}`);
}

export const deleteUser= async (id)=>{
    console.log(id)
    return await axios.delete(`${userUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${userUrl}/${id}`, user)
}