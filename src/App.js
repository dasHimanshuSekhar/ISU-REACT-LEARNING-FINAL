import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'transactions':
        return <Transactions />;
      case 'upi':
        return <div style={{ padding: '30px' }}><h2>UPI Management</h2><p>Coming soon...</p></div>;
      case 'reports':
        return <div style={{ padding: '30px' }}><h2>Reports</h2><p>Coming soon...</p></div>;
      case 'settings':
        return <div style={{ padding: '30px' }}><h2>Settings</h2><p>Coming soon...</p></div>;
      default:
        return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <Header onLogout={handleLogout} />
      <div className="app-container">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="app-main">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;