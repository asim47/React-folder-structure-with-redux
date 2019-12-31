import { combineReducers } from "redux"
import authReducer from "./reducers/auth.reducer"
import userReducer from "./reducers/user.reducer"



export default combineReducers({
    authReducer,
    userReducer
})

