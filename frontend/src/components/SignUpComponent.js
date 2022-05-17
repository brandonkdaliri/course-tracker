import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
    Typography,
    Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/Lock";
import classes from "./SignUpComponent.module.css";
import { UserContext } from "../context/UserContext";
import { useState, useContext } from "react";

export default function SignUpComponent() {
    const { registerUser, wait } = useContext(UserContext);
    const [errMsg, setErrMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onChangeInput = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        if (!Object.values(formData).every((val) => val.trim() !== "")) {
            setSuccessMsg(false);
            setErrMsg("Please fill in all required fields.");
            return;
        }

        const data = await registerUser(formData);
        if (data.success) {
            e.target.reset();
            setSuccessMsg("User created successfully");
            return;
        } else if (!data.success && data.message) {
            setSuccessMsg(false);
            setErrMsg(data.message);
        }
    };
    return (
        <div>
            <Grid>
                <Paper elevation={10} className={classes.paper}>
                    <Grid align="center">
                        <Avatar className={classes.icon}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Sign up</h2>
                    </Grid>
                    <TextField
                        label="Username"
                        id="name"
                        placeholder="Enter username"
                        fullWidth={true}
                        required
                        className={classes.inputText}
                    />
                    <TextField
                        label="Email"
                        id="email"
                        placeholder="Enter email"
                        fullWidth={true}
                        required
                        className={classes.inputText}
                    />
                    <TextField
                        label="Password"
                        id="password"
                        placeholder="Enter password"
                        type="password"
                        fullWidth={true}
                        required
                        className={classes.inputText}
                    />
                    <Button
                        type="submit"
                        fullWidth={true}
                        variant="contained"
                        color="primary"
                        className={classes.btnSubmit}
                    >
                        Sign up
                    </Button>
                    <Typography>
                        Already have an account? <Link href="/">Sign in</Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
}
