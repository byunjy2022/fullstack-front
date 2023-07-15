import React, {useState,useEffect} from 'react';
import {Link,useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';

export default function EditUser(){
    let navigate = useNavigate();
    const [user, setUser]=useState({
        name:"",
        username:"",
        email:""
    });
    const{name,username,email}=user;

    const {id} = useParams();
    const onInputChanage = (e) =>{
        setUser({...user, [e.target.name]:e.target.value});
    };
    
    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8088/user/${id}`,user);
        navigate("/"); // goto Home
    }
    const loadUser=async()=>{
        const result = await axios.get(`http://localhost:8088/user/${id}`)
        setUser(result.data)
    }
    useEffect(()=>{
        loadUser()
    },[])


    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Name</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your name"
                        name="name" 
                        value={name}
                        onChange={(e)=>onInputChanage(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Username" className="form-label">Username</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your username"
                        name="username"
                        value={username}
                        onChange={(e)=>onInputChanage(e)}  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={(e)=>onInputChanage(e)} />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <Link className="btn btn-outline-danger" 
                    to={`/edituser/${user.id}`}>Cancel</Link>       
                </form>        
            </div>
        </div>

    </div>
    );
}