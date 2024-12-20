import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPembayaranPenggunaByID, konfirmasiPembayaranDariPemilik, getUserData } from '../../../store/actions/userdata.actions';
import Swal from 'sweetalert2';

function Konfirmasitagihanpenghuni() {
    const dispatch = useDispatch();
    const { pembayaranconfir, dataPengguna, loading, error } = useSelector((state) => state.datas);
    const pembayaranId = pembayaranconfir.map((item) => item.id_penghuni);
    const penghuniId = dataPengguna.map((item) => item.id);
    const matchedIds = penghuniId.filter((id) => pembayaranId.includes(id));
    const namaPenghuni = dataPengguna.filter((item) => matchedIds.includes(item.id));
    const id = localStorage.getItem('userId');
    
    useEffect(() => {
        dispatch(getPembayaranPenggunaByID(id));
        dispatch(getUserData());
    }, [dispatch, id]);

    const handleTolak = async (pembayaranId) => {
        const updatedPembayaran = {
            status: null,
        };
        dispatch(konfirmasiPembayaranDariPemilik(pembayaranId, updatedPembayaran));
        window.location.reload();
    }

    const handleTerima = async (pembayaranId) => {
        const updatedPembayaran = {
            status: 'Lunas',
        };
        dispatch(konfirmasiPembayaranDariPemilik(pembayaranId, updatedPembayaran));
        window.location.reload();
    }

    const showImage = (imageUrl) => {
        Swal.fire({
            title: 'Bukti Pembayaran',
            imageUrl: imageUrl,
            imageAlt: 'Bukti Pembayaran',
            showCloseButton: true,
        });
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div style={{ minHeight:'75vh', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', justifyContent: 'start', marginBlock: '2rem', padding : '2rem' }}>
            <h3>Konfirmasi Pembayaran</h3>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
                {pembayaranconfir?.filter((p) => p.status === 'Belum Bayar').map((p) => {
                    return (
                        <div key={p.id}>
                            <Card style={{ flexBasis: '300px', width: '100%', maxWidth: '360px', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3>Nama : {namaPenghuni.length > 0 ? namaPenghuni.find(item => item.id === p.id_penghuni)?.nama : 'Tidak ditemukan'}</h3>
                                <div className="list-group-flush">
                                    <button onClick={() => showImage(p.bukti)} style={{ padding: '10px', cursor: 'pointer', backgroundColor: 'transparent', border: 'none', color: '#007bff' }}>
                                        Lihat Bukti Pembayaran
                                    </button>
                                    <ListGroup.Item>Jumlah bayar : {namaPenghuni.length > 0 ? namaPenghuni.find(item => item.id === p.id_penghuni)?.harga_kamar : '-'}</ListGroup.Item>
                                    <ListGroup.Item>Batas Bayar : {p.batas_waktu}</ListGroup.Item>
                                    <ListGroup.Item>Status Bayar : {p.status}</ListGroup.Item>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem' }}>
                                    <Button onClick={() => handleTolak(p.id)} variant="danger">Tolak</Button>
                                    <Button onClick={() => handleTerima(p.id)} className="btn btn-success">Terima</Button>
                                </div>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Konfirmasitagihanpenghuni;
