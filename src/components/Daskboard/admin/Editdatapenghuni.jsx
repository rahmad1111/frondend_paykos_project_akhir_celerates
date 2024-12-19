import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../../styles/Admin/editdata.css';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useDispatch, useSelector } from 'react-redux';
import { geteditUserData, editUserData } from "../../../store/actions/userdata.actions";

function Editdata() {
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
    });

    // Fetch data pengguna berdasarkan ID dari URL
    useEffect(() => {
        dispatch(geteditUserData(id));
    }, [dispatch, id]);

    // Update formData setelah data pengguna diambil
    useEffect(() => {
        if (dataPengguna) {
            setFormData({
                harga_kamar: dataPengguna.harga_kamar || '',
                nama: dataPengguna.nama || '',
                no_telepon: dataPengguna.no_telepon || '',
                nomer_kamar: dataPengguna.nomer_kamar || null,
                periode_pembayaran: dataPengguna.periode_pembayaran || '',
                nomer_pengguna: dataPengguna.nomer_pengguna || '',
            });
        }
    }, [dataPengguna]);

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
        setFormData({
            harga_kamar: '',
            nama: '',
            no_telepon: '',
            nomer_kamar: null,
            periode_pembayaran: '',
            nomer_pengguna: '',
            password: '',
        });
        alertify.success('Data telah disimpan!');
        window.location.reload()
        window.location.replace('/daskboard/penghuni')
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
                <h2>Edit Penghuni</h2>
                <div className="form-group">
                    <label>Harga Kamar:</label>
                    <input
                        type="text"
                        name="harga_kamar"
                        value={formData.harga_kamar}
                        onChange={handleChange}
                    />
                </div>
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
                    <label>Nomer Kamar:</label>
                    <input
                        type="number"
                        name="nomer_kamar"
                        value={formData.nomer_kamar || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Periode Pembayaran:</label>
                    <input
                        type="text"
                        name="periode_pembayaran"
                        value={formData.periode_pembayaran}
                        onChange={handleChange}
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
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Editdata;
