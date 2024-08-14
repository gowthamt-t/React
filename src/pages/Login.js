import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMethod, setLoginMethod] = useState('email');
    const [mobile, setMobile] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        return re.test(password);
    };

    const validateMobile = (mobile) => {
        const re = /^[0-9]{10}$/;
        return re.test(mobile);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (loginMethod === 'email') {
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
        } else {
            if (!validateMobile(mobile)) {
                alert('Please enter a valid 10-digit mobile number.');
                return;
            }
        }

        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long and include at least one number and one special character.');
            return;
        }

        // Prepare the login data
        const loginData = loginMethod === 'email' 
            ? { email, password }
            : { mobile, password };

        try {
            const response = await fetch('http://localhost:8080/api/login/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                if (loginMethod === 'email') {
                    navigate('/'); // Navigate to the home page
                } else if (loginMethod === 'mobile') {
                    navigate('/adminpage'); // Navigate to the admin page
                }
            } else {
                const errorText = await response.text();
                alert(`Error: ${errorText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Network error. Please try again later.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Login</h2>
                <div className="login-methods">
                    <button 
                        className={`login-method-btn ${loginMethod === 'email' ? 'active' : ''}`} 
                        onClick={() => setLoginMethod('email')}
                    >
                        User
                    </button>
                    <button 
                        className={`login-method-btn ${loginMethod === 'mobile' ? 'active' : ''}`} 
                        onClick={() => setLoginMethod('mobile')}
                    >
                        Admin
                    </button>
                </div>
                <form onSubmit={handleLogin}>
                    {loginMethod === 'email' ? (
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                    ) : (
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile</label>
                            <input 
                                type="tel" 
                                id="mobile" 
                                value={mobile} 
                                onChange={(e) => setMobile(e.target.value)} 
                                required 
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                <div className="login-footer">
                    <p>Don't have an account? <Link to="/register-page">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
