import { actionTypes } from '../actionsTypes/index'

const initState = {
    userData: [],
    pembayaran: [],
    informasi: [],
    keluhan: [],
    loading: false,
    error: null
}

const datas = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_LOGIN_REQUEST:
            return {
                ...state, 
                loading: true 
            }
        case actionTypes.LOGIN_LOGIN_SUCCESS:
            return {
                ...state, 
                loading: false, 
                userData: action.payload 
            }
        case actionTypes.LOGIN_LOGIN_FAILURE:
            return {
                ...state, 
                loading: false, 
                error: action.payload 
            };
        default:
            return state;
    }
}

export default datas;