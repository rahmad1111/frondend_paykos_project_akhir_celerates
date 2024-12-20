import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addPenghuni } from "../../../store/actions/userdata.actions";
import Swal from "sweetalert2";

function Tambahpenghuni() {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.datas);
    const id = localStorage.getItem('userId');

    const [formData, setFormData] = useState({
        harga_kamar: '',
        nama: '',
        no_telepon: '',
        roles: 'penghuni',
        nomer_kamar: '',
        periode_pembayaran: '',
        nomer_pengguna: '',
        password: '',
        id_pemilik: id,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.password) {
            Swal.fire({
                title: 'Ups...',
                text: 'Password harus diisi',
                icon: 'error',
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
            });
            return
        }
        dispatch(addPenghuni(formData)); // Langsung kirim `formData`

        setFormData({
            harga_kamar: '',
            nama: '',
            no_telepon: '',
            roles: 'penghuni',
            nomer_kamar: null,
            periode_pembayaran: '',
            nomer_pengguna: '',
            password: '',
            id_pemilik: id,
        });
        
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="form-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <h2>Tambah Penghuni</h2>
                <div className="form-group">
                    <label>Nama:</label>
                    <input
                        type="text"
                        name="nama"
                        value={formData.nama}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>No Telepon:</label>
                    <input
                        type="text"
                        name="no_telepon"
                        value={formData.no_telepon}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Nomor Kamar:</label>
                    <input
                        type="number"
                        name="nomer_kamar"
                        value={formData.nomer_kamar ?? ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Harga Kamar:</label>
                    <select
                        name="harga_kamar"
                        value={formData.harga_kamar}
                        onChange={handleChange}
                        className="form-control small-option"
                    >
                        <option value="">Pilih Harga</option>
                        <option value="Rp 350.000">Rp 350.000</option>
                        <option value="Rp 400.000">Rp 400.000</option>
                        <option value="Rp 600.000">Rp 600.000</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Periode Pembayaran:</label>
                    <select
                        name="periode_pembayaran"
                        value={formData.periode_pembayaran}
                        onChange={handleChange}
                        className="form-control small-option"
                    >
                        <option value="">Pilih Periode</option>
                        <option value="Bulan">Bulan</option>
                        <option value="Setengah Bulan">Setengah Bulan</option>
                        <option value="Tahunan">Tahunan</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Nomer Pengguna (Harus Unik):</label>
                    <input
                        type="text"
                        name="nomer_pengguna"
                        value={formData.nomer_pengguna}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password (Buat Password Awal):</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Tambahpenghuni;
