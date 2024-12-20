import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Login from '../src/pages/Auth/Login';

const mockStore = configureMockStore();
const initialState = {
    datas: { loading: false, error: null },
};
const store = mockStore(initialState);

describe('Login Component', () => {
    test('renders the login form', () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );

        expect(screen.getByLabelText(/Nomor Pengguna/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
    });

    test('handles input changes', () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );

        const usernameInput = screen.getByLabelText(/Nomor Pengguna/i);
        const passwordInput = screen.getByLabelText(/Password/i);

        fireEvent.change(usernameInput, { target: { name: 'nomer_pengguna', value: '123456' } });
        fireEvent.change(passwordInput, { target: { name: 'password', value: 'password123' } });

        expect(usernameInput.value).toBe('123456');
        expect(passwordInput.value).toBe('password123');
    });

    test('shows loading and error state', () => {
        const loadingStore = mockStore({
            datas: { loading: true, error: null },
        });
        const errorStore = mockStore({
            datas: { loading: false, error: 'Invalid credentials' },
        });

        const { rerender } = render(
            <Provider store={loadingStore}>
                <Login />
            </Provider>
        );
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

        rerender(
            <Provider store={errorStore}>
                <Login />
            </Provider>
        );
        expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
    });
});