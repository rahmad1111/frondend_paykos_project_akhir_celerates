import { combineReducers } from 'redux'
import usersdata from '../reducer/usersdata.reducer'

const appReducer = combineReducers({
    usersdata,
})

const rootReducer = (state, action) => appReducer(state, action)
export default rootReducer