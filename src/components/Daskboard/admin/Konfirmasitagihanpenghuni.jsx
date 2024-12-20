import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Konfirmasitagihanpenghuni() {
    return (
        <div>
            <h3>Konfirmasi Pembayaran</h3>
            <div className='grid'>
                WNFNKJEWKF
            </div>
            <Card style={{ width: 'auto' }}>
                <Card.Body>
                    <Card.Title>Nama Penggua</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Jumlah bayar</ListGroup.Item>
                    <ListGroup.Item>Batas Bayar</ListGroup.Item>
                    <ListGroup.Item>Status Bayar</ListGroup.Item>
                </ListGroup>
                <Link to={`/daskboard/detailkonfirmasitagihan/1`}>
                    <Button variant="primary">Konfirmasi Bayar</Button>
                </Link>
            </Card>
        </div>
    )
}

export default Konfirmasitagihanpenghuni;