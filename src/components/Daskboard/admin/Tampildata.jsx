import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../../styles/Admin/tampildata.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePenghuni, getUserData } from "../../../store/actions/userdata.actions";

function Tampildata() {
  const dispatch = useDispatch();
  const { dataPengguna, loading, error } = useSelector((state) => state.datas);

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
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      dispatch(deletePenghuni(id));
      window.location.reload();
    }
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
          filteredData.map((pengguna) => (
            <Card key={pengguna.id} className="costum-card" style={{ width: 'auto' }}>
              <Card.Header>{pengguna.id}</Card.Header>
              <Card.Body>
                <Card.Title>{pengguna.nama}</Card.Title>
                <Card.Text>{pengguna.no_telepon}</Card.Text>
                <Link to={`/daskboard/editpenghuni/${pengguna.id}`}>
                  <Button variant="primary">Edit</Button>
                </Link>
                <Link to={`/daskboard/buattagihan/${pengguna.id}`}>
                  <Button variant="secondary">Tambah Tagihan</Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(pengguna.id)}
                >
                  Hapus
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Data tidak ditemukan</p>
        )}
      </div>
    </div>
  );
}

export default Tampildata;
