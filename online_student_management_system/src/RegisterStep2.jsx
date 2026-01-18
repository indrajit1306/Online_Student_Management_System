import React from 'react';
import { School, Calendar, Star, LayoutDashboard, Check, ArrowLeft, ChevronRight } from 'lucide-react';

const RegisterStep2 = ({ formData, handleChange, nextStep, prevStep }) => {

    const renderProgressBar = () => {
        let percent = '50%';
        let text = "Step 2: Academic Background";
        let prevText = "PREVIOUS: PERSONAL INFO";
        let nextText = "NEXT: DOCUMENTS";

        return (
            <div className="progress-section">
                <div className="progress-info">
                    <div className="step-indicator">
                        <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}>
                            <div style={{ background: '#10b981', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Check size={14} color="white" />
                            </div>
                            {text}
                        </span>
                    </div>
                    <span className="progress-percentage">50% Complete</span>
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
        <div className="register-form">
            {renderProgressBar()}

            <div className="step-header-row">
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#1e293b', marginBottom: '0.5rem' }}>Academic Background</h1>
                    <p style={{ color: '#64748b' }}>Provide details about your previous educational qualifications.</p>
                </div>
                <button className="dashboard-btn-small">
                    <LayoutDashboard size={16} />
                    Dashboard
                </button>
            </div>

            <div className="form-group full-width" style={{ marginTop: '2rem' }}>
                <label>Previous School/College Name</label>
                <div className="input-with-icon">
                    <School size={18} className="field-icon-left" />
                    <input
                        type="text"
                        name="schoolName"
                        placeholder="e.g. Westside High School or City College"
                        value={formData.schoolName}
                        onChange={handleChange}
                        style={{ paddingLeft: '3rem' }}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group half-width">
                    <label>Last Qualification Obtained</label>
                    <select name="qualification" value={formData.qualification} onChange={handleChange}>
                        <option value="">Select qualification</option>
                        <option value="high_school">High School Diploma</option>
                        <option value="bachelors">Bachelor's Degree</option>
                        <option value="associate">Associate Degree</option>
                    </select>
                </div>
                <div className="form-group half-width">
                    <label>Year of Passing</label>
                    <div className="input-with-icon">
                        <Calendar size={18} className="field-icon-left" />
                        <input
                            type="text"
                            name="passingYear"
                            placeholder="YYYY"
                            value={formData.passingYear}
                            onChange={handleChange}
                            style={{ paddingLeft: '3rem' }}
                        />
                    </div>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group half-width">
                    <label>Grade/Percentage</label>
                    <div className="input-with-icon">
                        <Star size={18} className="field-icon-left" />
                        <input
                            type="text"
                            name="grade"
                            placeholder="e.g. 3.8 GPA or 85%"
                            value={formData.grade}
                            onChange={handleChange}
                            style={{ paddingLeft: '3rem' }}
                        />
                    </div>
                </div>
                <div className="form-group half-width">
                    <label>Major/Specialization</label>
                    <select name="major" value={formData.major} onChange={handleChange}>
                        <option value="">Select Major</option>
                        <option value="science">Science</option>
                        <option value="arts">Arts</option>
                        <option value="commerce">Commerce</option>
                        <option value="cs">Computer Science</option>
                    </select>
                </div>
            </div>

            <div className="form-actions-footer">
                <button type="button" className="back-btn-gray" onClick={prevStep}>
                    <ArrowLeft size={16} />
                    Back
                </button>
                <button type="button" className="continue-btn" onClick={nextStep}>
                    Save & Next
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default RegisterStep2;
