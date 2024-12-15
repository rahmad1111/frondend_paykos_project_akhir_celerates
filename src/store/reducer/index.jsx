import { combineReducers } from 'redux'
import datas from './usersdata.reducer'

const appReducer = combineReducers({
    datas,
})

const rootReducer = (state, action) => appReducer(state, action)
export default rootReducer