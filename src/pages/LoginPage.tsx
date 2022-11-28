import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
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
        <Login></Login>
    );
}
export default LoginPage;