import AuthReducer from "./auth"
import DataReducer from "./data"
import {combineReducers} from "redux"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const AllReducers = combineReducers({
    auth : AuthReducer,
    data : DataReducer
})
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"]
}
export default persistReducer(persistConfig, AllReducers)