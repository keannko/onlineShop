import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { theme } from "./tools/muiTheme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <CssBaseline />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
