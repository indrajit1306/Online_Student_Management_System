import React, { useState } from 'react';
import {
    LayoutDashboard, Users, GraduationCap, Settings, BookOpen, BarChart2,
    Search, Download, Plus, Eye, Edit2, MoreVertical, ChevronLeft, ChevronRight,
    Calendar1
} from 'lucide-react';
import './AdminStudentDirectory.css';

const AdminStudentDirectory = ({ onNavigate, userData }) => {
    // Mock Data
    const students = [
        {
            id: 'STU-2024-001',
            name: 'Marcus Thompson',
            email: 'm.thompson@university.edu',
            dept: 'Computer Science',
            gpa: '3.92',
            attendance: 98,
            status: 'Active',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60'
        },
        {
            id: 'STU-2024-042',
            name: 'Elena Rodriguez',
            email: 'e.rodriguez@university.edu',
            dept: 'Architecture',
            gpa: '3.75',
            attendance: 92,
            status: 'Active',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60'
        },
        {
            id: 'STU-2023-112',
            name: 'Jordan Smith',
            email: 'j.smith@university.edu',
            dept: 'Mechanical Eng.',
            gpa: '2.84',
            attendance: 74,
            status: 'Suspended',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60'
        },
        {
            id: 'STU-2024-008',
            name: 'Aria Chen',
            email: 'a.chen@university.edu',
            dept: 'Biochemistry',
            gpa: '4.00',
            attendance: 100,
            status: 'Active',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60'
        },
        {
            id: 'STU-2022-581',
            name: 'Kevin Wu',
            email: 'k.wu@university.edu',
            dept: 'Psychology',
            gpa: '3.12',
            attendance: 45,
            status: 'Inactive',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60'
        }
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Active': return 'st-active';
            case 'Suspended': return 'st-suspended';
            case 'Inactive': return 'st-inactive';
            default: return '';
        }
    };

    const getAttendanceColor = (val) => {
        if (val >= 90) return '#22c55e'; // Green
        if (val >= 75) return '#f59e0b'; // Orange
        return '#ef4444'; // Red
    };

    return (
        <div className="admin-directory-container">
            {/* Sidebar */}
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
                    <div className="dir-nav-item active">
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
                        <BarChart2 size={20} />
                        <span>Reports</span>
                    </div>

                    <div className="dir-nav-item" onClick={() => onNavigate('studentAttendance')}>
                        <Calendar1 size={20} />
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

            {/* Main Content */}
            <main className="directory-main">
                <header className="dir-header">
                    <div className="dir-title">
                        <h1>Student Directory</h1>
                        <p>Manage and monitor all enrolled students in the system.</p>
                    </div>
                    <div className="header-actions-grp">
                        <button className="btn-export">
                            <Download size={18} /> Export CSV
                        </button>
                        <button className="btn-add-student">
                            <Plus size={18} /> Add New Student
                        </button>
                    </div>
                </header>

                {/* Stats Row */}
                <div className="stats-row">
                    <div className="stat-box">
                        <span className="stat-label-kp">Total Students</span>
                        <div className="stat-value-kp">
                            2,540
                            <span className="stat-badge badge-green">+12%</span>
                        </div>
                    </div>
                    <div className="stat-box">
                        <span className="stat-label-kp">Active Today</span>
                        <div className="stat-value-kp">
                            2,310
                            <span className="stat-badge badge-subtle">91% Attendance</span>
                        </div>
                    </div>
                    <div className="stat-box">
                        <span className="stat-label-kp">Average GPA</span>
                        <div className="stat-value-kp">
                            3.42
                            <span className="stat-badge badge-blue">↗ +0.1</span>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="filter-bar">
                    <div className="search-field">
                        <Search size={18} />
                        <input type="text" placeholder="Search by student name, ID or email..." />
                    </div>
                    <select className="filter-select"><option>Department: All</option></select>
                    <select className="filter-select"><option>Year: 2024</option></select>
                    <select className="filter-select"><option>Status: Active</option></select>
                </div>

                {/* Table */}
                <div className="table-container">
                    <table className="student-table">
                        <thead>
                            <tr>
                                <th className="checkbox-col"><input type="checkbox" /></th>
                                <th>Student Name</th>
                                <th>ID Number</th>
                                <th>Department</th>
                                <th>GPA</th>
                                <th>Attendance</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, idx) => (
                                <tr key={idx}>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="student-info-cell">
                                            <img src={student.avatar} alt="" className="student-avatar" />
                                            <div className="student-text">
                                                <span className="st-name">{student.name}</span>
                                                <span className="st-email">{student.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="id-cell">{student.id}</td>
                                    <td>{student.dept}</td>
                                    <td className="gpa-cell">{student.gpa}</td>
                                    <td>
                                        <div className="attendance-wrapper">
                                            <div className="att-bar-bg">
                                                <div
                                                    className="att-bar-fill"
                                                    style={{ width: `${student.attendance}%`, backgroundColor: getAttendanceColor(student.attendance) }}
                                                ></div>
                                            </div>
                                            <span
                                                className="att-text"
                                                style={{ color: getAttendanceColor(student.attendance) }}
                                            >
                                                {student.attendance}%
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${getStatusClass(student.status)}`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="actions-cell">
                                            <Eye size={18} className="action-icon" onClick={() => onNavigate('studentProfile')} />
                                            <Edit2 size={18} className="action-icon" />
                                            <MoreVertical size={18} className="action-icon" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pagination-container">
                        <span className="page-info">Showing <strong>1</strong> to <strong>5</strong> of <strong>2,540</strong> students</span>
                        <div className="page-controls">
                            <button className="page-btn"><ChevronLeft size={16} /></button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <span className="page-btn" style={{ border: 'none' }}>...</span>
                            <button className="page-btn">508</button>
                            <button className="page-btn"><ChevronRight size={16} /></button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminStudentDirectory;
