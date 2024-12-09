import { combineReducers } from 'redux';
import authReducer from './authReducer';

// Menggabungkan semua reducer
const rootReducer = combineReducers({
    auth: authReducer,  // Mengelola state autentikasi
});

export default rootReducer;
