import React from 'react';
import "./App.css";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import LeftNavbar from "./components/LeftNavbar";
import GeneralPage from "./pages/GeneralPage";

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
          <div className="LoginPage" style={{textAlign: "center"}}>
              <AppBar position="static" color="primary">
                  <Toolbar>
                      <Typography variant="h4" component="div" sx={{flexGrow: 1}}
                                  style={{textAlign: "left", cursor: "pointer"}}>
                          <a href="/" style={{textDecoration: "none", color: "white"}}>Webdziekanat</a>
                      </Typography>
                      <a href="https://virtul.p.lodz.pl/virtul/"
                         style={{textDecoration: "none", color: "white"}}><Typography
                          variant="h6">VIRTUL</Typography></a>
                      <Typography variant="h6" style={{marginLeft: "20px"}}><a href="http://poczta.p.lodz.pl/" style={{
                          textDecoration: "none",
                          color: "white"
                      }}>E-MAIL</a></Typography>
                      <Typography variant="h6" style={{marginLeft: "20px"}}><a href="http://edu.p.lodz.pl/" style={{
                          textDecoration: "none",
                          color: "white"
                      }}>WIKAMP</a></Typography>
                  </Toolbar>
              </AppBar>
              <BrowserRouter>

                  <div style={{display: "flex"}}>
                      <LeftNavbar/>
                      <Routes>
                          <Route path="/" element={<HomePage/>}/>
                          <Route path="/login" element={<LoginPage/>}/>
                          <Route path="/general" element={<GeneralPage/>}/>
                      </Routes>
                  </div>

              </BrowserRouter>

          </div>
      </ThemeProvider>

  );
}

export default App;