import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import SignUpComponent from "./components/SignUpComponent";
import LoginComponent from "./components/LoginComponent";
import HomeComponent from "./components/HomeComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {user && <Route path="/" element={<HomeComponent />} />}
                    {!user && (
                        <>
                            <Route path="/login" element={<LoginComponent />} />
                            <Route
                                path="/signup"
                                element={<SignUpComponent />}
                            />
                        </>
                    )}
                    <Route
                        path="*"
                        element={<Navigate to={user ? "/" : "/login"} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
