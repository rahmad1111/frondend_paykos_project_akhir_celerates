import { getComplain, deleteComplain } from "../../../store/actions/userdata.actions";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
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
        dispatch(deleteComplain(id));
        console.log("Keluhan dengan ID:", id, "dihapus.");
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
            <Link to={"/daskboard/tambahpenghuni"}>
                <Button variant="secondary" size="lg">
                    Tambah Penghuni
                </Button>
            </Link>
            <br />
            <br />
            <Link to={"/daskboard/buattagihan"}>
                <Button variant="success" size="lg">
                    Tambah Tagihan
                </Button>
            </Link>
            <br />
            <br />
            <br />
            <h5>Keluhan Kos</h5>
            {keluhan
                .slice()
                .reverse()
                .map((keluhan) => (
                    <div key={keluhan.id}>
                        <Card style={{ width: "auto" }}>
                            <Card.Body>
                                <Card.Title>{keluhan.judul_keluhan}</Card.Title>
                                <Card.Text>{keluhan.isi_keluhan}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{keluhan.createdAt}</ListGroup.Item>
                            </ListGroup>
                            <Button
                                variant="danger"
                                onClick={() => handleShow(keluhan)}
                            >
                                Hapus
                            </Button>
                        </Card>
                        <br />
                    </div>
                ))}
            {selectedKeluhan && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Apakah ingin menghapus keluhan?
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Batal
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => {
                                handleDelete(selectedKeluhan.id);
                                handleClose();
                            }}
                        >
                            Oke
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    )
}

export default TampilandepanAdmin;