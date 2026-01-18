import React, { useState } from 'react';
import {
    Hexagon, User, ChevronDown, GraduationCap, Info, Code, ShieldCheck, Key,
    ArrowLeft, ArrowRight, Shield, Lock, Headphones, BookOpen
} from 'lucide-react';
import './FacultyRegister.css';

const FacultyRegister = ({ onNavigate }) => {
    return (
        <div className="faculty-register-container">
            {/* Header */}
            <header className="faculty-header">
                <div className="brand-logo">
                    <Hexagon size={24} className="brand-icon" fill="#0ea5e9" color="#0ea5e9" />
                    <span>EduManage OSMS</span>
                </div>
                <nav className="header-actions">
                    <a href="#" className="header-link">Home</a>
                    <a href="#" className="header-link">Help Center</a>
                    <a href="#" className="header-link">Support</a>
                    <button className="login-btn-header" onClick={() => onNavigate('login')}>Login</button>
                </nav>
            </header>

            {/* Main Content */}
            <main className="faculty-main">
                <div className="page-title-section">
                    <h1>Faculty Account Registration</h1>
                    <p>Complete your institutional profile to access the management portal. This is a secure area for academic personnel only.</p>
                </div>

                <div className="faculty-card">
                    {/* Progress Bar */}
                    <div className="progress-header">
                        <div className="step-info">
                            <div className="step-title">
                                <User size={20} className="brand-icon" />
                                <span>Basic Details</span>
                            </div>
                            <span className="step-badge">Step 1 of 3</span>
                        </div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{ width: '33%' }}></div>
                        </div>
                        <div className="next-step-hint">
                            <span>Next: Academic Specialization</span>
                            <div className="mini-indicators">
                                <div className="mini-dash active"></div>
                                <div className="mini-dash"></div>
                                <div className="mini-dash"></div>
                            </div>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <form className="faculty-form-grid" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group-fac">
                            <label className="form-label-fac">Faculty Name <span className="required-star">*</span></label>
                            <div className="input-wrapper-fac">
                                <User size={18} />
                                <input type="text" className="input-fac" placeholder="Enter your full name" />
                            </div>
                        </div>

                        <div className="form-group-fac">
                            <label className="form-label-fac">Department <span className="required-star">*</span></label>
                            <div className="input-wrapper-fac">
                                <BookOpen size={18} />
                                <select className="input-fac" style={{ appearance: 'none' }}>
                                    <option>Select Department</option>
                                    <option>Computer Science</option>
                                    <option>Mathematics</option>
                                    <option>Physics</option>
                                </select>
                                <ChevronDown size={16} style={{ left: 'auto', right: '1rem', color: '#94a3b8' }} />
                            </div>
                        </div>

                        <div className="form-group-fac">
                            <label className="form-label-fac">Designation</label>
                            <div className="input-wrapper-fac">
                                <GraduationCap size={18} />
                                <input type="text" className="input-fac" placeholder="e.g. Senior Professor, Lecturer" />
                            </div>
                        </div>

                        <div className="form-group-fac">
                            <label className="form-label-fac">Course Assignment Code <Info size={14} color="#64748b" style={{ display: 'inline', marginLeft: '4px', position: 'static' }} /></label>
                            <div className="input-wrapper-fac">
                                <Code size={18} />
                                <input type="text" className="input-fac" placeholder="SEM2024-FAC-01" />
                            </div>
                        </div>

                        <div className="verify-box">
                            <div className="verify-header">
                                <ShieldCheck size={20} className="verify-icon" />
                                <span className="verify-title">Institutional Verification</span>
                            </div>
                            <p className="verify-desc">Enter the unique invite code provided by your department administrator.</p>
                            <div className="input-wrapper-fac" style={{ backgroundColor: 'white', borderRadius: '0.5rem' }}>
                                <Key size={18} />
                                <input type="text" className="input-fac" placeholder="Enter Invite Code" style={{ backgroundColor: 'white' }} />
                            </div>
                        </div>

                        <div className="form-actions-fac full-width">
                            <button type="button" className="cancel-btn" onClick={() => onNavigate('login')}>
                                <ArrowLeft size={18} /> Cancel Registration
                            </button>
                            <button type="submit" className="next-btn">
                                Next Step <ArrowRight size={18} />
                            </button>
                        </div>
                    </form>

                    <div className="bottom-cta">
                        <p>Already have an account? <span className="login-link-fac" onClick={() => onNavigate('login')}>Login here</span></p>
                    </div>
                </div>

                <div className="page-footer-meta">
                    <div className="meta-item">
                        <Headphones size={14} /> Contact Admin Support
                    </div>
                    <div className="meta-item">
                        <Shield size={14} /> Data Encryption Active
                    </div>
                    <div className="meta-item">
                        <Lock size={14} /> Institutional Privacy Policy
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FacultyRegister;
