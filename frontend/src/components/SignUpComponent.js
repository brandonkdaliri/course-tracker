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

export default function SignUpComponent() {
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
                        placeholder="Enter username"
                        fullWidth={true}
                        required
                        className={classes.inputText}
                    />
                    <TextField
                        label="Password"
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