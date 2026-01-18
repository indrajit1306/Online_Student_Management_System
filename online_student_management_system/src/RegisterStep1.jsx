import React from 'react';
import { User, Calendar, ArrowLeft, ChevronRight, Check } from 'lucide-react';

const RegisterStep1 = ({ formData, handleChange, onNavigate, nextStep, step }) => {

    // Moved helper logic inside or keep simple markup
    const renderProgressBar = () => {
        // Step 1 specific progress
        let percent = '33%';
        let text = "Step 1 of 3: Personal Information";
        let prevText = "CURRENT: PERSONAL";
        let nextText = "NEXT: ACADEMIC BACKGROUND";

        return (
            <div className="progress-section">
                <div className="progress-info">
                    <div className="step-indicator">
                        <User size={18} className="step-icon" />
                        <span>{text}</span>
                    </div>
                    <span className="progress-percentage">33% Complete</span>
                </div>
                <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: percent }}></div>
                </div>
                <div className="progress-labels">
                    <span>{prevText}</span>
                    <span>{nextText}</span>
                </div>
            </div>
        );
    };

    return (
        <form className="register-form">
            <div className="card-custom-header">
                <h1>New Student Registration</h1>
                <p>Please complete the enrollment process to join our institution.</p>
            </div>

            {renderProgressBar()}

            <h3 className="form-section-title">Personal Details</h3>

            <div className="form-group full-width">
                <label>Full Legal Name</label>
                <input
                    type="text"
                    name="fullName"
                    placeholder="e.g. John Alexander Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                />
            </div>

            <div className="form-row">
                <div className="form-group half-width">
                    <label>Date of Birth</label>
                    <div className="input-with-icon">
                        <input
                            type="text"
                            name="dob"
                            placeholder="mm/dd/yyyy"
                            onFocus={(e) => e.target.type = 'date'}
                            onBlur={(e) => e.target.type = 'text'}
                            value={formData.dob}
                            onChange={handleChange}
                        />
                        <Calendar size={18} className="field-icon" />
                    </div>
                </div>
                <div className="form-group half-width">
                    <label>Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div className="form-group full-width">
                <label>Contact Number</label>
                <div className="input-with-icon">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-group full-width">
                <label>Residential Address</label>
                <textarea
                    name="address"
                    placeholder="Street name, City, State, Zip Code"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="form-actions-footer">
                <button type="button" className="back-btn" onClick={() => onNavigate('login')}>
                    <ArrowLeft size={16} />
                    Back to Login
                </button>
                <button type="button" className="continue-btn" onClick={nextStep}>
                    Continue to Step 2
                    <ChevronRight size={16} />
                </button>
            </div>
        </form>
    );
};

export default RegisterStep1;
