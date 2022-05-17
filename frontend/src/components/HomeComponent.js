import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function HomeComponent() {
    const { user, logout } = useContext(UserContext);

    return <div>home</div>;
}
