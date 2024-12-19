import { useState, useEffect } from "react";
import { Outlet, Link } from 'react-router-dom';
import '../../styles/Daskboard/css.css'
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/userdata.actions";
const role = localStorage.getItem('roles')
function Daskboard() {
    const dispatch = useDispatch();
    const id = localStorage.getItem('userId')
    const renderContent = () => {
        if (role === "admin") {
            return (
                <div>
                    <div className="sidebar-header">
                        <h3>PayKos</h3>
                    </div>
                    <div className="side-menu">
                        <div className="list-container pb-3">
                            <p>Menu</p>
                            <div className="nav-item">
                                <Link to="/daskboard" className="nav-link">
                                    <span className="mr-2">&#xf0b1;</span>Daskboard
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to={`/daskboard/tambahinformasi`} className="nav-link">
                                    <span className="mr-2">&#xf1d8;</span>Tambah Infomasi
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to={`/daskboard/konfirmasitagihanpenghuni`} className="nav-link">
                                    <span className="mr-2">&#xf1d8;</span>Konfirmasi Tagihan
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to="/daskboard/penghuni" className="nav-link">
                                    <span className="mr-2">&#xf03e;</span>Data Penghuni
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to={`/daskboard/profile/admin/${id}`} className="nav-link">
                                    <span className="mr-2">&#xf1d8;</span>Profile Admin
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (role === "penghuni") {
            return (
                <div>
                    <div className="sidebar-header">
                        <h3>PayKos</h3>
                    </div>
                    <div className="side-menu">
                        <div className="list-container pb-3">
                            <p>Menu</p>
                            <div className="nav-item">
                                <Link to="/daskboard" className="nav-link">
                                    <span className="mr-2">&#xf0b1;</span>Daskboard
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to={`/daskboard/tambahkeluhan`} className="nav-link">
                                    <span className="mr-2">&#xf1d8;</span>Keluhan Kos
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to={`/daskboard/konfirmasitagihan`} className="nav-link">
                                    <span className="mr-2">&#xf1d8;</span>Data Tagihan
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to={`/daskboard/profile/penghuni/${id}`} className="nav-link">
                                    <span className="mr-2">&#xf1d8;</span>Profile Pengguna
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <p>tidak ada</p>;
        }
    };
    { renderContent() }
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsSidebarOpen(true);
        } else {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize); // Bersihkan event listener
    }, []);

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="div">
            {/* Sidebar */}
            <div id="mySidebar"
                style={{
                    display: isSidebarOpen ? "block" : "none",
                    width: isSidebarOpen ? (window.innerWidth <= 768 ? "80%" : "25%") : "0",
                    position: "fixed",
                    backgroundColor: "#FFDE21",
                    height: "100%",
                    transition: "0.3s ease",
                    overflowX: "hidden",
                    padding: isSidebarOpen ? "20px" : "0", // Tambahkan padding saat terbuka
                }}>
                <div className="flex">
                    <button
                        id="openNav"
                        className="btn"
                        onClick={toggleSidebar}
                        style={{
                            backgroundColor: "#FFDE21",
                            border: "none",
                            padding: window.innerWidth <= 768 ? "8px" : "10px",
                            cursor: "pointer",
                            fontSize: window.innerWidth <= 768 ? "16px" : "18px", // Sesuaikan ukuran font
                        }}>
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
                {renderContent()}
            </div>

            {/* Konten Utama */}
            <div
                id="main"
                style={{
                    marginLeft: isSidebarOpen ? (window.innerWidth <= 768 ? "80%" : "25%") : "0",
                    transition: "margin-left 0.3s ease",
                    marginRight: isSidebarOpen ? (window.innerWidth <= 768 ? "80%" : "0%") : "13.3%",
                }}
            >
                <div className="Navbar">
                    <button
                        id="openNav"
                        className="btn"
                        onClick={toggleSidebar}
                        style={{
                            backgroundColor: "#FFDE21",
                            border: "none",
                            padding: window.innerWidth <= 768 ? "8px" : "10px",
                            cursor: "pointer",
                            fontSize: window.innerWidth <= 768 ? "16px" : "18px", // Sesuaikan ukuran font
                        }}>
                        <i className="fa fa-bars"></i>
                    </button>
                    
                    <div className="nav-item">
                        <Link onClick={() => {
                            handleLogout()
                            localStorage.removeItem('token');
                            localStorage.removeItem('roles');
                            localStorage.removeItem('userId');
                            localStorage.removeItem('nama');
                            window.location.replace('/login')
                        }} className="nav-link">
                            Keluar
                        </Link>
                    </div>
                </div>
                <div className="contentdask">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Daskboard;