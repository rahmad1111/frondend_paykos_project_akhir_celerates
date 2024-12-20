import { Link } from "react-router-dom";
import SideBar from "./SideBar";

function Navbar() {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div style={{ display: 'flex', flex: '1', justifyContent: 'start' }}>
        <ul>
          <li><SideBar /></li>
          <li><a href="/">Home</a></li>
          {!token ? ( ''
          ) : (
            <li><a href="/daskboard">Dashboard</a></li>
          )}
        </ul>
      </div>

      {token ? (
        <button
          style={{
            padding: '1rem',
            backgroundColor: '#A84513FF',
            borderRadius: '10px',
            color: 'white',
            textDecoration: 'none',
            border: 'none'
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          style={{
            padding: '1rem',
            backgroundColor: '#2c5c81',
            borderRadius: '10px',
            color: 'white',
            textDecoration: 'none',
            border: 'none'
          }}
        >
          Login
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
