import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addPenghuni } from "../../../store/actions/userdata.actions";
import Swal from "sweetalert2";

function Tambahpenghuni() {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.datas);
    const id = localStorage.getItem('userId');

    const [formData, setFormData] = useState({
        harga_kamar: '500.000',
        nama: '',
        no_telepon: '',
        roles: 'penghuni',
        nomer_kamar: '',
        periode_pembayaran: 'Bulanan',
        nomer_pengguna: '',
        password: '12345',
        id_pemilik: id,
    });

    const generateNomorPengguna = () => {
        const uniqueNumber = 'RKU' + Math.floor(Math.random() * 1000);
        setFormData((prevData) => ({
            ...prevData,
            nomer_pengguna: uniqueNumber,
        }));
    };

    useEffect(() => {
        generateNomorPengguna();
    }, []);

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
        dispatch(addPenghuni(formData));

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
                    <span>{formData.harga_kamar}</span>
                </div>
                <div className="form-group">
                    <label>Periode Pembayaran:</label>
                    <span>{formData.periode_pembayaran}</span>
                </div>
                <div className="form-group">
                    <label>Nomer Pengguna:</label>
                    <span>{formData.nomer_pengguna}</span>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <span>{formData.password}</span>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Tambahpenghuni;
