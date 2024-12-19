import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../../styles/Admin/editdata.css';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useDispatch, useSelector } from 'react-redux';
import { geteditUserData, editUserData } from "../../../store/actions/userdata.actions";

function ProfilePenghuni() {
    const { id } = useParams(); // Ambil ID dari URL
    const dispatch = useDispatch();
    const { dataPengguna, loading, error } = useSelector((state) => state.datas);

    const [formData, setFormData] = useState({
        harga_kamar: '',
        nama: '',
        no_telepon: '',
        roles: '',
        nomer_kamar: null,
        periode_pembayaran: '',
        nomer_pengguna: '',
        password: '',
    });

    useEffect(() => {
        dispatch(geteditUserData(id));
    }, [dispatch, id]);
    

    useEffect(() => {
        if (dataPengguna) {
            if (dataPengguna.password === dataPengguna.password) {
                setFormData({
                    nama: dataPengguna.nama || '',
                    no_telepon: dataPengguna.no_telepon || '',
                    nomer_pengguna: dataPengguna.nomer_pengguna || '',
                    nomer_kamar: dataPengguna.nomer_kamar || '',
                    periode_pembayaran: dataPengguna.periode_pembayaran || '',
                });
            } else {
                setFormData({
                    nama: dataPengguna.nama || '',
                    no_telepon: dataPengguna.no_telepon || '',
                    nomer_pengguna: dataPengguna.nomer_pengguna || '',
                    nomer_kamar: dataPengguna.nomer_kamar || '',
                    periode_pembayaran: dataPengguna.periode_pembayaran || '',
                    password: '',
                });
            }
        }
    }, [dataPengguna]);

    console.log('data', formData.harga_kamar)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editUserData({ id, ...formData }));
        console.log("Data yang dikirim:", { id, ...formData });
        alertify.success('Data telah disimpan!');
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
                <h2>Profil Edit</h2>
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
                    <label>Nomer kamar:</label>
                    <input
                        type="text"
                        name="nomer_pengguna"
                        value={formData.nomer_kamar}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label>Periode Bayar:</label>
                    <input
                        type="text"
                        name="nomer_pengguna"
                        value={formData.periode_pembayaran}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label>Nomer Pengguna:</label>
                    <input
                        type="text"
                        name="nomer_pengguna"
                        value={formData.nomer_pengguna}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label>Password:(Kosongkan Jika tidak ingin mengubah)</label>
                    <input
                        type="text"
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

export default ProfilePenghuni;