import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { geteditUserData, getPembayaranByid } from '../../../store/actions/userdata.actions';
import { format } from 'date-fns';


function KonfimasiPembayaran() {
    const dispatch = useDispatch();
    const { dataPengguna, pembayaran, loading, error } = useSelector((state) => state.datas);
    console.log(pembayaran.filter(p => p.status === null));
    const id = localStorage.getItem('userId')

    useEffect(() => {
        dispatch(getPembayaranByid(id));
        dispatch(geteditUserData(id))
    }, [dispatch, id]);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: "100vh"
            }}>
                <div className='loader'></div>
            </div>
        )
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', width: '100%', padding: '2rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                <h3>Bayar Tagihan</h3>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '2rem', gap: '1rem', alignItems: 'center' }}>
                    {
                        pembayaran.filter(p => p.status === null || p.status === "Belum Bayar").length > 0 ? (
                            pembayaran.filter(p => p.status === null || p.status === "Belum Bayar").slice().reverse().map((p) => {
                                return (
                                    <div key={p.id}>
                                        <Card style={{ width: 'auto' }} >
                                            <Card.Body>
                                                <Card.Title>Tagihan : {dataPengguna.nama}</Card.Title>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item>Jumlah tagihan : {dataPengguna.harga_kamar}</ListGroup.Item>
                                                <ListGroup.Item>Batas tagihan : {format(new Date(p.batas_waktu), 'dd MMMM yyyy')}</ListGroup.Item>
                                                <ListGroup.Item>Status tagihan : {p.status}</ListGroup.Item>
                                            </ListGroup>
                                            <Link to={`/detailkonfirmasitagihan/${p.id}`}>
                                                <Button variant="primary">Bayar Tagihan</Button>
                                            </Link>
                                        </Card>
                                        <br />
                                    </div>
                                );
                            })
                        ) : (
                            <p>Tidak Ada Tagihan</p>
                        )
                    }


                </div>
            </div>

        </div>
    )
}

export default KonfimasiPembayaran;