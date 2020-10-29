import {createStore} from "redux"
import {persistStore, persistCombineReducers} from "redux-persist"
import storage from "redux-persist/es/storage"
import rootReducer from "./reducers"
const config = {
    key: "primary",
    storage
  }
  
  let persistedReducer = persistCombineReducers(config, rootReducer)

  export default () => {
        let store = createStore(persistedReducer)
        let persistor = persistStore(store)
        return {
            store,
            persistor
        }
  }