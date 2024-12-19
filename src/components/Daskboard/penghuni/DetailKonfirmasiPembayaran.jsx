import { useState } from "react";
import '../../../styles/Admin/editdata.css';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useDispatch, useSelector } from 'react-redux';
import { konfirmasiPembayaran } from "../../../store/actions/userdata.actions";
import { useParams } from "react-router-dom";

function DetailKonfirmasiPembayaran() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.datas);

    const [formData, setFormData] = useState({
        jenis_pembayaran: '',
    });


    console.log('data', formData.jenis_pembayaran)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(konfirmasiPembayaran({ id, ...formData }));
        console.log("Data yang dikirim:", { id, ...formData });
        setFormData({
            jenis_pembayaran: '',
        });
        alertify.success('Data telah disimpan!');
        // window.location.replace('/daskboard/penghuni')
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
                <h2>Konfirmasi Pembayaran</h2>
                <div className="form-group">
                    <label>Jenis Pembayaran :</label>
                    <input
                        type="text"
                        name="jenis_pembayaran"
                        value={formData.jenis_pembayaran}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Bukti:</label>
                    <input
                        type="file"
                        name="nama"
                        value={formData.nama}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default DetailKonfirmasiPembayaran;
