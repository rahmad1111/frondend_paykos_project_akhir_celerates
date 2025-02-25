import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
// import { Form, Button, Alert } from "react-bootstrap";
import '../../styles/login.css'
import auth from '../../store/actions/userdata.actions'
// const tes = "jsdflslfs"
function Login() {
  const [credentials, setCredentials] = useState({ nomer_pengguna: '', password: '' });
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.datas); // Pastikan reducer terhubung

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(auth(credentials));
    setCredentials({ nomer_pengguna: '', password: '' });
  };

  return (
    <div className="body">
      <div className="sign-in__wrapper">
        <div className="login-page">
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <h2>Welcome Back</h2>
                <p>Login to continue</p>
                {/* {loginState.loading && <p>Loading...</p>} */}
                {loginState.error && <p style={{ color: 'red' }}>{loginState.error}</p>}
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      id="nomer_pengguna"
                      name="nomer_pengguna"
                      value={credentials.nomer_pengguna}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="nomer_pengguna">Nomor Pengguna</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <button type="submit" className="login-btn">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


// ##################################----BATAS----###############################################

// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../../store(tes)/action/authActions' /* ../store/action/authActions */;  // Mengimpor action login

// const Login = () => {
//   const [nomer_pengguna, setNomerPengguna] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();
//   const { loading, error, isAuthenticated, user } = useSelector((state) => state.auth);  // Mengakses state Redux

//   const handleLogin = () => {
//     const credentials = { nomer_pengguna, password };
//     dispatch(login(credentials));  // Menjalankan aksi login
//   };

//   return (
//     <div>
//       {isAuthenticated ? (
//         <h2>Welcome, {user.nama}!</h2>  // Menampilkan nama pengguna setelah login
//       ) : (
//         <div>
//           <input
//             type="text"
//             placeholder="Nomor Pengguna"
//             value={nomer_pengguna}
//             onChange={(e) => setNomerPengguna(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleLogin} disabled={loading}>
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//           {error && <p>{error}</p>}  {/* Menampilkan pesan error jika login gagal */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;
