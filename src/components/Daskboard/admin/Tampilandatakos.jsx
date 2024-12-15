import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataKos, updateDataKos } from "../../../store/actions/userdata.actions";
import { useParams } from "react-router-dom";

function Tampilandatakos() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { dataKos, loading, error } = useSelector((state) => state.datas);

    const [formData, setFormData] = useState({
        batas_pembayaran: '',
        jenis_pembayaran: '',
        no_rekening: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        dispatch(getDataKos(id));
    }, [dispatch, id]);

    useEffect(() => {
        console.log("Data Kos:", dataKos);
        if (Array.isArray(dataKos) && dataKos.length > 0) {
            const kosData = dataKos[0];
            setFormData({
                batas_pembayaran: kosData.batas_pembayaran || '',
                jenis_pembayaran: kosData.jenis_pembayaran || '',
                no_rekening: kosData.no_rekening || '',
            });
        }
    }, [dataKos]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Data yang dikirim:", { id, ...formData });

        try {
            await dispatch(updateDataKos({ id, ...formData }));
            setSuccessMessage('Data berhasil diperbarui!');
        } catch (error) {
            console.error("Gagal memperbarui data:", error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!dataKos || !Array.isArray(dataKos) || dataKos.length === 0) {
        return <p>Data Kos tidak ditemukan</p>;
    }

    return (
        <div className="form-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <h2>Data Kos</h2>
                {successMessage && <p className="success-message">{successMessage}</p>}
                <div className="form-group">
                    <label>Batas Pembayaran:</label>
                    <input
                        type="text"
                        name="batas_pembayaran"
                        value={formData.batas_pembayaran}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Jenis Pembayaran:</label>
                    <input
                        type="text"
                        name="jenis_pembayaran"
                        value={formData.jenis_pembayaran}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>No Rekening:</label>
                    <input
                        type="text"
                        name="no_rekening"
                        value={formData.no_rekening}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default Tampilandatakos;
