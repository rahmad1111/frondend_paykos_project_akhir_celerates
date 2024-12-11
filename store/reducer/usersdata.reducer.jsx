import { actionTypes } from '../actionTypes/index'

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
        case actionTypes.AUTH_DATA_REQUEST:
            return {
                ...state, 
                loading: true 
            }
        case actionTypes.GET_DATA_SUCCESS:
            return {
                ...state, 
                loading: false, 
                userData: action.payload 
            }
        case actionTypes.GET_DATA_FAILURE:
            return {
                ...state, 
                loading: false, 
                error: action.payload 
            }
    }
}

export default datas;