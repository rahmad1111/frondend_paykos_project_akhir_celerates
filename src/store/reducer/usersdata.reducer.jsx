import { actionTypes } from '../actionsTypes/index'

const initState = {
    deletePenghuni: [],
    userData: [],
    dataPengguna: [],
    dataKos: [],
    pembayaran: [],
    pembayaranconfir: [],
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
        case actionTypes.AUTH_LOGIN_SUCCESS:
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
        case actionTypes.CREATE_TENANTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CREATE_TENANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                dataPengguna: [
                    ...state.dataPengguna,
                    action.payload
                ]
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
        case actionTypes.FETCH_INFORMATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_INFORMATION_SUCCESS:
            return {
                ...state,
                loading: false,
                informasi: action.payload
            }
        case actionTypes.FETCH_INFORMATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.CREATE_COMPLAIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CREATE_COMPLAIN_SUCCESS:
            return {
                ...state,
                loading: false,
                keluhan: action.payload
            }
        case actionTypes.CREATE_COMPLAIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.AUTH_LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.AUTH_LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.AUTH_LOGOUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.FETCH_PAYMENT_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_PAYMENT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                pembayaran: action.payload
            }
        case actionTypes.FETCH_PAYMENT_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.CONFIRMED_PAYMENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CONFIRMED_PAYMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                pembayaranconfir: action.payload
            }
        case actionTypes.CONFIRMED_PAYMENT_FAILURE:
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