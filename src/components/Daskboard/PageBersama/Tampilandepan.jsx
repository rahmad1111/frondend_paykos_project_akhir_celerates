import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getComplain } from "../../../store/actions/userdata.actions";
import TampilandepanAdmin from "../admin/TampilandepanAdmin";
import Tampilanawalpenghuni from "../penghuni/Tampilanawalpenghuni";

function Tampilandepan() {
  const dispatch = useDispatch();
  const nama = localStorage.getItem('nama')

  useEffect(() => {
    dispatch(getComplain());
  }, [dispatch]);

  const roles = localStorage.getItem('roles');

  const handlemenu = () => {
    if (roles == 'admin') {
      return (
        <div>
          <TampilandepanAdmin/>
        </div>
      )
    } else{
      return (
        <div>
          <Tampilanawalpenghuni/>
        </div>
      )
    }
  }

  return (
    <div className="awaltampil">
      <h1>Selamat Datang {nama}</h1>
      {handlemenu()}
    </div>
  );
}

export default Tampilandepan;
