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

    const handleLogout = () => {
        Swal.fire({
            title: 'Yakin mau keluar?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak',
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil',
                    text: 'Akun berhasil keluar',
                    timer: 2000,
                    showConfirmButton: false,
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    timerProgressBar: true,
                }).then(() => {
                    window.location.href = '/';
                });
            }
        });
    };

    if (token && role === 'admin') {
        return (
            <div className="dropdown">
                <button style={{padding : '1rem', border : 'none', borderRadius:'5px'}} onClick={toggleDropdown}>
                    ≡
                </button>
                <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                    <a href="/daskboard">Dashboard</a>
                    <a href={`/admin/profile/admin/${id}`}>Profil</a>
                </ul>
            </div> 
        );
    } else if (token && role === 'penghuni') {
        return (
            <div className="dropdown">
                <button style={{padding : '1rem', border : 'none', borderRadius:'5px'}} onClick={toggleDropdown}>
                    ≡
                </button>
                <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                    <a href="/daskboard">Dashboard</a>
                </ul>
            </div>
        );
    } else {
        return (
            <div className="dropdown">
                <button style={{padding : '1rem', border : 'none', borderRadius:'5px'}} onClick={toggleDropdown}>
                    ≡
                </button>
                <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                    <a href="/user/login">Masuk</a>
                    <a href="/user/register">Daftar</a>
                </ul>
            </div>
        );
    }
}

export default Dropdown;