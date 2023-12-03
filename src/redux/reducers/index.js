import ThemeReducer from "./ThemeReducer"
import LoginReducer from "./LoginReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({ThemeReducer, LoginReducer})

export default rootReducer