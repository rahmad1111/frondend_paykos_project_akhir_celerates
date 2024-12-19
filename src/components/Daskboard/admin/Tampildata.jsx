import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import '../../../styles/Admin/tampildata.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePenghuni, getUserData } from "../../../store/actions/userdata.actions";

function Tampildata() {
  const dispatch = useDispatch();
  const { dataPengguna, loading, error } = useSelector((state) => state.datas);
  const [show, setShow] = useState(false);

  const [selectedPenghuni, setSelectedPenghuni] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = (dataPengguna) => {
    setSelectedPenghuni(dataPengguna);
    setShow(true)
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(dataPengguna)) {
      const filtered = dataPengguna.filter((pengguna) =>
        (pengguna.nama || '').toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [dataPengguna, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (id) => {
    dispatch(deletePenghuni(id));
    setFilteredData((prevData) => prevData.filter((pengguna) => pengguna.id !== id));
    setSelectedPenghuni(null);
    console.log('idnya: ', id)
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <p>Data Penghuni</p>
      <div className="search-container">
        <input
          type="text"
          placeholder="Cari..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className='flex-tampildata'>
        {filteredData.length > 0 ? (
          filteredData.map((pengguna, index) => (
            <div key={pengguna.id}>
              <Card className="costum-card" style={{ width: 'auto' }}>
                <Card.Header>{index + 1}</Card.Header>
                <Card.Body>
                  <Card.Title>{pengguna.nama}</Card.Title>
                  <Card.Text>{pengguna.no_telepon}</Card.Text>
                  <Link to={`/daskboard/editpenghuni/${pengguna.id}`}>
                    <Button variant="primary">Edit</Button>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => handleShow(pengguna)}
                  >
                    Hapus
                  </Button>
                </Card.Body>
              </Card>

            </div>
          ))
        ) : (
          <p>Data tidak ditemukan</p>
        )}
      </div>
      {selectedPenghuni && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Apakah Ingin Menghapus?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Batal
            </Button>
            <Button variant="primary" onClick={() => {
              handleDelete(selectedPenghuni.id);
              handleClose();
            }} >
              Oke
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
export default Tampildata;
