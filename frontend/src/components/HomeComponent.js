import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Toolbar, AppBar, Typography, Button, Box } from "@mui/material";

export default function HomeComponent() {
    const { user, logout } = useContext(UserContext);
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            {`${user.name}'${
                                user.name[-1] === "s" ? "" : "s"
                            } Courses`}
                        </Typography>
                        <div>
                            <Button color="inherit" onClick={logout}>
                                Log out
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
