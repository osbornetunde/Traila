import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "../constants/theme";
import store, { persistedStore } from "../store";
import DevTools from "./DevTools";
import StyledContainer from "../containers/StyledContainer";
import GlobalStyle from "../injectGlobalStyles";
import App from "../components/App";

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <ThemeProvider theme={theme}>
          <StyledContainer>
            <DevTools />
            <GlobalStyle />
            <ToastContainer />
            <Router>
              <App />
            </Router>
          </StyledContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default Root;
