import React, { useState } from 'react';
import {
    LayoutDashboard, Users, GraduationCap, Settings, LogOut, Search, Bell,
    ArrowUpRight, UserPlus, BookOpen, Clock, Shield,
    BarChart3, Calendar
} from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = ({ onNavigate, userData }) => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    return (
        <div className="admin-dashboard-container">
            {/* Sidebar */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-brand">
                    <Shield size={24} className="brand-icon-dash" />
                    <span>EduAdmin Pro</span>
                </div>

                <nav className="sidebar-nav">
                    <div className="nav-item active">
                        <LayoutDashboard size={20} />
                        <span>Overview</span>
                    </div>
                    <div className="nav-item" onClick={() => { console.log('Navigating to directory'); onNavigate('studentDirectory'); }}>
                        <Users size={20} />
                        <span>Students</span>
                    </div>
                    <div className="nav-item">
                        <GraduationCap size={20} />
                        <span>Faculty</span>
                    </div>
                    <div className="nav-item" onClick={() => onNavigate('courseManagement')}>
                        <BookOpen size={20} />
                        <span>Courses</span>
                    </div>
                    <div className="nav-item">
                        <BarChart3 size={20} />
                        <span>Reports</span>
                    </div>
                    <div className="nav-item" onClick={() => onNavigate('studentAttendance')}>
                        <Calendar size={20} />
                        <span>Attendance</span>
                    </div>
                    <div className="nav-item">
                        <Settings size={20} />
                        <span>Settings</span>
                    </div>
                </nav>

                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={() => onNavigate('login')}>
                        <LogOut size={20} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="header-left">
                        <h2>Dashboard Overview</h2>
                    </div>
                    <div className="header-right">
                        <div className="search-bar">
                            <Search size={16} className="search-icon" />
                            <input type="text" placeholder="Search..." />
                        </div>
                        <Bell size={20} color="#64748b" style={{ cursor: 'pointer' }} />

                        <div className="header-profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                            <div className="profile-info">
                                <span className="profile-name">{onNavigate.userData?.name || userData?.name || 'Dr. Sarah J.'}</span>
                                <span className="profile-role">{onNavigate.userData?.role || userData?.role || 'Super Admin'}</span>
                            </div>
                            <div className="profile-avatar">
                                {onNavigate.userData?.name ? onNavigate.userData.name.charAt(0) : (userData?.name ? userData.name.charAt(0) : 'SJ')}
                            </div>

                            {/* Dropdown Menu */}
                            {showProfileMenu && (
                                <div className="profile-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                    <div className="dropdown-header">
                                        <div className="dropdown-avatar-large">
                                            {onNavigate.userData?.name ? onNavigate.userData.name.charAt(0) : (userData?.name ? userData.name.charAt(0) : 'SJ')}
                                        </div>
                                        <span className="dropdown-name">{onNavigate.userData?.name || userData?.name || 'Dr. Sarah J.'}</span>
                                        <span className="dropdown-role">{onNavigate.userData?.role || userData?.role || 'Super Admin'}</span>
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

                <div className="dashboard-content">
                    {/* Stats Grid */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-header">
                                <div className="stat-icon bg-blue">
                                    <Users size={20} />
                                </div>
                                <span className="trend-badge trend-up">
                                    <ArrowUpRight size={14} /> +12%
                                </span>
                            </div>
                            <span className="stat-value">2,450</span>
                            <span className="stat-label">Total Students</span>
                        </div>

                        <div className="stat-card">
                            <div className="stat-header">
                                <div className="stat-icon bg-green">
                                    <GraduationCap size={20} />
                                </div>
                                <span className="trend-badge trend-up">
                                    <ArrowUpRight size={14} /> +5%
                                </span>
                            </div>
                            <span className="stat-value">145</span>
                            <span className="stat-label">Active Faculty</span>
                        </div>

                        <div className="stat-card">
                            <div className="stat-header">
                                <div className="stat-icon bg-purple">
                                    <BookOpen size={20} />
                                </div>
                            </div>
                            <span className="stat-value">68</span>
                            <span className="stat-label">Active Courses</span>
                        </div>

                        <div className="stat-card">
                            <div className="stat-header">
                                <div className="stat-icon bg-orange">
                                    <UserPlus size={20} />
                                </div>
                            </div>
                            <span className="stat-value">24</span>
                            <span className="stat-label">New Applications</span>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="recent-section">
                        <div className="section-header">
                            <h3>Remember Recent System Activity</h3>
                            <button className="action-btn">View All</button>
                        </div>
                        <div className="activity-list">
                            <div className="activity-item">
                                <div className="activity-icon-circle">
                                    <UserPlus size={16} />
                                </div>
                                <div className="activity-details">
                                    <p className="activity-msg">New student registration: <strong>Michael Chen</strong></p>
                                    <span className="activity-time">2 minutes ago</span>
                                </div>
                            </div>
                            <div className="activity-item">
                                <div className="activity-icon-circle">
                                    <Settings size={16} />
                                </div>
                                <div className="activity-details">
                                    <p className="activity-msg">System maintenance scheduled</p>
                                    <span className="activity-time">45 minutes ago</span>
                                </div>
                            </div>
                            <div className="activity-item">
                                <div className="activity-icon-circle">
                                    <GraduationCap size={16} />
                                </div>
                                <div className="activity-details">
                                    <p className="activity-msg">Faculty <strong>Dr. Richardson</strong> uploaded grades</p>
                                    <span className="activity-time">2 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
