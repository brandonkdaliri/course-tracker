import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const Axios = axios.create({
    baseURL: "http://localhost/cp476/",
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [wait, setWait] = useState(false);

    const getCourses = async ({ id }) => {
        setWait(true);
        try {
            const { data } = await Axios.post("getCourses.php", {
                id,
            });
            setWait(false);
            return data;
        } catch (err) {
            setWait(false);
            return { success: 0, message: "Server Error" };
        }
    };

    const registerUser = async ({ name, email, password }) => {
        setWait(true);
        try {
            const { data } = await Axios.post("signup.php", {
                name,
                email,
                password,
            });
            setWait(false);
            return data;
        } catch (err) {
            setWait(false);
            return { success: 0, message: "Server Error" };
        }
    };

    const loginUser = async ({ email, password }) => {
        setWait(true);

        try {
            const { data } = await Axios.post("login.php", {
                email,
                password,
            });

            if (data.success && data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                setWait(false);
                return { success: 1 };
            }

            setWait(false);
            return { success: 0, message: data.message };
        } catch (err) {
            setWait(false);
            return { success: 0, message: "Server Error" };
        }
    };

    const loggedInCheck = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUser(user);
            return;
        } else {
            setUser(null);
        }
    };

    useEffect(() => {
        async function asyncCall() {
            await loggedInCheck();
        }
        asyncCall();
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <UserContext.Provider
            value={{
                registerUser,
                loginUser,
                wait,
                user: user,
                loggedInCheck,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
