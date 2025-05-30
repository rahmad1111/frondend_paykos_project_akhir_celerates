import { useEffect, useState } from "react";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPembayaranAdmin, getUserData } from "../../../store/actions/userdata.actions";

function Tambahtagihan() {
    const dispatch = useDispatch();
    const { dataPengguna, loading, error } = useSelector((state) => state.datas);
    const [formData, setFormData] = useState({
        batas_waktu: '',
        no_rekening: '68365738',
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

        // Iterasi melalui semua penghuni
        dataPengguna.forEach(penghuni => {
            const dataTagihan = {
                id_pemilik: 1, // Misalnya, id pemilik selalu 1
                id_penghuni: penghuni.id,
                batas_waktu: formData.batas_waktu,
                no_rekening: formData.no_rekening,
                status: 'Belum Bayar',
            };
            dispatch(addPembayaranAdmin(dataTagihan)); // Kirim data tagihan untuk setiap penghuni
        });

        setFormData({
            batas_waktu: '',
            no_rekening: '',
        });

        alertify.success('Tagihan berhasil dikirim ke semua penghuni!');
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    let hari1 = new Date();hari1.setDate(hari1.getDate() + 2).to;
    let hari2 = new Date();hari2.setDate(hari2.getDate() + 4);
    let hari3 = new Date();hari3.setDate(hari3.getDate() + 10);


    return (
        <div className="form-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <h2>Tambah Tagihan</h2>
                <div className="form-group">
                    <label>Batas Waktu: </label>
                    <select
                        name="batas_waktu"
                        value={formData.batas_waktu}
                        onChange={handleChange}
                        className="form-control small-option"
                    >
                        <option value="">Pilih Batas</option>
                        <option value={hari1.toISOString()}>2 hari</option>
                        <option value={hari2.toISOString()}>4 hari</option>
                        <option value={hari3.toISOString()}>10 hari</option>
                    </select>
                </div>
                <button type="submit" className="submit-btn">Kirim Tagihan ke Semua Penghuni</button>
            </form>
        </div>
    );
}

export default Tambahtagihan;
