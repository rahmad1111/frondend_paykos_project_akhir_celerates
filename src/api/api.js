import axios from 'axios';

const API_URL = 'http://localhost:3131/apikos/v1/auth/signin';  // URL API login

// Fungsi untuk melakukan login
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(API_URL, credentials);
        return response.data;  // Return data dari response (misalnya token, nama pengguna)
    } catch (error) {
        throw error.response ? error.response.data : error.message;  // Handle error
    }
};
