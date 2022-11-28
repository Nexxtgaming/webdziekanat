import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
const Login = () => {
    const [indexNumber, setIndexNumber] = useState('');
    const [password, setPassword] = useState('');
    let isLoggedIn = false;
    const handleButtonClick = () => {
        if(indexNumber !== '' && password !== ''){
            isLoggedIn = true;
        }
    }

    if(isLoggedIn){
        return null;
    }

    return (
        <Box
            style={{
                marginTop: "100px",
                width: "250px",
                marginLeft: "40%",
                border: "2px solid maroon",
                borderRadius: "15px",
                padding: "50px"
        }}
        component="form">
            <Typography>Please Login</Typography>
            <TextField
                style={{marginTop: "20px"}}
                required
                onChange={(value) => {setIndexNumber(value.target.value)}}
                id="outlined-required"
                label="Index number"/>
            <TextField
                style={{marginTop: "40px"}}
                required
                id="outlined-required"
                onChange={(value) => {setPassword(value.target.value)}}
                label="Password"/>
            <Button variant="contained" style={{marginTop: "50px"}} onClick={()=>{handleButtonClick()}}>Login</Button>
        </Box>
    )
}
export default Login;