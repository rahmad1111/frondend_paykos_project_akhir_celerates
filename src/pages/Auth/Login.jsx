import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import '../../styles/login.css'
function Login() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    if (inputUsername !== "admin" || inputPassword !== "admin") {
      setShow(true);
    }
    setLoading(false);
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className="sign-in__wrapper">
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        {/* Header */}
        <div className="h4 mb-2 text-center">Login</div>
        {/* ALert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect username or password.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>ID Pengguna</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="ID Pengguna"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )}
      </Form>
    </div>
  )
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
