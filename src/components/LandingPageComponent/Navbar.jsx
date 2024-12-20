import { Link } from "react-router-dom";
import SideBar from "./SideBar";

function Navbar() {
  const id = localStorage.getItem('userId')
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login'
  };
  
  return (
    <nav className="navbar">
      <div style={{ display: 'flex', flex: '1', justifyContent: 'start' }}>
        <ul>
          <li><SideBar /></li>
          <li><a href="/">Home</a></li>
          <li><a href="/daskboard">Dashboard</a></li>
          <li><a href="/tambahkeluhan">Tambah Keluhan</a></li>
          {
            id ==='1' ? <li><a href="/admin/penghuni">Data Penghuni</a></li> : ''
          }
          {
            id ? '' : <li><a href="#fasilitas">Fasilitas</a></li>
          }
          {
            id ? '' :  ''
          }
        </ul>
      </div>
      {
          id ? <button style={{padding : '1rem', backgroundColor : '#A84513FF', borderRadius : '10px', color : 'white', textDecoration : 'none', border: 'none'}} onClick={handleLogout}>Logout</button> : <Link to="/login" style={{padding : '1rem', backgroundColor : '#2c5c81', borderRadius : '10px', color : 'white', textDecoration : 'none', border: 'none'}}>Login</Link>
        }
    </nav>
  )
}

export default Navbar;