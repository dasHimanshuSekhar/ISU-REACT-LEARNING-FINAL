import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const stats = [
    { label: 'Total Balance', value: '₹ 1,25,000', color: '#003366' },
    { label: "Today's Transactions", value: '25', color: '#0066cc' },
    { label: 'Pending Payments', value: '5', color: '#ff9800' },
    { label: 'Monthly Volume', value: '₹ 5,50,000', color: '#4caf50' },
  ];

  const recentTransactions = [
    { id: 1, date: '2024-04-08', type: 'UPI Received', amount: '₹ 500', from: 'Customer A', status: 'Success' },
    { id: 2, date: '2024-04-07', type: 'UPI Sent', amount: '₹ 200', to: 'Vendor B', status: 'Success' },
    { id: 3, date: '2024-04-06', type: 'UPI Received', amount: '₹ 1,500', from: 'Customer C', status: 'Success' },
    { id: 4, date: '2024-04-05', type: 'UPI Pending', amount: '₹ 300', to: 'Vendor D', status: 'Pending' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <p>Welcome back to IDBI Merchant Portal</p>
      </div>

      <div className="dashboard-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ borderTopColor: stat.color }}>
            <h4>{stat.label}</h4>
            <p className="stat-value">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="recent-transactions-box">
          <h3>Recent Transactions</h3>
          <div className="transactions-table-container">
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Details</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((tx) => (
                  <tr key={tx.id}>
                    <td>{tx.date}</td>
                    <td>{tx.type}</td>
                    <td className="amount">{tx.amount}</td>
                    <td>{tx.from || tx.to}</td>
                    <td><span className={`status ${tx.status.toLowerCase()}`}>{tx.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="actions-grid">
            <button className="action-btn">Send Money</button>
            <button className="action-btn">Request Payment</button>
            <button className="action-btn">View Statement</button>
            <button className="action-btn">Download Invoice</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;