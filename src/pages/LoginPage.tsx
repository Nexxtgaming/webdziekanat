import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Login from "../components/login";

const theme = createTheme({
    palette: {
        primary: {
            main: '#800000'
        }
    }
});

const LoginPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="LoginPage" style={{textAlign: "center"}}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="home"
                            sx={{ mr: 2 }}
                        >
                            <HomeIcon />
                        </IconButton>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Webdziekanat
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Login></Login>
            </div>
        </ThemeProvider>

    );
}
export default LoginPage;