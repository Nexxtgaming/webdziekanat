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
                <MenuItem>
                    <ListItemText><Link to="/general"
                                        style={{textDecoration: "none", color: "black"}}>General</Link></ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Courses</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Fees</ListItemText>
                </MenuItem>
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