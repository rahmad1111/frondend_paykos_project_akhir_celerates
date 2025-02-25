import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addKeluhan } from "../../../store/actions/userdata.actions";
import alertify from 'alertifyjs';

function TambahKeluhan() {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.datas);

    const [formData, setFormData] = useState({
        judul_keluhan: 'NULL',
        isi_keluhan: '',
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
        dispatch(addKeluhan(formData));
        setFormData({
            judul_keluhan: '',
            isi_keluhan: '',
        });
        alertify.success('Keluhan berhasil dikirim');
    };

    if (loading) {
        return <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: "100vh"
        }}>
            <div className='loader'></div>
        </div>
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="form-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <h2>Tambah Keluhan</h2>
                <div className="form-group">
                    <label>Keluhan:</label>
                    <input
                        type="text"
                        name="isi_keluhan"
                        value={formData.isi_keluhan}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default TambahKeluhan;