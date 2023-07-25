import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.js";
import { theme } from "./tools/muiTheme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <CssBaseline />
      <App />
    </BrowserRouter>
  </ThemeProvider>
  </Provider>
);
