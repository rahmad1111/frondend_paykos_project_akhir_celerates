import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPembayaranPenggunaByID } from '../../../store/actions/userdata.actions';

function Konfirmasitagihanpenghuni() {
    const dispatch = useDispatch();
    const { pembayaranconfir, loading, error } = useSelector((state) => state.datas);
    const id = localStorage.getItem('userId')

    useEffect(() => {
        dispatch(getPembayaranPenggunaByID(id));
    }, [dispatch, id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h3>Konfirmasi Pembayaran Pemilik</h3>

            {pembayaranconfir.slice().reverse().map((p) => {
                return (
                    <div key={p.id}>
                        <Card style={{ width: 'auto' }} >
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Jumlah bayar : {p.harga_kamar}</ListGroup.Item>
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

export default Konfirmasitagihanpenghuni;