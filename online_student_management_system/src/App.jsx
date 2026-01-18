import { useState } from 'react';
import Login from './Login';
import Register from './Register';

import AdminRegister from './AdminRegister';
import FacultyRegister from './FacultyRegister';
import AdminDashboard from './AdminDashboard';
import AdminStudentDirectory from './AdminStudentDirectory';
import StudentProfile from './StudentProfile';
import CourseManagement from './CourseManagement';
import StudentAttendance from './StudentAttendance';

function App() {
    const [currentView, setCurrentView] = useState('login');
    const [userData, setUserData] = useState({
        name: 'Dr. Sarah J.',
        role: 'Super Admin',
        email: 'sarah@edu.com'
    }); // Default/Demo data

    console.log('Current View:', currentView);

    return (
        <div className="app-container">
            {currentView === 'login' && <Login onNavigate={setCurrentView} />}
            {currentView === 'register' && <Register onNavigate={setCurrentView} />}
            {currentView === 'adminRegister' && <AdminRegister onNavigate={setCurrentView} setUserData={setUserData} />}
            {currentView === 'facultyRegister' && <FacultyRegister onNavigate={setCurrentView} />}
            {currentView === 'adminDashboard' && <AdminDashboard onNavigate={setCurrentView} userData={userData} />}
            {currentView === 'studentDirectory' && <AdminStudentDirectory onNavigate={setCurrentView} userData={userData} />}
            {currentView === 'studentProfile' && <StudentProfile onNavigate={setCurrentView} userData={userData} />}
            {currentView === 'courseManagement' && <CourseManagement onNavigate={setCurrentView} userData={userData} />}
            {currentView === 'studentAttendance' && <StudentAttendance onNavigate={setCurrentView} userData={userData} />}
        </div>
    );
}

export default App;
