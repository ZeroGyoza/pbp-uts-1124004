import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function header() {
    return (<div>
        <AppBar position="static" sx={{ background: 'linear-gradient(to right, #1b93b8, #c50d0d)' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
                  PAGE UTS PBP 1124004 DAN DAVID CHRISTIAN TANUONGA
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
}