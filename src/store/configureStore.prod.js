import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "../reducers";
import api from "../middleware/api";
import toastMiddleware from "../middleware/toast";

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(api, toastMiddleware)
  );
  const persistedStore = persistStore(store);
  return { store, persistedStore };
};

export default configureStore;
