import React from 'react';
import {
    LayoutDashboard, Users, GraduationCap, Settings, LogOut, Search, Bell,
    ArrowUpRight, UserPlus, BookOpen, Clock, Shield, Download, Filter,
    MoreVertical, Eye, Edit2, ChevronLeft, ChevronRight, TrendingUp
} from 'lucide-react';
import './AdminStudentDirectory.css';
import './AdminDashboard.css'; // Import dashboard base styles for sidebar

const AdminStudentDirectory = ({ onNavigate }) => {
    // Mock Data
    const students = [
        {
            id: 1,
            name: "Marcus Thompson",
            email: "m.thompson@university.edu",
            idNumber: "STU-2024-001",
            dept: "Computer Science",
            gpa: "3.92",
            attendance: 98,
            status: "Active",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Elena Rodriguez",
            email: "e.rodriguez@university.edu",
            idNumber: "STU-2024-042",
            dept: "Architecture",
            gpa: "3.75",
            attendance: 92,
            status: "Active",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Jordan Smith",
            email: "j.smith@university.edu",
            idNumber: "STU-2023-112",
            dept: "Mechanical Eng.",
            gpa: "2.84",
            attendance: 74,
            status: "Suspended",
            img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 4,
            name: "Aria Chen",
            email: "a.chen@university.edu",
            idNumber: "STU-2024-008",
            dept: "Biochemistry",
            gpa: "4.00",
            attendance: 100,
            status: "Active",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 5,
            name: "Kevin Wu",
            email: "k.wu@university.edu",
            idNumber: "STU-2022-581",
            dept: "Psychology",
            gpa: "3.12",
            attendance: 45,
            status: "Inactive",
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Active': return 'status-active';
            case 'Suspended': return 'status-suspended';
            case 'Inactive': return 'status-inactive';
            default: return '';
        }
    };

    const getAttendanceColor = (val) => {
        if (val >= 90) return '#22c55e'; // Green
        if (val >= 70) return '#f97316'; // Orange
        return '#ef4444'; // Red
    };

    return (
        <div className="student-dir-container">
            {/* Sidebar - Copied from Dashboard for consistency since we aren't using a Layout component yet */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-brand">
                    <Shield size={24} className="brand-icon-dash" />
                    <span>EduAdmin Pro</span>
                </div>

                <nav className="sidebar-nav">
                    <a href="#" className="nav-item" onClick={() => onNavigate('adminDashboard')}>
                        <LayoutDashboard size={20} />
                        <span>Overview</span>
                    </a>
                    <a href="#" className="nav-item active">
                        <Users size={20} />
                        <span>Students</span>
                    </a>
                    <a href="#" className="nav-item">
                        <GraduationCap size={20} />
                        <span>Faculty</span>
                    </a>
                    <a href="#" className="nav-item">
                        <BookOpen size={20} />
                        <span>Courses</span>
                    </a>
                    <a href="#" className="nav-item">
                        <Settings size={20} />
                        <span>Settings</span>
                    </a>
                </nav>

                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={() => onNavigate('login')}>
                        <LogOut size={20} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dir-main">
                <header className="dir-header">
                    <div className="dir-header-title">
                        <h2>Student Directory</h2>
                        <p>Manage and monitor all enrolled students in the system.</p>
                    </div>
                    <div className="dir-header-actions">
                        <button className="btn-export">
                            <Download size={16} /> Export CSV
                        </button>
                        <button className="btn-add-student">
                            <UserPlus size={18} /> Add New Student
                        </button>
                    </div>
                </header>

                <div className="dir-content">
                    {/* Stats Grid */}
                    <div className="dir-stats-grid">
                        <div className="dir-stat-card">
                            <div className="dir-stat-info">
                                <h4>Total Students</h4>
                                <h2>2,540</h2>
                            </div>
                            <span className="dir-stat-badge">+12%</span>
                        </div>
                        <div className="dir-stat-card">
                            <div className="dir-stat-info">
                                <h4>Active Today</h4>
                                <h2>2,310</h2>
                            </div>
                            <span className="dir-stat-meta">91% Attendance</span>
                        </div>
                        <div className="dir-stat-card">
                            <div className="dir-stat-info">
                                <h4>Average GPA</h4>
                                <h2>3.42</h2>
                            </div>
                            <div style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', fontSize: '0.8rem', fontWeight: 700 }}>
                                <TrendingUp size={16} style={{ marginRight: '4px' }} /> +0.1
                            </div>
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div className="filter-bar">
                        <div className="search-input-wrapper">
                            <Search size={18} />
                            <input type="text" placeholder="Search by student name, ID or email..." />
                        </div>
                        <select className="filter-select">
                            <option>Department: All</option>
                            <option>Computer Science</option>
                            <option>Architecture</option>
                        </select>
                        <select className="filter-select">
                            <option>Year: 2024</option>
                            <option>2023</option>
                            <option>2022</option>
                        </select>
                        <select className="filter-select">
                            <option>Status: Active</option>
                            <option>Inactive</option>
                            <option>Suspended</option>
                        </select>
                    </div>

                    {/* Table */}
                    <div className="table-container">
                        <table className="student-table">
                            <thead>
                                <tr>
                                    <th className="checkbox-cell"><input type="checkbox" className="custom-checkbox" /></th>
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
                                {students.map((student) => (
                                    <tr key={student.id}>
                                        <td className="checkbox-cell"><input type="checkbox" className="custom-checkbox" /></td>
                                        <td>
                                            <div className="student-cell">
                                                <img src={student.img} alt={student.name} className="student-avatar" />
                                                <div className="student-details">
                                                    <span className="student-name">{student.name}</span>
                                                    <span className="student-email">{student.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="id-cell">{student.idNumber}</td>
                                        <td>{student.dept}</td>
                                        <td style={{ fontWeight: 700 }}>{student.gpa}</td>
                                        <td>
                                            <div className="attendance-bar-container">
                                                <div
                                                    className="attendance-fill"
                                                    style={{ width: `${student.attendance}%`, backgroundColor: getAttendanceColor(student.attendance) }}
                                                ></div>
                                            </div>
                                            <span className="attendance-text" style={{ color: getAttendanceColor(student.attendance) }}>{student.attendance}%</span>
                                        </td>
                                        <td>
                                            <span className={`status-badge ${getStatusClass(student.status)}`}>{student.status}</span>
                                        </td>
                                        <td className="actions-cell">
                                            <button className="action-icon-btn"><Eye size={18} /></button>
                                            <button className="action-icon-btn"><Edit2 size={18} /></button>
                                            <button className="action-icon-btn"><MoreVertical size={18} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="pagination-area">
                        <span className="showing-text">Showing <strong>1</strong> to <strong>5</strong> of <strong>2,540</strong> students</span>
                        <div className="pagination-controls">
                            <button className="page-btn disabled"><ChevronLeft size={16} /></button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <span style={{ color: '#64748b' }}>...</span>
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
