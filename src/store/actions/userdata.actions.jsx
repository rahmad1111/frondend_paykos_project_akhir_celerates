import { actionTypes } from '../actionsTypes'


function auth(params) {
    return async dispatch => {
        dispatch({ type: actionTypes.AUTH_LOGIN_REQUEST, payload: params })
        const baseUrl = `http://localhost:3131/apikos/v1/auth/`
        try {
            const response = await fetch(baseUrl + "signin", {
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
            console.log(res)
            localStorage.setItem('token', res.accessToken);
            localStorage.setItem('roles', res.roles);
            localStorage.setItem('userId', res.userId);
            localStorage.setItem('nama', res.nama);
            window.location.replace('/daskboard');
            dispatch({ type: actionTypes.AUTH_LOGIN_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: actionTypes.LOGIN_LOGIN_FAILURE, payload: error.message })
        }
    }
}


export default auth