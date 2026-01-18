import React from 'react';
import {
    LayoutDashboard, Users, GraduationCap, Settings, LogOut, ChevronRight,
    Edit3, MoreHorizontal, User, BookOpen, Calendar, DollarSign,
    Zap, FileText, Mail, AlertTriangle, Briefcase, MapPin, Phone, Globe, ArrowLeft,
    BarChart4
} from 'lucide-react';
import './StudentProfile.css';
import './AdminStudentDirectory.css'; // Re-using sidebar layout

const StudentProfile = ({ onNavigate, userData }) => {
    return (
        <div className="admin-directory-container">
            {/* Re-using the sidebar layout for consistency */}
            <aside className="directory-sidebar">
                <div className="sidebar-logo-area">
                    <div className="logo-icon-box">
                        <GraduationCap size={20} />
                    </div>
                    <div className="logo-text-col">
                        <span className="logo-main">EduManage</span>
                        <span className="logo-sub">Admin Portal</span>
                    </div>
                </div>

                <nav className="dir-nav">
                    <div className="dir-nav-item" onClick={() => onNavigate('adminDashboard')}>
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </div>
                    {/* Active state usually on 'Students' since this is a sub-page of students */}
                    <div className="dir-nav-item active" onClick={() => onNavigate('studentDirectory')}>
                        <Users size={20} />
                        <span>Students</span>
                    </div>
                    <div className="dir-nav-item">
                        <GraduationCap size={20} />
                        <span>Faculty</span>
                    </div>
                    <div className="dir-nav-item" onClick={() => onNavigate('courseManagement')}>
                        <BookOpen size={20} />
                        <span>Courses</span>
                    </div>
                    <div className="dir-nav-item">
                        <BarChart4 size={20} />
                        <span>Reports</span>
                    </div>

                    <div className="dir-nav-item" onClick={() => onNavigate('studentAttendance')}>
                        <Calendar size={20} />
                        <span>Attendance</span>
                    </div>

                </nav>

                <div className="dir-settings">
                    <div className="dir-nav-item">
                        <Settings size={20} />
                        <span>Settings</span>
                    </div>
                </div>
            </aside>

            {/* Main Profile Area */}
            <main className="profile-main-area">
                {/* Breadcrumbs */}
                <div className="profile-breadcrumbs">
                    <button className="back-btn-profile" onClick={() => onNavigate('studentDirectory')}>
                        <ArrowLeft size={16} /> Back to Directory
                    </button>
                    <div>
                        Students <span className="slash">/</span> <span>Student Profile</span>
                    </div>
                </div>

                <div className="profile-content-wrapper">
                    {/* Header Card */}
                    <div className="profile-header-card">
                        <div className="profile-identity">
                            <div className="profile-avatar-large">
                                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=80" alt="Student" />
                                <div className="online-indicator"></div>
                            </div>
                            <div className="profile-info-primary">
                                <h1>
                                    Johnathan Doe
                                    <span className="status-badge badge-active">Active</span>
                                </h1>
                                <div className="profile-meta-row">
                                    <div className="meta-icon-item">
                                        <Briefcase size={16} /> ID: STU-2024-0891
                                    </div>
                                    <div className="meta-icon-item">
                                        <GraduationCap size={16} /> B.Sc. Computer Science
                                    </div>
                                    <div className="meta-icon-item">
                                        <Calendar size={16} /> Year 2, Semester 4
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-actions">
                            <button className="btn-edit-profile">
                                <Edit3 size={16} /> Edit Profile
                            </button>
                            <button className="btn-actions-more">
                                <MoreHorizontal size={18} /> Actions
                            </button>
                        </div>
                    </div>

                    {/* Grid Layout */}
                    <div className="profile-grid">

                        {/* Left Column */}
                        <div className="left-column">
                            <div className="details-card">
                                <div className="tabs-header">
                                    <button className="tab-btn active">
                                        <User size={18} /> Personal Info
                                    </button>
                                    <button className="tab-btn">
                                        <BookOpen size={18} /> Academic Records
                                    </button>
                                    <button className="tab-btn">
                                        <Calendar size={18} /> Attendance
                                    </button>
                                    <button className="tab-btn">
                                        <DollarSign size={18} /> Fees
                                    </button>
                                </div>

                                <div className="details-content">
                                    <h3 className="section-title">Contact & Demographics</h3>
                                    <div className="info-grid">
                                        <div className="info-item">
                                            <label>Primary Email</label>
                                            <p>john.doe@university.edu</p>
                                        </div>
                                        <div className="info-item">
                                            <label>Phone Number</label>
                                            <p>+1 (555) 234-5678</p>
                                        </div>
                                        <div className="info-item">
                                            <label>Current Address</label>
                                            <p>452 College Hill Rd, Cambridge, MA 02138</p>
                                        </div>
                                        <div className="info-item">
                                            <label>Date of Birth</label>
                                            <p>October 12, 2004 (19 years)</p>
                                        </div>
                                        <div className="info-item">
                                            <label>Nationality</label>
                                            <p>United States</p>
                                        </div>
                                        <div className="info-item">
                                            <label>Gender</label>
                                            <p>Male</p>
                                        </div>
                                    </div>

                                    <h3 className="section-title">Emergency Contacts</h3>
                                    <div className="info-grid">
                                        <div className="info-item">
                                            <label>Primary Contact Name</label>
                                            <p>Jane Doe (Mother)</p>
                                        </div>
                                        <div className="info-item">
                                            <label>Contact Phone</label>
                                            <p>+1 (555) 987-6543</p>
                                        </div>
                                        <div className="info-item">
                                            <label>Secondary Contact Name</label>
                                            <p>Robert Doe (Father)</p>
                                        </div>
                                        <div className="info-item">
                                            <label>Secondary Phone</label>
                                            <p>+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="right-column">
                            {/* Quick Actions */}
                            <div className="quick-actions-card">
                                <div className="card-header-small">
                                    <Zap size={20} color="#2563eb" fill="#2563eb" />
                                    <h3>Quick Actions</h3>
                                </div>
                                <div className="action-list">
                                    <button className="qa-btn">
                                        <Edit3 size={18} className="qa-icon" /> Update Academic Profile
                                    </button>
                                    <button className="qa-btn">
                                        <FileText size={18} className="qa-icon" /> Generate Report Card
                                    </button>
                                    <button className="qa-btn">
                                        <Mail size={18} className="qa-icon" /> Send Message to Student
                                    </button>
                                    <button className="qa-btn danger">
                                        <AlertTriangle size={18} className="qa-icon" /> Log Disciplinary Action
                                    </button>
                                </div>
                            </div>

                            {/* Current Standing */}
                            <div className="standing-card">
                                <h3 className="section-title" style={{ marginBottom: '1rem' }}>Current Standing</h3>

                                <div className="stat-box-row sb-green">
                                    <span className="sb-label">Current GPA</span>
                                    <span className="sb-val">3.82</span>
                                </div>
                                <div className="stat-box-row sb-blue">
                                    <span className="sb-label">Attendance</span>
                                    <span className="sb-val">96.5%</span>
                                </div>
                                <div className="stat-box-row sb-orange">
                                    <span className="sb-label">Total Credits</span>
                                    <span className="sb-val">48</span>
                                </div>

                                <div className="enrolled-courses">
                                    <div className="enrolled-header">Enrolled Courses</div>
                                    <div className="course-item">
                                        <span className="course-code">CS201 Data Structures</span>
                                        <span className="course-sec">Sec A</span>
                                    </div>
                                    <div className="course-item">
                                        <span className="course-code">MAT302 Linear Algebra</span>
                                        <span className="course-sec">Sec B</span>
                                    </div>
                                    <div className="course-item">
                                        <span className="course-code">HIS101 Modern World</span>
                                        <span className="course-sec">Sec D</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentProfile;
