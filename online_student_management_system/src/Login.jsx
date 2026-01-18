import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, GraduationCap, ShieldCheck } from 'lucide-react';
import './Login.css';

const Login = ({ onNavigate }) => {
    const [userType, setUserType] = useState('student');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { ...formData, userType }, { rememberMe });

        if (userType === 'admin') {
            onNavigate('adminDashboard');
        } else {
            // Placeholder for other logins 
            // set error or navigate elsewhere
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="login-container">
            <div className="login-wrapper">
                {/* Left Side - Visual */}
                <div className="login-visual">
                    <div className="visual-content">
                        <div className="logo-section">
                            <GraduationCap size={48} color="white" />
                            <h1>EduAdmin Pro</h1>
                        </div>
                        <div className="visual-text">
                            <h2>Empowering the next generation of excellence.</h2>
                            <p>Access your student records, course materials, and administrative tools in one secure portal.</p>
                        </div>
                    </div>
                    <div className="visual-overlay"></div>
                    {/* We'll use a valid Unsplash ID for a university look */}
                    <img
                        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                        alt="University Campus"
                        className="visual-bg"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="login-form-section">
                    <div className="form-header">
                        <h2>
                            <GraduationCap size={36} style={{ color: 'var(--primary-color)' }} />
                            Portal Login
                        </h2>
                        <p className="welcome-text">Enter your credentials to access your dashboard</p>
                    </div>

                    <div className="user-type-switcher">
                        <button
                            type="button"
                            className={`type-btn ${userType === 'student' ? 'active' : ''}`}
                            onClick={() => setUserType('student')}
                        >
                            Student
                        </button>
                        <button
                            type="button"
                            className={`type-btn ${userType === 'faculty' ? 'active' : ''}`}
                            onClick={() => setUserType('faculty')}
                        >
                            Faculty
                        </button>
                        <button
                            type="button"
                            className={`type-btn ${userType === 'admin' ? 'active' : ''}`}
                            onClick={() => setUserType('admin')}
                        >
                            Admin
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="username">User ID / Email</label>
                            <div className="input-icon-wrapper">
                                <User size={20} className="input-icon" />
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your ID or email"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-icon-wrapper">
                                <Lock size={20} className="input-icon" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="form-actions">
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <span className="checkmark"></span>
                                Remember Me
                            </label>
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </div>

                        <button type="submit" className="login-button secure-btn">
                            <ShieldCheck size={20} />
                            Secure Login
                        </button>
                    </form>

                    <div className="form-footer">
                        {userType === 'student' && (
                            <p>Don't have an account yet? <button className="register-link" onClick={() => onNavigate('register')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', display: 'inline' }}>Register as a New Student</button></p>
                        )}
                        {userType === 'faculty' && (
                            <p>New Faculty? <button className="register-link" onClick={() => onNavigate('facultyRegister')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', display: 'inline' }}>Complete Registration</button></p>
                        )}
                        {userType === 'admin' && (
                            <p>Authorized personnel only. <button className="register-link" onClick={() => onNavigate('adminRegister')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', display: 'inline' }}>Create New Admin Account</button></p>
                        )}
                    </div>

                    <div className="secure-badge">
                        <ShieldCheck size={16} /> <span>256-BIT SSL ENCRYPTED CONNECTION</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
