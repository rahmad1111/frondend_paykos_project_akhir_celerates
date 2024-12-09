import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/action/authActions';  // Mengimpor action login

const Login = () => {
    const [nomer_pengguna, setNomerPengguna] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const { loading, error, isAuthenticated, user } = useSelector((state) => state.auth);  // Mengakses state Redux

    const handleLogin = () => {
        const credentials = { nomer_pengguna, password };
        dispatch(login(credentials));  // Menjalankan aksi login
    };

    return (
        <div>
            {isAuthenticated ? (
                <h2>Welcome, {user.nama}!</h2>  // Menampilkan nama pengguna setelah login
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Nomor Pengguna"
                        value={nomer_pengguna}
                        onChange={(e) => setNomerPengguna(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin} disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    {error && <p>{error}</p>}  {/* Menampilkan pesan error jika login gagal */}
                </div>
            )}
        </div>
    );
};

export default Login;
