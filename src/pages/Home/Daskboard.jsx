import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getComplain } from "../../store/actions/userdata.actions";
import TampilandepanAdmin from "../../components/Daskboard/admin/TampilandepanAdmin";
import Tampilanawalpenghuni from "../../components/Daskboard/penghuni/Tampilanawalpenghuni";

function Daskboard() {
    const dispatch = useDispatch();
    const nama = localStorage.getItem('nama');
    const roles = localStorage.getItem('roles');

    useEffect(() => {
        dispatch(getComplain());
    }, [dispatch]);

    const handleMenu = () => {
        if (roles === 'admin') {
            return <TampilandepanAdmin />;
        } else {
            return <Tampilanawalpenghuni />;
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ padding: '2rem', minHeight: '85vh', maxWidth: '1200px', width: '100%' }}>
                <h1>Selamat Datang {nama}</h1>
                {handleMenu()}
            </div>
        </div>
    );
}

export default Daskboard;
