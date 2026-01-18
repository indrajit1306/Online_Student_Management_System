import React, { useState } from 'react';
import {
    LayoutDashboard, Users, GraduationCap, Settings, BookOpen, BarChart4,
    Calendar, Search, Bell, Plus, Filter, Download, Edit2, Eye,
    HelpCircle, ChevronLeft, ChevronRight, Calculator, Globe, Monitor, LogOut
} from 'lucide-react';
import './CourseManagement.css';
import './AdminStudentDirectory.css'; // For shared sidebar styles

const CourseManagement = ({ onNavigate, userData }) => {
    const [activeTab, setActiveTab] = useState('All Departments');
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const courses = [
        {
            title: "Introduction to Computer Science",
            code: "CS101",
            dept: "Computer Science",
            deptType: "dept-cs",
            faculty: "Dr. Emily Watson",
            facultyImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
            students: 120,
            status: "Active"
        },
        {
            title: "Advanced Calculus II",
            code: "MATH302",
            dept: "Mathematics",
            deptType: "dept-math",
            faculty: "Prof. Alan Turing",
            facultyImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
            students: 45,
            status: "Active"
        },
        {
            title: "Principles of Economics",
            code: "ECON101",
            dept: "Business",
            deptType: "dept-bus",
            faculty: "Dr. Sarah Keynes",
            facultyImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60",
            students: 88,
            status: "Inactive"
        },
        {
            title: "Software Engineering I",
            code: "CS205",
            dept: "Computer Science",
            deptType: "dept-cs",
            faculty: "Prof. James Gosling",
            facultyImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
            students: 64,
            status: "Active"
        }
    ];

    return (
        <div className="course-management-container">
            {/* Sidebar (Consistent Deep Blue) */}
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
                        <span>Overview</span>
                    </div>
                    <div className="dir-nav-item" onClick={() => onNavigate('studentDirectory')}>
                        <Users size={20} />
                        <span>Students</span>
                    </div>
                    <div className="dir-nav-item">
                        <GraduationCap size={20} />
                        <span>Faculty</span>
                    </div>
                    <div className="dir-nav-item active">
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
                    <div className="dir-nav-item">
                        <Settings size={20} />
                        <span>Settings</span>
                    </div>
                </nav>

                <div style={{ padding: '1.5rem', marginTop: 'auto' }}>
                    <button className="sidebar-support-btn" style={{ width: '100%', margin: 0 }}>
                        <HelpCircle size={18} /> Support
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="course-main-area">
                {/* Header */}
                <header className="cm-header">
                    <div className="cm-title">Course Management</div>
                    <div className="cm-header-right">
                        <div className="global-search">
                            <Search size={18} />
                            <input type="text" placeholder="Global Search..." />
                        </div>
                        <button className="icon-btn-notification">
                            <Bell size={20} />
                            <div className="notification-dot"></div>
                        </button>
                        <div className="user-profile-mini" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                            <div className="user-text">
                                <span className="user-name">{userData?.name || 'Admin User'}</span>
                                <span className="user-role">{userData?.role || 'System Admin'}</span>
                            </div>
                            <div className="user-avatar-circle">
                                <span style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#64748b' }}>
                                    {userData?.name ? userData.name.charAt(0) : 'A'}
                                </span>
                            </div>

                            {/* Dropdown Menu */}
                            {showProfileMenu && (
                                <div className="profile-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                    <div className="dropdown-header">
                                        <div className="dropdown-avatar-large">
                                            {onNavigate.userData?.name ? onNavigate.userData.name.charAt(0) : (userData?.name ? userData.name.charAt(0) : 'A')}
                                        </div>
                                        <span className="dropdown-name">{onNavigate.userData?.name || userData?.name || 'Admin User'}</span>
                                        <span className="dropdown-role">{onNavigate.userData?.role || userData?.role || 'System Admin'}</span>
                                    </div>
                                    <div className="dropdown-info-list">
                                        <div className="info-row">
                                            <span style={{ fontWeight: 600 }}>ID:</span> {userData?.id || 'ADM-001-X'}
                                        </div>
                                        <div className="info-row">
                                            <span style={{ fontWeight: 600 }}>Email:</span> {userData?.email || 'admin@edu.com'}
                                        </div>
                                        <div className="info-row">
                                            <span style={{ fontWeight: 600 }}>Dept:</span> {userData?.department || 'Administration'}
                                        </div>
                                    </div>
                                    <div className="dropdown-footer">
                                        <button className="dropdown-logout-btn" onClick={() => onNavigate('login')}>
                                            <LogOut size={16} /> Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="cm-content">
                    <div className="cm-page-header">
                        <div className="cm-page-title">
                            <h1>Academic Courses</h1>
                            <p>Manage and oversee all active institution courses and curriculums</p>
                        </div>
                        <button className="btn-add-course">
                            <Plus size={18} /> Add New Course
                        </button>
                    </div>

                    <div className="cm-toolbar">
                        <div className="toolbar-top">
                            <div className="search-course-input">
                                <Search size={18} />
                                <input type="text" placeholder="Search by course name or code..." />
                            </div>
                            <button className="btn-filter">
                                <Filter size={16} /> Filters
                            </button>
                            <button className="btn-export-cm">
                                <Download size={16} /> Export
                            </button>
                        </div>
                        <div className="tag-list">
                            {['All Departments', 'Computer Science', 'Mathematics', 'Business', 'Engineering'].map(tag => (
                                <div
                                    key={tag}
                                    className={`tag-pill ${activeTab === tag ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tag)}
                                >
                                    {tag} {tag === 'All Departments' && 'x'}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="course-table-wrapper">
                        <table className="course-table">
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Department</th>
                                    <th>Assigned Faculty</th>
                                    <th>Students</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course, idx) => (
                                    <tr key={idx} className="course-row">
                                        <td>
                                            <div className="course-info">
                                                <h4>{course.title}</h4>
                                                <div className="course-code-text">{course.code}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`dept-badge ${course.deptType}`}>
                                                {course.dept}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="faculty-info">
                                                <img src={course.facultyImg} alt="" className="faculty-avatar" />
                                                <span className="faculty-name">{course.faculty}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="student-count">{course.students}</div>
                                        </td>
                                        <td>
                                            <span className={`status-badge-course ${course.status === 'Active' ? 'status-active' : 'status-inactive'}`}>
                                                <span className={course.status === 'Active' ? 'dot-active' : 'dot-inactive'}></span>
                                                {course.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="action-btns">
                                                <Edit2 size={18} color="#64748b" style={{ cursor: 'pointer' }} />
                                                <Eye size={18} color="#2563eb" style={{ cursor: 'pointer' }} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="cm-pagination-footer">
                            <span className="page-info" style={{ color: '#64748b', fontSize: '0.9rem' }}>Showing 4 of 24 courses</span>
                            <div className="page-controls" style={{ display: 'flex', gap: '0.5rem' }}>
                                <button className="page-btn"><ChevronLeft size={16} /></button>
                                <button className="page-btn active">1</button>
                                <button className="page-btn">2</button>
                                <button className="page-btn">3</button>
                                <button className="page-btn"><ChevronRight size={16} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseManagement;
