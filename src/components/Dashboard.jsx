import { FaChartLine, FaUsers, FaShoppingCart, FaComments } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>
      
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon">
            <FaUsers />
          </div>
          <div className="stat-content">
            <h3 className="stat-title">Total Users</h3>
            <p className="stat-value">12,345</p>
            <p className="stat-change positive">+12% from last month</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <FaShoppingCart />
          </div>
          <div className="stat-content">
            <h3 className="stat-title">Revenue</h3>
            <p className="stat-value">$48,290</p>
            <p className="stat-change positive">+8% from last month</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <FaChartLine />
          </div>
          <div className="stat-content">
            <h3 className="stat-title">Growth</h3>
            <p className="stat-value">27.5%</p>
            <p className="stat-change positive">+5% from last month</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <FaComments />
          </div>
          <div className="stat-content">
            <h3 className="stat-title">Feedback</h3>
            <p className="stat-value">4.8/5</p>
            <p className="stat-change positive">+0.3 from last month</p>
          </div>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2 className="card-title">Recent Activity</h2>
          <div className="activity-list">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="activity-item">
                <div className="activity-icon"></div>
                <div className="activity-content">
                  <p className="activity-text">User John Doe updated their profile</p>
                  <p className="activity-time">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="dashboard-card">
          <h2 className="card-title">Quick Actions</h2>
          <div className="quick-actions">
            <button className="action-button">Add New User</button>
            <button className="action-button">Create Report</button>
            <button className="action-button">View Analytics</button>
            <button className="action-button">System Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
