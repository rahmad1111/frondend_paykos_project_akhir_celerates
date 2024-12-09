import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
        <nav>
            <ul className="ul">
                <li><a href="#home">Home</a></li>
                <li><a href="#fasilitas">Fasilitas</a></li>
                <li><a href="#testimoni">Testimoni</a></li>
                <li><a href="#tentang">Tentang</a></li>
                <li className="right"><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar;