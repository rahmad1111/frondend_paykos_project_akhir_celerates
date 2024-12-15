import { actionTypes } from '../actionsTypes/index'

const initState = {
    deletePenghuni: [],
    userData: [],
    dataPengguna: [],
    dataKos: [],
    pembayaran: [],
    informasi: [],
    keluhan: [],
    loading: false,
    error: null
}

const datas = (state = initState, action) => {
    console.log('Reducer Action:', action);
    console.log('Reducer State:', state);
    switch (action.type) {
        case actionTypes.AUTH_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.AUTH_LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: action.payload
            }
        case actionTypes.AUTH_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case actionTypes.GET_TENANTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_TENANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                dataPengguna: action.payload
            }
        case actionTypes.GET_TENANTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.TENANTS_EDIT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.TENANTS_EDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                dataPengguna: action.payload
            }
        case actionTypes.TENANTS_EDIT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_COSMOS_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_COSMOS_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                dataKos: action.payload
            }
        case actionTypes.GET_COSMOS_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.CREATE_TENANTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CREATE_TENANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                dataPengguna: [...state.dataPengguna, action.payload]
            }
        case actionTypes.CREATE_TENANTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            case actionTypes.DELETE_TENANTS_REQUEST:
                return { 
                    ...state, 
                    loading: true, 
                    error: null 
                };
            case actionTypes.DELETE_TENANTS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    deletePenghuni: action.payload.id,
                };
            case actionTypes.DELETE_TENANTS_FAILURE:
                return { 
                    ...state, 
                    loading: false, 
                    error: action.payload 
                };
        case actionTypes.GET_COMPLAIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_COMPLAIN_SUCCESS:
            return {
                ...state,
                loading: false,
                keluhan: action.payload
            }
        case actionTypes.GET_COMPLAIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
export default datas;