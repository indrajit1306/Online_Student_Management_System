import React, { useState } from 'react';
import { ShieldCheck, Lock, UserPlus, Info, CheckCircle, BarChart, Eye, EyeOff, Shield, Key } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import './AdminRegister.css';

const AdminRegister = ({ onNavigate, setUserData }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);

    // Form States
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('Information Technology');

    const calculateStrength = (pwd) => {
        let score = 0;
        if (!pwd) return 0;
        if (pwd.length > 6) score += 1;
        if (pwd.length > 10) score += 1;
        if (/[A-Z]/.test(pwd)) score += 1;
        if (/[0-9]/.test(pwd) || /[^A-Za-z0-9]/.test(pwd)) score += 1;

        // Cap at 4
        return Math.min(score, 4);
    };

    const handlePasswordChange = (e) => {
        const val = e.target.value;
        setPassword(val);
        setStrength(calculateStrength(val));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Save user data
        if (setUserData) {
            setUserData({
                name: fullName || 'Admin User',
                email: email || 'admin@edu.com',
                role: 'System Administrator',
                department: department
            });
        }
        onNavigate('adminDashboard');
    };

    const getStrengthColor = (score) => {
        switch (score) {
            case 1: return '#ef4444'; // Red
            case 2: return '#f59e0b'; // Amber
            case 3: return '#3b82f6'; // Blue
            case 4: return '#22c55e'; // Green
            default: return '#e2e8f0';
        }
    };

    const getStrengthLabel = (score) => {
        switch (score) {
            case 1: return 'Weak';
            case 2: return 'Fair';
            case 3: return 'Good';
            case 4: return 'Strong';
            default: return '';
        }
    };

    return (
        <div className="admin-register-container">
            {/* Sidebar Left */}
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <div className="logo-blue-bg">
                        <Shield size={24} />
                        <span>EduManage OSMS</span>
                    </div>

                    <div className="sidebar-title">
                        <div className="auth-badge">
                            <ShieldCheck size={28} color="white" />
                        </div>
                        <h1>Administrative Access Registration</h1>
                        <p className="sidebar-desc">
                            System administrator accounts require multi-layer verification. Please ensure you have your official ID and Invite Token ready.
                        </p>
                    </div>

                    <div className="responsibilities-section">
                        <h3>ADMINISTRATIVE RESPONSIBILITIES</h3>
                        <div className="responsibility-item">
                            <CheckCircle size={18} />
                            <span>Oversee role-based access control for faculty and staff.</span>
                        </div>
                        <div className="responsibility-item">
                            <Shield size={18} />
                            <span>Enforce security protocols and system-wide data compliance.</span>
                        </div>
                        <div className="responsibility-item">
                            <BarChart size={18} />
                            <span>Monitor institutional data integrity and system logs.</span>
                        </div>
                    </div>

                    <div className="security-protocols">
                        <h3>SECURITY PROTOCOLS</h3>
                        <div className="protocol-item">
                            <Shield size={16} /> <span>MFA Mandatory for all Admin</span>
                        </div>
                        <div className="protocol-item">
                            <Lock size={16} /> <span>FERPA & GDPR Compliance</span>
                        </div>
                    </div>
                </div>

                <div className="help-footer">
                    <div className="help-icon">
                        <Info size={20} />
                    </div>
                    <div className="help-text">
                        <h4>Need Help?</h4>
                        <a href="#">Contact System Support Desk</a>
                    </div>
                </div>
            </aside>

            {/* Main Form Area Right */}
            <main className="admin-form-area">
                <div className="top-bar-admin">
                    <a href="#" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem', fontWeight: 500 }}>Contact Support</a>
                    <a href="#" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem', fontWeight: 500 }}>Security Policy</a>
                    <button className="login-btn-nav" onClick={() => onNavigate('login')}>Login</button>
                </div>

                <div className="form-main-header">
                    <h1>Create Admin Account</h1>
                    <p>Enter your institutional credentials to gain system access.</p>
                </div>

                <form className="admin-form-grid" onSubmit={handleRegister}>
                    <div className="form-field">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Dr. Sarah Jenkins"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="form-field">
                        <label>Institutional Email</label>
                        <input
                            type="email"
                            placeholder="admin@university.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-field">
                        <label>Admin Employee ID <Info size={14} color="#64748b" /></label>
                        <input type="text" defaultValue="ADM-9988-X" />
                    </div>
                    <div className="form-field">
                        <label>Department</label>
                        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                            <option>Information Technology</option>
                            <option>Registrar's Office</option>
                            <option>Human Resources</option>
                        </select>
                    </div>

                    <div className="invite-section full-span">
                        <div className="invite-header">
                            <div className="invite-title">
                                <Key size={16} /> <span>Mandatory Invite Token</span>
                            </div>
                            <span className="security-level">SECURITY LEVEL: HIGH</span>
                        </div>
                        <div className="token-input-wrapper">
                            <input type="text" placeholder="Enter the 16-digit secure token" />
                            <Shield size={18} className="shield-icon-input" />
                        </div>
                        <p className="invite-note">
                            Invite tokens are issued by the Chief Technology Officer (CTO) and are valid for one-time use only.
                        </p>
                    </div>

                    <div className="form-field full-span password-row">
                        <label>Create Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••••••"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {password && (
                            <>
                                <div className="password-strength-bar">
                                    {[1, 2, 3, 4].map((level) => (
                                        <div
                                            key={level}
                                            className={`strength-segment ${strength >= level ? 'filled' : ''}`}
                                            style={{
                                                backgroundColor: strength >= level ? getStrengthColor(strength) : '#e2e8f0'
                                            }}
                                        ></div>
                                    ))}
                                </div>
                                <div className="strength-text">
                                    <span>Password Strength</span>
                                    <span
                                        className="strength-label"
                                        style={{ color: getStrengthColor(strength), fontWeight: 700 }}
                                    >
                                        {getStrengthLabel(strength)}
                                    </span>
                                </div>
                            </>
                        )}
                        <p style={{ fontSize: '0.75rem', color: '#94a3b8', fontStyle: 'italic', marginTop: '0.25rem' }}>Include uppercase, numbers, and symbols.</p>
                    </div>

                    <button type="submit" className="register-submit-btn full-span">
                        Register Admin Account <UserPlus size={18} />
                    </button>

                    <p className="below-btn-text full-span">
                        Already have an account? <a href="#" className="signin-link" onClick={() => onNavigate('login')}>Sign In</a>
                    </p>
                </form>
            </main>
        </div>
    );
};

export default AdminRegister;
