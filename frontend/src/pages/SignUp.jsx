import React, { useState } from 'react'
import toast from "react-hot-toast"
import apis from "../api/apis"
import httpAction from '../utils/httpAction'
import useProvideHooks from '../hooks/useProvideHooks'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [formData, setFormData] = useState({
        name:"",
        email : "",
        password: ""
    }); 
    const {navigate} = useProvideHooks(); 
    
    const handleChange = (e)=>{
        const name = e.target.name 
        const value = e.target.value
        setFormData({...formData, [name]:value}); 
    }

    const submitHandler = async (e) => {
        e.preventDefault(); 
        try {
            const data = {
                url: apis().registerUser, 
                method: "POST", 
                body: JSON.stringify(formData),
            };
    
            const result = await httpAction(data); 
            // console.log("API Response:", result);
    
            if (result?.status) {
                toast.success(result.message);
                navigate('/login')
            }
        } catch (error) {
            console.error("Signup Error:", error);
            toast.error(error);
        }

        setFormData({
            name:"",
            email:"",
            password:""
        })
    };
    
    return (
        <>
       <div id="container">
            <div id="card">
                <div id="card-content">
                    <h1>Sign Up</h1>
                    <form id="login-form" onSubmit={submitHandler}>
                        <div id="form-group-name">
                            <label htmlFor="name">Your name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div id="form-group-email">
                            <label htmlFor="email">Your email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="name@company.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div id="form-group-password">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                required
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" id="submit-button">
                            Sign Up
                        </button>
                        <p id="signup-link">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-blue-600 hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup
