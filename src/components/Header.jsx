import { FaBell, FaSearch, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
        </div>
      </div>
      
      <div className="header-right">
        <div className="header-icon-container">
          <FaBell className="header-icon" />
          <span className="notification-badge">3</span>
        </div>
        
        <div className="header-icon-container">
          <FaEnvelope className="header-icon" />
          <span className="notification-badge">5</span>
        </div>
        
        <div className="header-divider"></div>
        
        <div className="header-user-info">
          <span className="welcome-text">Welcome back,</span>
          <span className="user-name">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
