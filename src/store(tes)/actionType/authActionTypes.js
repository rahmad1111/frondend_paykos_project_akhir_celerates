import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actionType/authActionTypes';
import { loginUser } from '../../api/api';  // Fungsi login menggunakan Axios

// Action untuk login request
export const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

// Action untuk login sukses
export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData,
});

// Action untuk login gagal
export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

// Action asinkron untuk login
export const login = (credentials) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const data = await loginUser(credentials);  // Fungsi untuk melakukan login ke API
        dispatch(loginSuccess(data));  // Dispatch login sukses dengan data pengguna
    } catch (error) {
        dispatch(loginFailure(error));  // Dispatch login gagal dengan error
    }
};
