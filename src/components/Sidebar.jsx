import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaChartBar, 
  FaUsers, 
  FaCog, 
  FaFolder, 
  FaCalendarAlt, 
  FaInbox, 
  FaChevronRight, 
  FaChevronDown 
} from 'react-icons/fa';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');
  const [expandedItems, setExpandedItems] = useState({});

  // Navigation items with nested structure
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <FaHome />,
      path: '/dashboard'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <FaChartBar />,
      path: '/analytics'
    },
    {
      id: 'users',
      label: 'Users',
      icon: <FaUsers />,
      path: '/users',
      children: [
        { id: 'users-list', label: 'User List', path: '/users/list' },
        { id: 'users-add', label: 'Add User', path: '/users/add' },
        { id: 'users-roles', label: 'User Roles', path: '/users/roles' }
      ]
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <FaFolder />,
      path: '/projects',
      children: [
        { id: 'projects-active', label: 'Active Projects', path: '/projects/active' },
        { id: 'projects-archived', label: 'Archived', path: '/projects/archived' }
      ]
    },
    {
      id: 'calendar',
      label: 'Calendar',
      icon: <FaCalendarAlt />,
      path: '/calendar'
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: <FaInbox />,
      path: '/messages'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <FaCog />,
      path: '/settings'
    }
  ];

  // Toggle nested items
  const toggleNestedItems = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Handle item click
  const handleItemClick = (item) => {
    setActiveItem(item.id);
    if (item.children) {
      toggleNestedItems(item.id);
    }
  };

  // Sidebar animation variants
  const sidebarVariants = {
    expanded: {
      width: '240px',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    collapsed: {
      width: '70px',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  // Text animation variants
  const textVariants = {
    expanded: {
      opacity: 1,
      x: 0,
      display: 'block',
      transition: {
        delay: 0.1,
        duration: 0.2
      }
    },
    collapsed: {
      opacity: 0,
      x: -10,
      transitionEnd: {
        display: 'none'
      },
      transition: {
        duration: 0.2
      }
    }
  };

  // Nested items animation variants
  const nestedVariants = {
    expanded: {
      height: 'auto',
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    },
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  // Nested item animation variants
  const nestedItemVariants = {
    expanded: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
    collapsed: {
      opacity: 0,
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className="sidebar"
      variants={sidebarVariants}
      initial="collapsed"
      animate={isExpanded ? 'expanded' : 'collapsed'}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo">MS</div>
          <motion.div 
            className="logo-text"
            variants={textVariants}
            initial="collapsed"
            animate={isExpanded ? 'expanded' : 'collapsed'}
          >
            Modern Sidebar
          </motion.div>
        </div>
      </div>

      <div className="sidebar-content">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <div 
                className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                <div className="nav-item-icon">{item.icon}</div>
                <motion.div 
                  className="nav-item-text"
                  variants={textVariants}
                  initial="collapsed"
                  animate={isExpanded ? 'expanded' : 'collapsed'}
                >
                  {item.label}
                </motion.div>
                {item.children && isExpanded && (
                  <motion.div 
                    className="nav-item-arrow"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: expandedItems[item.id] ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronRight />
                  </motion.div>
                )}
              </div>

              {/* Nested items */}
              {item.children && (
                <motion.ul 
                  className="nested-nav-list"
                  initial="collapsed"
                  animate={expandedItems[item.id] && isExpanded ? 'expanded' : 'collapsed'}
                  variants={nestedVariants}
                >
                  {item.children.map((child) => (
                    <motion.li 
                      key={child.id}
                      variants={nestedItemVariants}
                    >
                      <div 
                        className={`nested-nav-item ${activeItem === child.id ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveItem(child.id);
                        }}
                      >
                        <div className="nested-nav-item-dot"></div>
                        <div className="nested-nav-item-text">{child.label}</div>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">
            <span>JD</span>
          </div>
          <motion.div 
            className="user-info"
            variants={textVariants}
            initial="collapsed"
            animate={isExpanded ? 'expanded' : 'collapsed'}
          >
            <div className="user-name">John Doe</div>
            <div className="user-role">Administrator</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
