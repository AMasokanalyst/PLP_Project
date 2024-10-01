
import React from 'react';
import { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const register = () => {
    const [values, setValues] = useState({
        fullname:'',
        email:'',
        password:''
    })

    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/register', values)
        .then(result => {
           if(result.data.registerStatus){
                navigate('/dashboard')
            }else{
                setError(result.data.Error)
            }
       })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
    <div className='p-3 rounded w-30 loginForm'>
        <div className="text-warning">
            {error && error}
        </div>
        <h2>Registration Page</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name"><strong>Fullname:</strong></label>
                <input type="text" name="name" autoComplete='off' placeholder='Enter Fullname' 
                onChange={(e) => setValues({...values, fullname : e.target.value})} className='form-control rounded-0'/>
            </div>

            <div className="mb-3">
                <label htmlFor="email"><strong>Email:</strong></label>
                <input type="email" name="email" autoComplete='off' placeholder='Enter Email' 
                onChange={(e) => setValues({...values, email : e.target.value})} className='form-control rounded-0'/>
            </div>
            <div className="mb-3">
                <label htmlFor="password"><strong>Password:</strong></label>
                <input type="password" name="password" placeholder="Enter Password" 
                onChange={(e) => setValues({...values, password : e.target.value})} className='form-control rounded-0'/>
            </div>
            <button className='btn btn-success w-100 rounded-0 mb-2'><strong>Register</strong></button>
            <div className="mb-3">
                <input type="checkbox" name="tick" id="tick" className="me-2" />
                <label htmlFor='tick'><strong> You agree with the terms & conditions</strong></label> 
            </div>
        </form>
    </div>
</div>
  )
}

export default register