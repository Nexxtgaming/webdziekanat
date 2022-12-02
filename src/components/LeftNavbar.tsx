import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

const LeftNavbar = () => {
    return (
        <Paper sx={{width: 250, maxWidth: '100%'}}>
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

                <MenuItem>
                    <ListItemText>Applications</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Records</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    )
}

export default LeftNavbar;