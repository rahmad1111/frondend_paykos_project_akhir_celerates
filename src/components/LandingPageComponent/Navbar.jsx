import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
        <nav>
            <ul className="ul">
                <li className="li"><a href="#home">Home</a></li>
                <li className="li"><a href="#fasilitas">Fasilitas</a></li>
                <li className="li"><a href="#testimoni">Testimoni</a></li>
                <li className="li"><a href="#tentang">Tentang</a></li>
                <li className="right"><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar;