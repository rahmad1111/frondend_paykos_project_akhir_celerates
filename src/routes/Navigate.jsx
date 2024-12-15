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
import Tampilandepan from "../components/Daskboard/admin/Tampilandepan";
import Tampildata from "../components/Daskboard/admin/Tampildata";
import Editdata from "../components/Daskboard/admin/Editdatapenghuni";
import Tampilandatakos from "../components/Daskboard/admin/Tampilandatakos";
import Profile from "../components/Daskboard/admin/Profile";
import Tambahpenghuni from "../components/Daskboard/admin/Tambahpenghuni";
import Tambahtagihan from "../components/Daskboard/admin/Tambahtagihan";
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
                    <Route path="datakos/:id" element={<Tampilandatakos/>}/>
                    <Route path="profile/:id" element={<Profile/>}/>
                    <Route path="tambahpenghuni" element={<Tambahpenghuni/>}/>
                    <Route path="buattagihan/:id" element={<Tambahtagihan/>}/>
                    
                    {/* Page Pengguna */}
                    <Route path="daftartagihan" element={<TestTampilan1/>}/>
                    <Route path="profilpengguna" element={<TestTampilan2/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default Navigate