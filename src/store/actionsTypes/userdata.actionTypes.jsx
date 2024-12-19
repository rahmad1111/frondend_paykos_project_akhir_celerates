export const usersActionTypes = {
    // Login
    AUTH_LOGIN_REQUEST: 'AUTH_LOGIN_REQUEST',
    AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
    AUTH_LOGIN_FAILURE: 'AUTH_LOGIN_FAILURE',


    // Ambil data Pengghuni
    GET_TENANTS_REQUEST: 'GET_TENANTS_REQUEST',
    GET_TENANTS_SUCCESS: 'GET_TENANTS_SUCCESS',
    GET_TENANTS_FAILURE: 'GET_TENANTS_FAILURE',

    // Delete penghuni
    DELETE_TENANTS_REQUEST: 'DELETE_TENANTS_REQUEST',
    DELETE_TENANTS_SUCCESS: 'DELETE_TENANTS_SUCCESS',
    DELETE_TENANTS_FAILURE: 'DELETE_TENANTS_FAILURE',

    // Tambah data penghuni
    CREATE_TENANTS_REQUEST: 'CREATE_TENANTS_REQUEST',
    CREATE_TENANTS_SUCCESS: 'CREATE_TENANTS_SUCCESS',
    CREATE_TENANTS_FAILURE: 'CREATE_TENANTS_FAILURE',

    // edit Pengghuni
    TENANTS_EDIT_REQUEST: 'TENANTS_EDIT_REQUEST',
    TENANTS_EDIT_SUCCESS: 'TENANTS_EDIT_SUCCESS',
    TENANTS_EDIT_FAILURE: 'TENANTS_EDIT_FAILURE',
    // respon edit
    TENANTS_EDIT_RESPONSE_REQUEST: 'TENANTS_EDIT_RESPONSE_REQUEST',
    TENANTS_EDIT_RESPONSE_SUCCESS: 'TENANTS_EDIT_RESPONSE_SUCCESS',
    TENANTS_EDIT_RESPONSE_FAILURE: 'TENANTS_EDIT_RESPONSE_FAILURE',

    // Tampil data keluhan
    GET_COMPLAIN_REQUEST: 'GET_COMPLAIN_REQUEST',
    GET_COMPLAIN_SUCCESS: 'GET_COMPLAIN_SUCCESS',
    GET_COMPLAIN_FAILURE: 'GET_COMPLAIN_FAILURE',

    // Delete data keluhan
    DELETE_COMPLAIN_REQUEST: 'DELETE_COMPLAIN_REQUEST',
    DELETE_COMPLAIN_SUCCESS: 'DELETE_COMPLAIN_SUCCESS',
    DELETE_COMPLAIN_FAILURE: 'DELETE_COMPLAIN_FAILURE',

    // Tambah keluhan
    CREATE_COMPLAIN_REQUEST: 'CREATE_COMPLAIN_REQUEST',
    CREATE_COMPLAIN_SUCCESS: 'CREATE_COMPLAIN_SUCCESS',
    CREATE_COMPLAIN_FAILURE: 'CREATE_COMPLAIN_FAILURE',

    // untuk Informasi
    FETCH_INFORMATION_REQUEST: 'FETCH_INFORMATION_REQUEST',
    FETCH_INFORMATION_SUCCESS: 'FETCH_INFORMATION_SUCCESS',
    FETCH_INFORMATION_FAILURE: 'FETCH_INFORMATION_FAILURE',

    CREATE_INFORMATION_REQUEST: 'CREATE_INFORMATION_REQUEST',
    CREATE_INFORMATION_SUCCESS: 'CREATE_INFORMATION_SUCCESS',
    CREATE_INFORMATION_FAILURE: 'CREATE_INFORMATION_FAILURE',

    // untuk Pembayaran
    FETCH_PAYMENT_REQUEST: 'FETCH_PAYMENT_REQUEST',
    FETCH_PAYMENT_SUCCESS: 'FETCH_PAYMENT_SUCCESS',
    FETCH_PAYMENT_FAILURE: 'FETCH_PAYMENT_FAILURE',

    UPDATE_PAYMENT_REQUEST: 'UPDATE_PAYMENT_REQUEST',
    UPDATE_PAYMENT_SUCCESS: 'UPDATE_PAYMENT_SUCCESS',
    UPDATE_PAYMENT_FAILURE: 'UPDATE_PAYMENT_FAILURE',

    // Ambil data berdasarkan ID
    FETCH_PAYMENT_BY_ID_REQUEST: 'FETCH_PAYMENT_BY_ID_REQUEST',
    FETCH_PAYMENT_BY_ID_SUCCESS: 'FETCH_PAYMENT_BY_ID_SUCCESS',
    FETCH_PAYMENT_BY_ID_FAILURE: 'FETCH_PAYMENT_BY_ID_FAILURE',

    // Confirmasi
    CONFIRMED_PAYMENT_REQUEST: 'CONFIRMED_PAYMENT_REQUEST',
    CONFIRMED_PAYMENT_SUCCESS: 'CONFIRMED_PAYMENT_SUCCESS',
    CONFIRMED_PAYMENT_FAILURE: 'CONFIRMED_PAYMENT_FAILURE',

    // Logout
    AUTH_LOGOUT_REQUEST: 'AUTH_LOGOUT_REQUEST',
    AUTH_LOGOUT_SUCCESS: 'AUTH_LOGOUT_SUCCESS',
    AUTH_LOGOUT_FAILURE: 'AUTH_LOGOUT_FAILURE',
}