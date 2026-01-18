import { useState } from 'react';
import Login from './Login';
import Register from './Register';

import AdminRegister from './AdminRegister';
import FacultyRegister from './FacultyRegister';
import AdminDashboard from './AdminDashboard';
import AdminStudentDirectory from './AdminStudentDirectory';

function App() {
    const [currentView, setCurrentView] = useState('login');

    return (
        <div className="app-container">
            {currentView === 'login' && <Login onNavigate={setCurrentView} />}
            {currentView === 'register' && <Register onNavigate={setCurrentView} />}
            {currentView === 'adminRegister' && <AdminRegister onNavigate={setCurrentView} />}
            {currentView === 'facultyRegister' && <FacultyRegister onNavigate={setCurrentView} />}
            {currentView === 'adminDashboard' && <AdminDashboard onNavigate={setCurrentView} />}
            {currentView === 'adminStudentList' && <AdminStudentDirectory onNavigate={setCurrentView} />}
        </div>
    );
}

export default App;
