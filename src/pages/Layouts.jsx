import { Outlet } from 'react-router-dom';
import Navbar from '../components/LandingPageComponent/Navbar';
import Footer from '../components/LandingPageComponent/Footer';

function Layouts() {
    return (
        <div style={{minHeight: "100vh", display: 'flex', flexDirection: 'column'}}>
            <Navbar/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layouts;