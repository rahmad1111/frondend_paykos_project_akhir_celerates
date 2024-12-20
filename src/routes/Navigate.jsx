import { Routes, Route } from 'react-router-dom';
import Layouts from "../pages/Layouts";
import LandingPage from "../pages/Landing/LandingPage";
import Login from "../pages/Auth/Login";
import Daskboard from "../pages/Home/Daskboard";

// Halaman Admin
import Tampildata from "../components/Daskboard/admin/Tampildata";
import Editdata from "../components/Daskboard/admin/Editdatapenghuni";
import ProfileAdmin from "../components/Daskboard/admin/ProfileAdmin";
import Tambahpenghuni from "../components/Daskboard/admin/Tambahpenghuni";
import Tambahtagihan from "../components/Daskboard/admin/Tambahtagihan";
import Tambahinformasi from "../components/Daskboard/admin/Tambahinformasi";
import Konfirmasitagihanpenghuni from "../components/Daskboard/admin/Konfirmasitagihanpenghuni";

// Halaman Penghuni
import TestTampilan1 from "../components/Testing/Tampilan1";
import TestTampilan2 from "../components/Testing/Tampilan2";
import ProfilePenghuni from "../components/Daskboard/penghuni/ProfilePenghuni";
import TambahKeluhan from "../components/Daskboard/penghuni/TambahKeluhan";
import KonfimasiPembayaran from "../components/Daskboard/penghuni/KonfimasiPembayaran";
import DetailKonfirmasiPembayaran from "../components/Daskboard/penghuni/DetailKonfirmasiPembayaran";

function Navigate() {
    return (
        <Routes>
            <Route path="/" element={<Layouts />}>
                <Route index element={<LandingPage />} />
                <Route path="login" element={<Login />} />
                <Route path="/daskboard" element={<Daskboard />} />
                <Route path="/admin" element={<Daskboard />} />
                <Route path="/admin/penghuni" element={<Tampildata />} />
                <Route path="/admin/editpenghuni/:id" element={<Editdata />} />
                <Route path="/admin/profile/admin/:id" element={<ProfileAdmin />} />
                <Route path="/admin/tambahinformasi" element={<Tambahinformasi />} />
                <Route path="/admin/tambahpenghuni" element={<Tambahpenghuni />} />
                <Route path="/admin/daftartagihan" element={<Tambahtagihan />} />
                <Route path="/admin/konfirmasitagihanpenghuni/:id" element={<Konfirmasitagihanpenghuni />} />

                <Route path="/daftartagihan" element={<TestTampilan1 />} />
                <Route path="/profilpengguna" element={<TestTampilan2 />} />
                <Route path="/profile/penghuni/:id" element={<ProfilePenghuni />} />
                <Route path="/tambahkeluhan" element={<TambahKeluhan />} />
                <Route path="/konfirmasitagihan" element={<KonfimasiPembayaran />} />
                <Route path="/detailkonfirmasitagihan/:id" element={<DetailKonfirmasiPembayaran />} />
            </Route>
        </Routes>
    );
}

export default Navigate;
