import React from 'react';
import './Transactions.css';

function Transactions() {
  const transactions = [
    { id: 1, date: '2024-04-08', type: 'UPI Received', amount: 500, from: 'Customer A', status: 'Success', time: '10:30 AM' },
    { id: 2, date: '2024-04-07', type: 'UPI Sent', amount: 200, to: 'Vendor B', status: 'Success', time: '02:15 PM' },
    { id: 3, date: '2024-04-06', type: 'UPI Received', amount: 1500, from: 'Customer C', status: 'Success', time: '09:45 AM' },
    { id: 4, date: '2024-04-05', type: 'UPI Pending', amount: 300, to: 'Vendor D', status: 'Pending', time: '11:20 AM' },
    { id: 5, date: '2024-04-04', type: 'UPI Received', amount: 750, from: 'Customer E', status: 'Success', time: '03:50 PM' },
    { id: 6, date: '2024-04-03', type: 'UPI Sent', amount: 450, to: 'Vendor F', status: 'Success', time: '01:10 PM' },
  ];

  return (
    <div className="transactions">
      <div className="transactions-header">
        <h2>Transaction History</h2>
        <p>View and manage all your transactions</p>
      </div>

      <div className="transactions-filters">
        <input type="text" placeholder="Search transactions..." className="search-box" />
        <select className="filter-select">
          <option>All Types</option>
          <option>Received</option>
          <option>Sent</option>
        </select>
        <select className="filter-select">
          <option>All Status</option>
          <option>Success</option>
          <option>Pending</option>
        </select>
      </div>

      <div className="transactions-container">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Party</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(tx => (
              <tr key={tx.id}>
                <td>{tx.date}</td>
                <td>{tx.time}</td>
                <td>{tx.type}</td>
                <td className="amount">₹ {tx.amount}</td>
                <td>{tx.from || tx.to}</td>
                <td><span className={`status-badge ${tx.status.toLowerCase()}`}>{tx.status}</span></td>
                <td><button className="action-link">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;