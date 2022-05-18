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
import classes from "./LoginComponent.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function LoginComponent() {
    const { loginUser, wait, loggedInCheck } = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    const [errMsg, setErrMsg] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        if (!Object.values(formData).every((val) => val.trim() !== "")) {
            setErrMsg("Please fill in all required fields");
            return;
        }

        const data = await loginUser(formData);
        if (data.success) {
            e.target.reset();
            setRedirect("Redirecting...");
            await loggedInCheck();
            return;
        }
        setErrMsg(data.message);
    };

    return (
        <div>
            <Grid>
                <Paper elevation={10} className={classes.paper}>
                    <Grid align="center">
                        <Avatar className={classes.icon}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Sign in</h2>
                    </Grid>
                    <form onSubmit={submitForm}>
                        <TextField
                            label="Email"
                            name="email"
                            placeholder="Enter email"
                            fullWidth={true}
                            required
                            className={classes.inputText}
                            onChange={onChangeInput}
                            value={formData.email}
                        />
                        <TextField
                            label="Password"
                            name="password"
                            placeholder="Enter password"
                            type="password"
                            fullWidth={true}
                            required
                            className={classes.inputText}
                            onChange={onChangeInput}
                            value={formData.password}
                        />
                        {errMsg && <div className={classes.msgError}></div>}
                        {redirect ? (
                            redirect
                        ) : (
                            <Button
                                type="submit"
                                disabled={wait}
                                fullWidth={true}
                                variant="contained"
                                color="primary"
                                className={classes.btnSubmit}
                            >
                                Sign in
                            </Button>
                        )}
                    </form>
                    <Typography>
                        Don't have an account?{" "}
                        <Link href="/signup">Sign up</Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
}
