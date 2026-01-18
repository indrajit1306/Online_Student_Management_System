import React, { useState } from 'react';
import {
    LayoutDashboard, Users, GraduationCap, Settings, BookOpen, BarChart4,
    Calendar, Search, Bell, Download, Save, BarChart2,
    Briefcase, AlertTriangle, Mail, ChevronLeft, ChevronRight, ChevronDown
} from 'lucide-react';
import './StudentAttendance.css';
import './AdminStudentDirectory.css'; // Shared sidebar styles

const StudentAttendance = ({ onNavigate, userData }) => {
    // Mock Data for students
    const [students, setStudents] = useState([
        { id: 'STU-98231', name: 'Alex Johnson', detail: 'Year 2, Section B', status: 'present', color: '#6366f1' },
        { id: 'STU-98245', name: 'Sarah Williams', detail: 'Year 2, Section B', status: 'late', color: '#ec4899' },
        { id: 'STU-98267', name: 'Michael Chen', detail: 'Year 2, Section B', status: 'present', color: '#14b8a6' },
        { id: 'STU-98288', name: 'Emily Davis', detail: 'Year 2, Section B', status: 'present', color: '#f43f5e' },
        { id: 'STU-98299', name: 'David Smith', detail: 'Year 2, Section B', status: 'absent', color: '#8b5cf6' },
    ]);

    // Handle Status Change
    const handleStatusChange = (id, newStatus) => {
        setStudents(prev => prev.map(stu =>
            stu.id === id ? { ...stu, status: newStatus } : stu
        ));
    };

    return (
        <div className="attendance-container">
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
                    <div className="dir-nav-item" onClick={() => onNavigate('studentDirectory')}>
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
                    <div className="dir-nav-item active">
                        <Calendar size={20} />
                        <span>Attendance</span>
                    </div>
                    <div className="dir-nav-item">
                        <Settings size={20} />
                        <span>Settings</span>
                    </div>
                </nav>
            </aside>

            {/* Main Area */}
            <div className="attendance-main-area">

                {/* Header Section */}
                <div className="att-breadcrumbs">
                    <LayoutDashboard size={14} /> Dashboard <span style={{ margin: '0 5px' }}>/</span> Attendance Tracker
                </div>

                <div className="att-page-header">
                    <div className="att-title">
                        <h1>Daily Attendance</h1>
                        <p>Manage and mark attendance for your active sessions.</p>
                    </div>
                    <div className="att-header-actions">
                        <button className="btn-white-outline">
                            <Download size={18} /> Export
                        </button>
                        <button className="btn-primary-blue">
                            <Save size={18} /> Save Attendance
                        </button>
                    </div>
                </div>

                {/* Grid Content */}
                <div className="attendance-grid">

                    {/* LEFT COLUMN: Filters & List */}
                    <div className="att-left-col">
                        {/* Filters */}
                        <div className="att-filters-card">
                            <div className="filter-group">
                                <label className="filter-label">Department</label>
                                <div style={{ position: 'relative' }}>
                                    <select className="filter-select" style={{ width: '100%', appearance: 'none' }}>
                                        <option>Computer Science</option>
                                        <option>Mathematics</option>
                                    </select>
                                    <ChevronDown size={14} style={{ position: 'absolute', right: 10, top: 14, color: '#64748b' }} />
                                </div>
                            </div>
                            <div className="filter-group">
                                <label className="filter-label">Course</label>
                                <div style={{ position: 'relative' }}>
                                    <select className="filter-select" style={{ width: '100%', appearance: 'none' }}>
                                        <option>CS101 - Intro to Programming</option>
                                    </select>
                                    <ChevronDown size={14} style={{ position: 'absolute', right: 10, top: 14, color: '#64748b' }} />
                                </div>
                            </div>
                            <div className="filter-group">
                                <label className="filter-label">Session Date</label>
                                <input type="date" className="filter-date" defaultValue="2023-10-24" />
                            </div>
                        </div>

                        {/* Student List */}
                        <div className="att-list-card">
                            <div className="att-list-header">
                                <h3>Student List ({students.length} Enrolled)</h3>
                                <div className="quick-mark">
                                    Quick Mark All:
                                    <div className="toggle-bg">
                                        <button className="toggle-btn active">Present</button>
                                        <button className="toggle-btn">Absent</button>
                                    </div>
                                </div>
                            </div>

                            <div className="att-table-header">
                                <div>Student</div>
                                <div>Student ID</div>
                                <div>Attendance Status</div>
                            </div>

                            {students.map((stu) => (
                                <div className="att-student-row" key={stu.id}>
                                    <div className="att-student-info">
                                        <div className="att-avatar" style={{ background: `linear-gradient(135deg, ${stu.color}, #ddd)` }}></div>
                                        <div className="att-name-col">
                                            <h4>{stu.name}</h4>
                                            <span className="att-meta">{stu.detail}</span>
                                        </div>
                                    </div>
                                    <div className="att-id">{stu.id}</div>
                                    <div className="att-status-group">
                                        <label className="radio-label radio-present">
                                            <input
                                                type="radio"
                                                name={`status-${stu.id}`}
                                                checked={stu.status === 'present'}
                                                onChange={() => handleStatusChange(stu.id, 'present')}
                                            /> Present
                                        </label>
                                        <label className="radio-label radio-absent">
                                            <input
                                                type="radio"
                                                name={`status-${stu.id}`}
                                                checked={stu.status === 'absent'}
                                                onChange={() => handleStatusChange(stu.id, 'absent')}
                                            /> Absent
                                        </label>
                                        <label className="radio-label radio-late">
                                            <input
                                                type="radio"
                                                name={`status-${stu.id}`}
                                                checked={stu.status === 'late'}
                                                onChange={() => handleStatusChange(stu.id, 'late')}
                                            /> Late
                                        </label>
                                    </div>
                                </div>
                            ))}

                            <button className="load-more-btn">
                                Load More Students <ChevronDown size={16} />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Summary & Watchlist */}
                    <div className="att-right-col">
                        {/* Attendance Summary */}
                        <div className="summary-card">
                            <div className="summary-title">
                                <BarChart2 size={18} className="text-blue" /> Attendance Summary
                            </div>
                            <div className="circle-chart">
                                <span className="chart-val">88%</span>
                                <span className="chart-label">PRESENT</span>
                            </div>
                            <div className="stats-row">
                                <div className="mini-stat">
                                    <span className="ms-val text-blue">21</span>
                                    <span className="ms-label">Present</span>
                                </div>
                                <div className="mini-stat">
                                    <span className="ms-val text-red">2</span>
                                    <span className="ms-label">Absent</span>
                                </div>
                                <div className="mini-stat">
                                    <span className="ms-val text-orange">1</span>
                                    <span className="ms-label">Late</span>
                                </div>
                            </div>
                        </div>

                        {/* Critical Watchlist */}
                        <div className="watchlist-card">
                            <div className="watchlist-header">
                                <div className="wl-title">
                                    <AlertTriangle size={18} className="text-red" /> Critical Watchlist
                                </div>
                                <span className="badge-attention">Attention</span>
                            </div>

                            {[
                                { name: 'James Wilson', rate: '68%', id: 1 },
                                { name: 'Linda Miller', rate: '72%', id: 2 },
                                { name: 'Robert Brown', rate: '74%', id: 3 }
                            ].map(u => (
                                <div className="watchlist-item" key={u.id}>
                                    <div className="wl-user-info">
                                        <div className="wl-avatar">
                                            <Users size={16} color="#64748b" />
                                        </div>
                                        <div className="wl-details">
                                            <h5>{u.name}</h5>
                                            <span>{u.rate} Total Attendance</span>
                                        </div>
                                    </div>
                                    <Mail size={16} className="wl-action" />
                                </div>
                            ))}

                            <a className="view-report-link">View Detailed Report</a>
                        </div>

                        {/* Calendar Widget */}
                        <div className="calendar-card">
                            <div className="cal-header">
                                <ChevronLeft size={16} style={{ cursor: 'pointer' }} />
                                October 2023
                                <ChevronRight size={16} style={{ cursor: 'pointer' }} />
                            </div>
                            <div className="cal-grid">
                                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={i} className="cal-day-name">{d}</div>)}
                                {[29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((d, i) => (
                                    <div key={i} style={{ opacity: i < 2 ? 0.3 : 1 }}>{d}</div> // Lazy opacity for prev month
                                ))}
                                <div className="cal-date active">24</div>
                                {[25, 26, 27, 28, 29].map((d, i) => <div key={i}>{d}</div>)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StudentAttendance;
