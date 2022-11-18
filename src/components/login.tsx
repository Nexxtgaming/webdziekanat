import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Login = () => {
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
                required
                id="outlined-required"
                label="Login"/>
            <TextField
                style={{marginTop: "40px"}}
                required
                id="outlined-required"
                label="Password"/>
            <Button variant="contained" style={{marginTop: "50px"}}>Login</Button>
        </Box>
    )
}
export default Login;