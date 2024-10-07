import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'List of mines', path: '/list' },
    { name: 'Emmission Calculator', path: '/calculator' },
    { name: 'Carbon Sink', path: '/sink' },
    { name: 'Carbon Neutrality', path: '/neutrality' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{ width: '150px' }}>
        <img src="/1 logo.svg" alt="Mine Eco Logo" style={{ width: '100%', paddingRight: '150px' }} />
      </div>
      <div style={{
        display: 'flex',
        gap: '15px',
        marginLeft: '155px',
      }}>
        {navItems.map(item => (
          <button
            key={item.name}
            style={{
              ...buttonStyle,
              textDecoration: location.pathname === item.path ? 'underline' : 'none',
              fontWeight: location.pathname === item.path ? 'bold' : 'normal',
            }}
            onClick={() => handleNavClick(item.path)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div><button style={{
        marginLeft: '210px',
        padding: '10px 20px',
        backgroundColor: '#1DBF73',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        fontSize: '15px',
        borderRadius: '5px'
      }}>Organisation Login</button></div>
    </nav>
  );
};

const buttonStyle = {
  fontSize: '16px',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '5px',
  transition: 'background-color 0.3s',
  color: '#000',
  position: 'relative',
  overflow: 'hidden',
  outline: 'none',
};

export default Navbar;
