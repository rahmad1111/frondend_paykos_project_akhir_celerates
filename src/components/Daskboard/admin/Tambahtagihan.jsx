import { useEffect, useState } from "react";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPembayaranAdmin, getUserData } from "../../../store/actions/userdata.actions";

function Tambahtagihan() {
    const dispatch = useDispatch();
    const { dataPengguna, loading, error } = useSelector((state) => state.datas);
    const [formData, setFormData] = useState({
        id_penghuni: '',
        batas_waktu: '',
        no_rekening: '',
        status: '',
    });

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataTagihan = {
            id_pemilik : 1,
            id_penghuni: formData.id_penghuni,
            batas_waktu: formData.batas_waktu,
            no_rekening: formData.no_rekening,
            status: 'Belum Bayar',
        };
        console.log(dataTagihan);
        dispatch(addPembayaranAdmin(dataTagihan)); // Langsung kirim `formData`
        setFormData({
            id_penghuni: '',
            batas_waktu: '',
            no_rekening: '',
            status: '',
        });
        // window.location.replace('/daskboard/penghuni');
        if (formData.id_penghuni || formData.batas_waktu || formData.no_rekening) {
            alertify.success('Data telah disimpan!');
            return;
        }
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
                <h2>Tambah Tagihan</h2>
                <div className="form-group">
                    <label>ID Pengguna:</label>
                    <select
                        name="id_penghuni"
                        value={formData.id_penghuni}
                        onChange={handleChange}
                        className="form-control small-option"
                    >
                        <option value="">Pilih Penguna</option>
                        {dataPengguna.map((pengguna) => (
                            <option key={pengguna.id} value={pengguna.id}>
                                {pengguna.nama}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Batas Waktu:</label>
                    <select
                        name="batas_waktu"
                        value={formData.batas_waktu}
                        onChange={handleChange}
                        className="form-control small-option"
                    >
                        <option value="">Pilih Batas</option>
                        <option value="2 hari">2 hari</option>
                        <option value="4 hari">4 hari</option>
                        <option value="10 hari">10 hari</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>No Rekening:</label>
                    <select
                        name="no_rekening"
                        value={formData.no_rekening}
                        onChange={handleChange}
                        className="form-control small-option"
                    >
                        <option value="">Pilih Rekening</option>
                        <option value="68365738">68365738</option>
                        <option value="87738399">87738399</option>
                        <option value="76878790">76878790</option>
                    </select>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default Tambahtagihan;