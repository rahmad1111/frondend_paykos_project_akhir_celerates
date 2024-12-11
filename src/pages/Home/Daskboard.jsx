import { useState, useEffect } from "react";
import { Outlet, Link } from 'react-router-dom';
import { NavItem, NavLink, Nav } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    // faHome,
    faBriefcase,
    faPaperPlane,
    faQuestion,
    faImage,
    // faCopy,
} from "@fortawesome/free-solid-svg-icons";
const role = 'user'

function Daskboard() {
    const renderContent = () => {
        if (role === "admin") {
            return (
                <div>
                    <Link to={'/home'} >Landing</Link>
                </div>
            );
        } else if (role === "user") {
            return (
                <div>
                    <div className="sidebar-header">
                        <h3>Bootstrap Sidebar</h3>
                    </div>
                    <div className="side-menu">
                        <Nav vertical className="list-unstyled pb-3">
                            <p>Dummy Heading</p>
                            {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}
                            <NavItem>
                                <NavLink tag={Link} to={"/about"}>
                                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                                    About
                                </NavLink>
                            </NavItem>
                            {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
                            <NavItem>
                                <NavLink tag={Link} to={"/pages"}>
                                    <FontAwesomeIcon icon={faImage} className="mr-2" />
                                    Portfolio
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={"/faq"}>
                                    <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                                    FAQ
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={"/contact"}>
                                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                                    Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
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
            <div
                id="mySidebar"
                style={{
                    display: isSidebarOpen ? "block" : "none",
                    width: isSidebarOpen ? "25%" : "0",
                    position: "fixed",
                    backgroundColor: "#FFDE21",
                    height: "100%",
                    transition: "0.3s ease",
                    overflowX: "hidden", // Hindari scroll horizontal
                    padding: isSidebarOpen ? "20px" : "0", // Tambahkan padding saat terbuka
                }}
            >
                <h2>Sidebar</h2>
                {renderContent()}
            </div>

            {/* Konten Utama */}
            <div
                id="main"
                style={{
                    marginLeft: isSidebarOpen ? "25%" : "0",
                    transition: "margin-left 0.3s ease",
                }}
            >
                <div className="Navbar" style={{ padding: "10px", backgroundColor: "#333", color: "#FFF" }}>
                    <button
                        id="openNav"
                        className="btn"
                        onClick={toggleSidebar}
                        style={{
                            backgroundColor: "#FFDE21",
                            border: "none",
                            padding: "10px",
                            cursor: "pointer",
                        }}
                    >
                        <i className="fa fa-bars" style={{ fontSize: "18px" }}></i>
                    </button>
                </div>
                <div style={{ padding: "20px" }}>
                    <h1>Responsive Sidebar</h1>
                    <p>Konten utama ada di sini.</p>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Daskboard;