import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "../reducers";
import api from "../middleware/api";
import DevTools from "../containers/DevTools";
import toastMiddleware from "../middleware/toast";

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(api, toastMiddleware, logger),
      DevTools.instrument()
    )
  );
  if (module.hot) {
    module.hot.accept("../reducers", () => {
      store.replaceReducer(rootReducer);
    });
  }
  const persistedStore = persistStore(store);
  return { store, persistedStore };
};

export default configureStore;
