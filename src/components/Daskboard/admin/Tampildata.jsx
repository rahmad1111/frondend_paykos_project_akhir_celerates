import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Modal from 'react-bootstrap/Modal';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePenghuni, getUserData } from "../../../store/actions/userdata.actions";
import Swal from 'sweetalert2';

function Tampildata() {
  const dispatch = useDispatch();
  const { dataPengguna, loading, error } = useSelector((state) => state.datas);
  // const [show, setShow] = useState(false);

  const [selectedPenghuni, setSelectedPenghuni] = useState(null);
  // const handleClose = () => setShow(false);
  // const handleShow = (dataPengguna) => {
  //   setSelectedPenghuni(dataPengguna);
  //   setShow(true)
  // };

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
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Data yang dihapus tidak dapat dikembalikan!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePenghuni(id));
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
          window.location.reload();
        });
      }
    })
    setFilteredData((prevData) => prevData.filter((pengguna) => pengguna.id !== id));
    setSelectedPenghuni(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ minHeight: '85vh', padding: '2rem' }}>
      <p>Data Penghuni</p>
      <div className="search-container">
        <input style={{ width: "100%", padding: '0.5rem', borderRadius: '5px', borderWidth: '1px', marginTop: '0.5rem' }}
          type="text"
          placeholder="Cari..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className='flex-tampildata'>
        {filteredData.length > 0 ? (
          filteredData.map((pengguna) => (
            <div style={{ flexBasis: '250px', maxWidth: '300px' }} key={pengguna.id}>
              <Card className="costum-card" style={{ width: 'auto' }}>
                <Card.Header>Kamar : {pengguna.nomer_kamar}</Card.Header>
                <Card.Body>
                  <Card.Title>{pengguna.nama}</Card.Title>
                  <Card.Text>{pengguna.no_telepon}</Card.Text>
                </Card.Body>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1rem' }}>
                  <a className='btn btn-primary' href={`/admin/editpenghuni/${pengguna.id}`}>Edit</a>
                  <Button
                    style={{ width: '100%' }}
                    variant="danger"
                    onClick={() => handleDelete(pengguna.id)}
                  >
                    Hapus
                  </Button>
                </div>
              </Card>
            </div>

          ))
        ) : (
          <p>Data tidak ditemukan</p>
        )}
      </div>
    </div>
  );
}
export default Tampildata;
