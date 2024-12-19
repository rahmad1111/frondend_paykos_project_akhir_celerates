import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
        <nav>
            <ul className="ul">
                <li className="li"><a href="#content">Home</a></li>
                <li className="li"><a href="#fasilitas">Fasilitas</a></li>
                <li className="li"><a href="#about">Tentang</a></li>
                <li className="right"><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar;