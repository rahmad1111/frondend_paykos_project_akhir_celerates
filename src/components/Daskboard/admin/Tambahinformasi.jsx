import { useState } from "react";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addInfomasi } from "../../../store/actions/userdata.actions";

function Tambahinformasi() {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.datas);

    const [formData, setFormData] = useState({
        informasi: '',
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
        dispatch(addInfomasi(formData ));
        alertify.success('Data telah disimpan!');
        setFormData({
            informasi: '',
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
                <h2>Tambah Informasi</h2>
                <div className="form-group">
                    <label>Informasi:</label>
                    <input
                        type="text"
                        name="informasi"
                        value={formData.informasi}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default Tambahinformasi;