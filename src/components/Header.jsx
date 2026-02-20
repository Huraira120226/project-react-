import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ 
      padding: '1rem', 
      background: '#282c34', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'space-around' 
    }}>
      <h2 style={{ margin: 0 }}>DocChain</h2>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
        <Link to="/features" style={{ color: 'white', marginRight: '15px' }}>Features</Link>
        <Link to="/verify" style={{ color: 'white' }}>Verification</Link>
      </div>
    </nav>
  );
}

export default Header;