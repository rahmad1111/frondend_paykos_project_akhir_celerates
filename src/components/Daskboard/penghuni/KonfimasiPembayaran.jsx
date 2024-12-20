import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { geteditUserData, getPembayaranByid } from '../../../store/actions/userdata.actions';

function KonfimasiPembayaran() {
    const dispatch = useDispatch();
    const { dataPengguna, pembayaran, loading, error } = useSelector((state) => state.datas);
    const id = localStorage.getItem('userId')

    useEffect(() => {
        dispatch(getPembayaranByid(id));
        dispatch(geteditUserData(id))
    }, [dispatch, id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h3>Konfirmasi Pembayaran</h3>

            {pembayaran.slice().reverse().map((p) => {
                return (
                    <div key={p.id}>
                        <Card style={{ width: 'auto' }} >
                            <Card.Body>
                                <Card.Title>Tagihan : {dataPengguna.nama}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Jumlah bayar : {dataPengguna.harga_kamar}</ListGroup.Item>
                                <ListGroup.Item>Batas Bayar : {p.batas_waktu}</ListGroup.Item>
                                <ListGroup.Item>Status Bayar : { p.status }</ListGroup.Item>
                            </ListGroup>
                            <Link to={`/daskboard/detailkonfirmasitagihan/${p.id}`}>
                                <Button variant="primary">Konfirmasi Bayar</Button>
                            </Link>
                        </Card>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default KonfimasiPembayaran;