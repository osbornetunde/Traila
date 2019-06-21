import configureStore from "./configureStore";

const { store, persistedStore } = configureStore();
export { persistedStore, store as default };
