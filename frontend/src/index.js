import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpRoute from "./routes/signup";
import "./index.css";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});
root.render(
    <ThemeProvider theme={darkTheme}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="signup" element={<SignUpRoute />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </ThemeProvider>
);
