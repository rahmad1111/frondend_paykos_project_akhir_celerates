import { useState } from "react";
import '../../../styles/Admin/editdata.css';
import { useDispatch, useSelector } from 'react-redux';
import { addKeluhan } from "../../../store/actions/userdata.actions";

function TambahKeluhan() {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.datas);

    const [formData, setFormData] = useState({
        judul_keluhan: '',
        isi_keluhan: '',
    });

    console.log('data', formData.informasi)
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
        console.log("Data yang dikirim:",  formData );
        setFormData({
            judul_keluhan: '',
            isi_keluhan: '',
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
                <h2>Tambah Keluhan</h2>
                <div className="form-group">
                    <label>Judul:</label>
                    <input
                        type="text"
                        name="judul_keluhan"
                        value={formData.judul_keluhan}
                        onChange={handleChange}
                    />
                </div>
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