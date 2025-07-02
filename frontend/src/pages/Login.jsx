import React, { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import apis from '../api/apis';
import httpAction from '../utils/httpAction';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Use useNavigate instead of useProvideHooks
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate(); // ✅ Corrected navigation hook
    const { setUserdata } = useContext(AuthContext); // ✅ Get context function

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const data = {
                url: apis().loginUser,
                method: 'POST',
                body: JSON.stringify(formData),
            };

            const result = await httpAction(data);
            console.log('API Response:', result);

            if (result?.status) {
                setUserdata(result.user); // ✅ Set user data in context
                navigate('/'); // ✅ Navigate to home page
                toast.success('User Logged In Successfully');
            } else {
                toast.error(result.message || 'Invalid credentials');
            }
        } catch (error) {
            console.error('Login Error:', error);
            toast.error(error.message || 'An error occurred during login');
        }

        setFormData({
            email: '',
            password: '',
        });
    };

    return (
        <div id="container">
            <div id="card">
                <div id="card-content">
                    <h1>Sign in to your account</h1>
                    <form id="login-form" onSubmit={submitHandler}>
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
                            Sign in
                        </button>
                        <p id="signup-link">
                            Don’t have an account yet?{' '}
                            <Link to="/signup" className="font-medium text-blue-600 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;