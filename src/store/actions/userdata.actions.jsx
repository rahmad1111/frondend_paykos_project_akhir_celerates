import { actionTypes } from '../actionsTypes'
import customFetch from "../../api/api";

const baseUrl = `http://localhost:3131/apikos/v1/`

export default function auth(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.AUTH_LOGIN_REQUEST, payload: params })
        try {
            const response = await fetch(baseUrl + "auth/signin", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            })
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `HTTP error! status: ${response.status}`);
            }
            const res = await response.json();
            if (res.accessToken && res.roles && res.userId && res.nama) {
                localStorage.setItem('token', res.accessToken);
                localStorage.setItem('roles', res.roles);
                localStorage.setItem('userId', res.userId);
                localStorage.setItem('nama', res.nama);
                window.location.replace('/daskboard');
            } else {
                console.error("Data yang diterima tidak lengkap:", res);
            }
            dispatch({ type: actionTypes.AUTH_LOGIN_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: actionTypes.AUTH_LOGIN_FAILURE, payload: error.message })
        }
    }
}

export function getUserData() {
    return async dispatch => {
        dispatch({ type: actionTypes.GET_TENANTS_REQUEST });
        try {
            const token = localStorage.getItem('token');
            const id_pemilik = localStorage.getItem('userId');
            console.log('ID Pemilik:', id_pemilik); // Debugging log

            const response = await customFetch(baseUrl + "users/data", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    id_pemilik: id_pemilik,
                })
            });

            // Handle unauthorized access
            if (response.status === 403) {
                window.location.href = '/login';
                return; // Stop further execution if status is 403
            }

            // Parse response JSON
            const res = await response.json();

            if (!response.ok) {
                throw new Error(res.message || `HTTP error! status: ${response.status}`);
            }

            // Debugging log untuk response data
            console.log('API Response:', res);

            // Dispatch the action with the data
            dispatch({ type: actionTypes.GET_TENANTS_SUCCESS, payload: res?.datas });

        } catch (error) {
            // Dispatch failure action if an error occurs
            dispatch({ type: actionTypes.GET_TENANTS_FAILURE, payload: error.message });
            console.error("Error fetching data:", error); // Debugging log
        }
    };
}


export function geteditUserData(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.TENANTS_EDIT_REQUEST });
        try {
            const token = localStorage.getItem('token');
            // console.log('IDnya : ', id_pemilik);
            // console.log('Payload:', {
            //     id_pemilik: id_pemilik
            // });
            console.log('idnya : ', params);
            const response = await customFetch(baseUrl + `users/${params}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
            if (response.status === 403) {
                window.location.href = '/login';
            }

            const res = await response.json();
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || `HTTP error! status: ${response.status}`);
            }
            console.log('API Response:', res);
            dispatch({ type: actionTypes.TENANTS_EDIT_SUCCESS, payload: res?.data });
        } catch (error) {
            dispatch({ type: actionTypes.TENANTS_EDIT_FAILURE, payload: error.message });
        }
    }
}



export function editUserData(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.TENANTS_EDIT_RESPONSE_FAILURE })
        try {
            const token = localStorage.getItem('token');
            const response = await customFetch(baseUrl + `users/${params.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(params)
            })
            if (response.status === 403) {
                window.location.href = '/login';
                return;
            }
        } catch (error) {
            dispatch.error({ type: actionTypes.TENANTS_EDIT_RESPONSE_SUCCESS, payload: error.message })
        }
    }
}

export function addPenghuni(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.CREATE_TENANTS_REQUEST });
        try {
            const token = localStorage.getItem('token');
            const response = await customFetch(`${baseUrl}users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(params),
            });
            if (response.status === 403) {
                window.location.href = '/login';
                return;
            }
            const res = await response.json();
            console.log("Response Data:", res.data);
            dispatch({ type: actionTypes.CREATE_TENANTS_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({ type: actionTypes.CREATE_TENANTS_FAILURE, payload: error.message });
        }
    };
}

export function deletePenghuni(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.DELETE_TENANTS_REQUEST });
        try {
            const token = localStorage.getItem('token');
            const response = await customFetch(`${baseUrl}users/${params}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.status === 403) {
                window.location.href = '/login';
                return;
            }
            const res = await response.json();
            console.log("Response Data:", res.data);
            dispatch({ type: actionTypes.DELETE_TENANTS_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({ type: actionTypes.DELETE_TENANTS_FAILURE, payload: error.message });
        }
    };
}

