import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function Dropdown() {
    const id = localStorage.getItem('userId')
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('roles');
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const closeDropdown = (event) => {
        if (event.target.closest('.dropdown') === null) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    if (token && role === 'admin') {
        return (
            <div className="dropdown">
                <button style={{ padding: '1rem', border: 'none', borderRadius: '5px' }} onClick={toggleDropdown}>
                    ≡
                </button>
                <ul className={`dropdown-menu-local ${isOpen ? 'open' : ''}`}>
                    <a href={`/admin/penghuni`}>Data Penghuni</a>
                    <a href={`/admin/konfirmasitagihanpenghuni/${id}`}>Konfirmasi Pembayaran</a>
                    <a href={`/admin/profile/admin/${id}`}>Profil</a>
                    <a href={`/admin/tambahinformasi`}>Tambah Informasi</a>
                </ul>
            </div>
        );
    } else if (token && role === 'penghuni') {
        return (
            <div className="dropdown">
                <button style={{ padding: '1rem', border: 'none', borderRadius: '5px' }} onClick={toggleDropdown}>
                    ≡
                </button>
                <ul className={`dropdown-menu-local ${isOpen ? 'open' : ''}`}>
                    <a href={`/profile/penghuni/${id}`}>Profil</a>
                    <a href="/konfirmasitagihan">Tagihan</a>
                    <a href="/tambahkeluhan">Keluhan</a>
                </ul>
            </div>
        );
    } else {
        return (
            <div className="dropdown">
                <button style={{ padding: '1rem', border: 'none', borderRadius: '5px' }} onClick={toggleDropdown}>
                    ≡
                </button>
                <ul className={`dropdown-menu-local ${isOpen ? 'open' : ''}`}>
                    <a href="/user/login">Masuk</a>
                    <a href="/user/register">Daftar</a>
                </ul>
            </div>
        );
    }
}

export default Dropdown;