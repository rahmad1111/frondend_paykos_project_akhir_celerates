import { useState, useEffect } from "react";
import { Outlet, Link } from 'react-router-dom';
import '../../styles/Daskboard/css.css'
const role = "admin"
function Daskboard() {
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
                                <Link to="/daskboard/penghuni" className="nav-link">
                                    <span className="mr-2">&#xf03e;</span>Data Penghuni
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to={`/daskboard/datakos/${id}`} className="nav-link">
                                    <span className="mr-2">&#xf059;</span>Data Kos
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to={`/daskboard/profile/${id}`} className="nav-link">
                                    <span className="mr-2">&#xf1d8;</span>Profile Admin
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (role === "user") {
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
                                <Link to="/daskboard/penghuni" className="nav-link">
                                    <span className="mr-2">&#xf03e;</span>Data Penghuni
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to={`/daskboard/datakos/${id}`} className="nav-link">
                                    <span className="mr-2">&#xf059;</span>Data Kos
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to={`/daskboard/profile/${id}`} className="nav-link">
                                    <span className="mr-2">&#xf1d8;</span>Profile Admin
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

    // Fungsi untuk toggle sidebar
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    // Fungsi untuk menangani perubahan ukuran layar
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsSidebarOpen(true); // Sidebar tampil otomatis di layar besar
        } else {
            setIsSidebarOpen(false); // Sidebar sembunyi di layar kecil
        }
    };

    // Pasang event listener saat komponen di-mount
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize(); // Inisialisasi saat pertama kali render
        return () => window.removeEventListener("resize", handleResize); // Bersihkan event listener
    }, []);

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
                        <Link to="/contact" className="nav-link">
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