export function getComplain() {
    return async dispatch => {
        dispatch({ type: actionTypes.GET_COMPLAIN_REQUEST });
        try {
            const token = localStorage.getItem('token');
            const response = await customFetch(`${baseUrl}keluhankos`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.status === 403) {
                window.location.href = '/login';
                return;
            }
            const res = await response.json();
            console.log("Response Data:", res.data);
            dispatch({ type: actionTypes.GET_COMPLAIN_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({ type: actionTypes.GET_COMPLAIN_FAILURE, payload: error.message });
        }
    };
}

export function deleteComplain(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.DELETE_COMPLAIN_REQUEST });
        try {
            const token = localStorage.getItem('token');
            const response = await customFetch(`${baseUrl}keluhankos/${params}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.status === 403) {
                window.location.href = '/login';
                return;
            }
            const res = await response.json();
            console.log("Response Data:", res.data);
            dispatch({ type: actionTypes.DELETE_COMPLAIN_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({ type: actionTypes.DELETE_COMPLAIN_FAILURE, payload: error.message });
        }
    };
}

export function getInformasi() {
    return async dispatch => {
        dispatch({ type: actionTypes.FETCH_INFORMATION_REQUEST });
        try {
            const token = localStorage.getItem('token');
            const response = await customFetch(`${baseUrl}informasi`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.status === 403) {
                window.location.href = '/login';
                return;
            }
            const res = await response.json();
            console.log("Response Data:", res.data);
            dispatch({ type: actionTypes.FETCH_INFORMATION_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_INFORMATION_FAILURE, payload: error.message });
        }
    };
}

export function addInfomasi(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.CREATE_INFORMATION_REQUEST });
        try {
            const token = localStorage.getItem('token');
            const response = await customFetch(`${baseUrl}informasi`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(params),
            });
            if (response.status === 403) {
                window.location.href = '/login';
                return;
            }
            const res = await response.json();
            console.log("Response Data:", res.data);
            dispatch({ type: actionTypes.CREATE_INFORMATION_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({ type: actionTypes.CREATE_INFORMATION_FAILURE, payload: error.message });
        }
    };
}

export function addKeluhan(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.CREATE_COMPLAIN_REQUEST });
        try {
            const token = localStorage.getItem('token');
            const response = await customFetch(`${baseUrl}keluhankos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(params),
            });
            if (response.status === 403) {
                window.location.href = '/login';
                return;
            }
            const res = await response.json();
            console.log("Response Data:", res.data);
            dispatch({ type: actionTypes.CREATE_COMPLAIN_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({ type: actionTypes.CREATE_COMPLAIN_FAILURE, payload: error.message });
        }
    };
}

export function addPembayaranAdmin(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.FETCH_PAYMENT_REQUEST });
        try {
            const token = localStorage.getItem('token');
            const response = await customFetch(`${baseUrl}pembayaran`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(params),
            });
            if (response.status === 403) {
                window.location.href = '/login';
                return;
            }
            const res = await response.json();
            console.log("Response Data:", res.data);
            dispatch({ type: actionTypes.FETCH_PAYMENT_SUCCESS, payload: res.message });
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_PAYMENT_FAILURE, payload: error.message });
        }
    };
}

export function getPembayaranByid(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.FETCH_PAYMENT_BY_ID_REQUEST });
        try {
            const token = localStorage.getItem('token');
            const response = await customFetch(`${baseUrl}pembayaran/${params}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.status === 403) {
                window.location.href = '/login';
                return;
            }
            const res = await response.json();
            console.log("Response Data:", res.data);
            dispatch({ type: actionTypes.FETCH_PAYMENT_BY_ID_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_PAYMENT_BY_ID_FAILURE, payload: error.message });
        }
    };
}

export function konfirmasiPembayaran(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.CONFIRMED_PAYMENT_REQUEST });
        try {
            const token = localStorage.getItem('token');
            const response = await customFetch(`${baseUrl}pembayaran/penghuni/${params.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(params),
            });
            console.log("data : ", params)
            console.log("id : ", params.id)
            if (response.status === 403) {
                window.location.href = '/login';
                return;
            }
            const res = await response.json();
            console.log("Response Data:", res.data);
            dispatch({ type: actionTypes.CONFIRMED_PAYMENT_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({ type: actionTypes.CONFIRMED_PAYMENT_FAILURE, payload: error.message });
        }
    };
}

export function logout() {
    return async dispatch => {
        dispatch({ type: actionTypes.AUTH_LOGOUT_REQUEST });
        try {
            const token = localStorage.getItem('token');
            const response = await customFetch(`${baseUrl}auth/logout`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.status === 403) {
                window.location.href = '/login';
                return;
            }
            const res = await response.json();
            console.log("Response Data:", res.data);
            localStorage.removeItem('token');
            localStorage.removeItem('roles');
            localStorage.removeItem('userId');
            localStorage.removeItem('nama');
            window.location.replace('/');
            dispatch({ type: actionTypes.AUTH_LOGOUT_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({ type: actionTypes.AUTH_LOGOUT_FAILURE, payload: error.message });
        }
    }
}
