import { getComplain, deleteComplain } from "../../../store/actions/userdata.actions";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Swal from "sweetalert2";

function TampilandepanAdmin() {
    const dispatch = useDispatch();
    const { keluhan, loading, error } = useSelector((state) => state.datas);
    const [selectedKeluhan, setSelectedKeluhan] = useState(null);
    const [show, setShow] = useState(false);
    
    const handleShow = (keluhan) => {
        setSelectedKeluhan(keluhan);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedKeluhan(null);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Apakah Anda yakin?',
            text: 'Data yang dihapus tidak dapat dikembalikan!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteComplain(id));
                Swal.fire({
                    icon: 'success',
                    title: 'Dihapus!',
                    text: 'Data berhasil dihapus.',
                    timer: 2000,
                    showConfirmButton: false,
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    timerProgressBar: true,
                }).then(() => {
                    dispatch(getComplain());
                });
            }
        });
    };

    useEffect(() => {
        dispatch(getComplain());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginBlock: '1rem' }}>
                <Link to={"/admin/tambahpenghuni"}>
                    <Button variant="secondary" size="lg">
                        Tambah Penghuni
                    </Button>
                </Link>
                <Link to={"/admin/daftartagihan"}>
                    <Button variant="success" size="lg">
                        Tambah Tagihan
                    </Button>
                </Link>
            </div>
            <h5 style={{ marginBlock: '1rem' }}>Keluhan Kos</h5>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                {keluhan
                    .slice()
                    .reverse()
                    .map((keluhan) => (
                        <div style={{ maxWidth: '250px', width: '100%', flexBasis: '250px' }} key={keluhan.id}>
                            <Card style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Card.Body>
                                    <Card.Title>{keluhan.judul_keluhan}</Card.Title>
                                    <Card.Text>{keluhan.isi_keluhan}</Card.Text>
                                </Card.Body>
                                <div style={{ width: '100%' }}>
                                    <ListGroup.Item>{keluhan.createdAt}</ListGroup.Item>
                                    <Button 
                                        style={{ width: '100%' }} 
                                        variant="danger" 
                                        onClick={() => handleDelete(keluhan.id)}
                                    >
                                        Hapus
                                    </Button>
                                </div>
                            </Card>
                            <br />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default TampilandepanAdmin;
