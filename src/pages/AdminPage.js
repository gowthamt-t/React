import React from 'react';
import './AdminPage.css';

const AdminPage = () => {
    return (
        <div className="admin-container">
            <aside className="sidebar">
                {/* Sidebar Navigation */}
                <div className="sidebar-logo"></div>
                <nav className="sidebar-nav">
                    <a href="#" className="nav-item active">Dashboard</a>
                    <a href="#" className="nav-item">Reports</a>
                    <a href="#" className="nav-item">Donors</a>
                    <a href="#" className="nav-item">Settings</a>
                </nav>
            </aside>
            <main className="main-content">
                <header className="header">
                    <h1>Donations</h1>
                </header>
                <section className="metrics">
                    <div className="metric-card">
                        <h2>Total Donations</h2>
                        <p className="metric-value">₹40,206.20</p>
                        <p className="metric-change">+3.4%</p>
                    </div>
                    <div className="metric-card">
                        <h2>Average Donation</h2>
                        <p className="metric-value">₹300.00</p>
                        <p className="metric-change">+3.4%</p>
                    </div>
                    {/* <div className="metric-card">
                        <h2>Total Refunds</h2>
                        <p className="metric-value">$100.00</p>
                    </div> */}
                </section>
                <section className="charts">
                    <div className="chart-card">
                        <h2>Balance over time</h2>
                        {/* Placeholder for a chart */}
                        <div className="chart-placeholder">Chart here</div>
                    </div>
                    <div className="chart-card">
                        <h2>Payment Methods</h2>
                        {/* Placeholder for a chart */}
                        <div className="chart-placeholder">Chart here</div>
                    </div>
                </section>
                <section className="donor-table">
                    <header className="table-header">
                        <input type="text" placeholder="Search donor name" className="search-input" />
                        <div className="table-controls">
                            <button className="btn">Generate Reports</button>
                            {/* <button className="btn">More Filters</button> */}
                        </div>
                    </header>
                    <table>
                        <thead>
                            <tr>
                                <th>Donor Name</th>
                                <th>Date & Time</th>
                                <th>Payment Method</th>
                                <th>Donation Amount</th>
                                <th>Message (if any)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Sample Data Rows */}
                            <tr>
                                <td>Dinesh</td>
                                <td>02-25-2024 11:10 PM</td>
                                <td>Paypal</td>
                                <td>$500.00</td>
                                <td>Noticed that the adopter spent a significant...</td>
                                <td><a href="#" className="link">Download Receipt</a></td>
                            </tr>
                            {/* Additional rows go here */}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default AdminPage;
