import React from 'react';
import { User, Check, CloudUpload, CreditCard, FileText, ArrowLeft } from 'lucide-react';

const RegisterStep3 = ({ prevStep }) => {
    return (
        <div className="register-form">
            {/* Step 3 Header with Tab-like progress bar */}
            <div className="step-tabs">
                <div className="step-tab completed">
                    <Check size={18} className="tab-icon-check" />
                    <span>Personal Info</span>
                </div>
                <div className="step-tab completed">
                    <Check size={18} className="tab-icon-check" />
                    <span>Academic Background</span>
                </div>
                <div className="step-tab active">
                    <CloudUpload size={18} className="tab-icon-cloud" />
                    <span>Document Upload</span>
                </div>
            </div>

            <div className="card-custom-header">
                <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#111827', marginBottom: '0.5rem' }}>Step 3: Document Upload</h1>
                <p style={{ color: '#6b7280' }}>Please upload clear scans of the required documents to finalize your registration.</p>
            </div>

            <div className="upload-section">
                <h3 className="upload-title">Profile Photo</h3>
                <div className="upload-container">
                    <div className="upload-icon-circle-cyan">
                        <User size={24} color="#06b6d4" />
                    </div>
                    <h4>Upload Student Portrait</h4>
                    <p>JPG or PNG. Max size: 2MB. Ensure face is clearly visible.</p>
                    <button className="upload-btn-cyan">Browse File</button>
                </div>

                <h3 className="upload-title">Identification Document</h3>
                <div className="upload-container">
                    <div className="upload-icon-circle-blue">
                        <CreditCard size={24} color="#3b82f6" />
                    </div>
                    <h4>Passport or National ID</h4>
                    <p>Front and back scan. PDF or JPG. Max 5MB.</p>
                    <button className="upload-link-blue">Click to Browse</button>
                </div>

                <h3 className="upload-title">Academic Certificates</h3>
                <div className="upload-container">
                    <div className="upload-icon-circle-blue">
                        <FileText size={24} color="#3b82f6" />
                    </div>
                    <h4>Educational Transcript & Diploma</h4>
                    <p>PDF format only. Combined single file preferred. Max 10MB.</p>
                    <button className="upload-link-blue">Click to Browse</button>
                </div>
            </div>

            <div className="terms-checkbox">
                <label className="checkbox-wrapper">
                    <input type="checkbox" />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-label"> I hereby certify that the information provided is true and accurate. I have read and agree to the <a href="#" className="link-cyan">Institution's Terms and Conditions</a> and <a href="#" className="link-cyan">Privacy Policy</a>.</span>
                </label>
            </div>

            <div className="form-actions-footer">
                <button type="button" className="back-btn-bordered" onClick={prevStep}>
                    <ArrowLeft size={16} />
                    Back
                </button>
                <button type="button" className="submit-btn-cyan">
                    Submit Application
                </button>
            </div>
        </div>
    );
};

export default RegisterStep3;
