import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import reducer from './reducer'

// eslint-disable-next-line no-unused-vars
const store = (initialState = {}) => createStore(reducer, compose(applyMiddleware(thunk)))
export default store