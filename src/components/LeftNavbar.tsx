import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'
import { Link } from "react-router-dom";

const LeftNavbar = () => {
    return (
        <Paper sx={{width: 250, maxWidth: '100%', height: "100%", marginTop: "100px"}}>
            <Typography variant="h6" style={{fontWeight: "bold", color: "#800000"}}>Menu</Typography>
            <Divider/>
            <MenuList>
                <Link to="/general"
                      style={{textDecoration: "none", color: "black"}}>

                    <MenuItem>
                        <ListItemText>General</ListItemText>
                    </MenuItem>
                </Link>
                <Link to="/courses" style={{textDecoration: "none", color: "black"}}>
                    <MenuItem>
                        <ListItemText>Courses</ListItemText>
                    </MenuItem>
                </Link>
                <Link to="/fees" style={{textDecoration: "none", color: "black"}}>
                    <MenuItem>
                        <ListItemText>Fees</ListItemText>
                    </MenuItem>
                </Link>
                <Link to="/records" style={{textDecoration: "none", color: "black"}}>
                    <MenuItem>
                        <ListItemText>Records</ListItemText>
                    </MenuItem>
                </Link>
            </MenuList>
        </Paper>
    )
}

export default LeftNavbar;