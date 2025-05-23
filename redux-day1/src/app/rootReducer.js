import { combineReducers } from "redux";
import counterReducer from '../features/counterSlice'

const rootReducer = combineReducers({
    counter: counterReducer

})

export default rootReducer