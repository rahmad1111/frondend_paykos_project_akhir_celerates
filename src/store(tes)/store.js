import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  // Middleware untuk menangani aksi asinkron
import rootReducer from './reducer/rootReducer';  // Mengimpor rootReducer

const store = createStore(rootReducer, applyMiddleware(thunk));  // Membuat store dengan middleware

export default store;
