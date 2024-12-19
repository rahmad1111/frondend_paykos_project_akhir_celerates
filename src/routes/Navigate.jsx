import Login from "../pages/Auth/Login";
// import AdminPage from '../pages/Admin/AdminPage'
import {
    Routes,
    Route,
} from "react-router-dom";
import LandingPage from "../pages/Landing/LandingPage";
import Daskboard from "../pages/Home/Daskboard";
import TestTampilan1 from "../components/Testing/Tampilan1";
import TestTampilan2 from "../components/Testing/Tampilan2";
// import TestTampilan3 from "../components/Testing/Tampilan3";
// import TestTampilan4 from "../components/Testing/Tampilan4";
// import TestTampilan5 from "../components/Testing/Tampilan5";
import Layouts from "../pages/Layouts";
import Tampilandepan from "../components/Daskboard/PageBersama/Tampilandepan";
import Tampildata from "../components/Daskboard/admin/Tampildata";
import Editdata from "../components/Daskboard/admin/Editdatapenghuni";
import ProfileAdmin from "../components/Daskboard/admin/ProfileAdmin";
import Tambahpenghuni from "../components/Daskboard/admin/Tambahpenghuni";
import Tambahtagihan from "../components/Daskboard/admin/Tambahtagihan";
import ProfilePenghuni from "../components/Daskboard/penghuni/ProfilePenghuni";
import Tambahinformasi from "../components/Daskboard/admin/Tambahinformasi";
import TambahKeluhan from "../components/Daskboard/penghuni/TambahKeluhan";
import KonfimasiPembayaran from "../components/Daskboard/penghuni/KonfimasiPembayaran";
import DetailKonfirmasiPembayaran from "../components/Daskboard/penghuni/DetailKonfirmasiPembayaran";
import Detailkonfirmasitagihanpenghuni from "../components/Daskboard/admin/Detailkonfirmasitagihanpenghuni";
import Konfirmasitagihanpenghuni from "../components/Daskboard/admin/Konfirmasitagihanpenghuni";
// import Tampilandepan from "../components/Daskboard/admin/Tampilandepan";
// import Tampildata from "../components/Daskboard/admin/Tampildata";

function Navigate() {
    return (
        <Routes>
            <Route path="/" element={<Layouts />} >
                <Route index element={<LandingPage/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="daskboard" element={<Daskboard/>}>
                    {/* Page Admin */}
                    <Route index element={<Tampilandepan/>}/>
                    <Route path="penghuni" element={<Tampildata/>}/>
                    <Route path="editpenghuni/:id" element={<Editdata/>}/>
                    <Route path="profile/admin/:id" element={<ProfileAdmin/>}/>
                    <Route path="tambahinformasi" element={<Tambahinformasi/>}/>
                    <Route path="tambahpenghuni" element={<Tambahpenghuni/>}/>
                    <Route path="buattagihan" element={<Tambahtagihan/>}/>
                    <Route path="konfirmasitagihanpenghuni" element={<Konfirmasitagihanpenghuni/>}/>
                    <Route path="detailkonfirmasitagihanpengguna/1" element={<Detailkonfirmasitagihanpenghuni/>}/>
                    
                    {/* Page Pengguna */}
                    <Route path="daftartagihan" element={<TestTampilan1/>}/>
                    <Route path="profilpengguna" element={<TestTampilan2/>}/>
                    <Route path="profile/penghuni/:id" element={<ProfilePenghuni/>}/>
                    <Route path="tambahkeluhan" element={<TambahKeluhan/>}/>
                    <Route path="konfirmasitagihan" element={<KonfimasiPembayaran/>}/>
                    <Route path="detailkonfirmasitagihan/:id" element={<DetailKonfirmasiPembayaran/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default Navigate