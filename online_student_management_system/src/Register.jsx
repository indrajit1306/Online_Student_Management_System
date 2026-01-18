import React, { useState } from 'react';
import { User, GraduationCap } from 'lucide-react';
import './Register.css';
import RegisterStep1 from './RegisterStep1';
import RegisterStep2 from './RegisterStep2';
import RegisterStep3 from './RegisterStep3';

const Register = ({ onNavigate }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        gender: '',
        phone: '',
        address: '',
        schoolName: '',
        qualification: '',
        passingYear: '',
        grade: '',
        major: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        setStep(step + 1);
        window.scrollTo(0, 0);
    };
    const prevStep = () => {
        setStep(step - 1);
        window.scrollTo(0, 0);
    };

    const renderHeader = () => (
        <header className="register-header">
            <div className="header-content">
                <div className="header-logo">
                    <GraduationCap size={28} className="text-primary" />
                    <span className="brand-name">EduManage OSMS</span>
                </div>
                <nav className="header-nav">
                    <a href="#" className="nav-link">Dashboard</a>
                    <a href="#" className="nav-link">Students</a>
                    <a href="#" className="nav-link">Admissions</a>
                    <a href="#" className="nav-link">Reports</a>
                    {step === 1 && <button className="portal-login-btn" onClick={() => onNavigate('login')}>Portal Login</button>}
                    <div className="user-avatar">
                        <User size={20} />
                    </div>
                </nav>
            </div>
        </header>
    );

    return (
        <div className="register-container">
            {renderHeader()}
            <main className="register-content">
                <div className="register-card">
                    {step === 1 && (
                        <RegisterStep1
                            formData={formData}
                            handleChange={handleChange}
                            onNavigate={onNavigate}
                            nextStep={nextStep}
                            step={step}
                        />
                    )}
                    {step === 2 && (
                        <RegisterStep2
                            formData={formData}
                            handleChange={handleChange}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        />
                    )}
                    {step === 3 && (
                        <RegisterStep3
                            prevStep={prevStep}
                        />
                    )}
                </div>

                <footer className="page-footer">
                    {step === 1 ?
                        <p>© 2024 EduManage System. All rights reserved. Professional Enrollment Management Module.</p> :
                        <p>Need help? Contact the admissions office at <a href="#" style={{ color: '#0ea5e9', textDecoration: 'none' }}>support@edumanage.edu</a></p>
                    }
                </footer>
            </main>
        </div>
    );
};

export default Register;
