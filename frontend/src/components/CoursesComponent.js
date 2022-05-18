import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Accordion } from "@mui/material";

export default function HomeComponent() {
    const { user, getCourses } = useContext(UserContext);
}
