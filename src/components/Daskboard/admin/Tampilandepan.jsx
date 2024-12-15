import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
function Tampilandepan() {
  return (
    <div className="awaltampil">
      <h1>Selamat Datang Admin</h1>
      <p>Ini adalah tampilan dashboard admin</p>
      <Link to={'/daskboard/tambahpenghuni'}>
        <Button variant="secondary" size="lg">
            Tambah Penghuni
        </Button>
      </Link>
      <br/><br/>
      <Link to={'/daskboard/tambahtagihan'}>
        <Button variant="success" size="lg">
            Tambah Tagihan
        </Button>
      </Link>
      <br/><br/><br/>
      <h5>Keluhan Kos</h5>
      
    </div>
  );
}

export default Tampilandepan;