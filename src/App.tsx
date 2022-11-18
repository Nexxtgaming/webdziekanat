import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Login from "./components/login";

const theme = createTheme({
  palette: {
    primary: {
      main: '#800000'
    }
  }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
              >
                <MenuIcon />
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

export default App;