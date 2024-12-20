import { useState } from "react";
import { useDispatch } from 'react-redux';
import { imgSupabase } from "../../../store/actions/supabase.action";
import { konfirmasiPembayaran } from "../../../store/actions/userdata.actions";
import { useParams } from "react-router-dom";

function DetailKonfirmasiPembayaran() {
    const role = localStorage.getItem('roles')
    const idPenghuni = localStorage.getItem('userId');
    const { id } = useParams();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        id_penghuni: '',
        jenis_pembayaran: '',
        bukti:''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(formData.bukti) {
            const file = formData.bukti;
            const fileParts = file.name.split('.').filter(Boolean);
            const fileName = fileParts.slice(0, -1).join('.');
            const fileType = fileParts.slice(-1);
            const timestamp = new Date().toISOString();
            const fileImg = fileName + ' ' + timestamp + '.' + fileType;

            let imgBukti = null;
            imgBukti = await imgSupabase(fileImg, file);
            const newBayar = {
                id_pemilik: 1,
                id_penghuni: idPenghuni,
                jenis_pembayaran: formData.jenis_pembayaran,
                bukti: imgBukti,
                status:'Belum Bayar'
            }
            dispatch(konfirmasiPembayaran(id, newBayar));
        };

        setFormData({
            jenis_pembayaran: '',
            bukti:''
        });
    };

    if(role === 'penghuni') {
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
                            onChange={(e) => setFormData({...formData,[e.target.name]: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Bukti:</label>
                        <input
                            type="file"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    bukti: e.target.files[0],
                                })
                            }
                            accept="image/jpeg, image/png"
                            name="bukti"
                        />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        );
    } else {
        return (
            <h1>Anda tidak memiliki akses</h1>
        )
    }
};

export default DetailKonfirmasiPembayaran;
