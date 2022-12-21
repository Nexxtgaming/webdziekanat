import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider'

import GeneralCard from "../components/GeneralCard";
import DataValidCard from "../components/DataValidCard";
import AverageCard from "../components/AverageCard";

const GeneralPage = () => {
    return (
        <div style={{marginTop: "50px", margin: "100px auto"}}>
            <GeneralCard/>
            <div style={{marginTop: "50px", margin: "50px auto"}}>
                <DataValidCard/>
            </div>
            <div style={{marginTop: "50px", margin: "50px auto"}}>
                <AverageCard/>
            </div>
            <div style={{margin: "50px auto"}}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Medical examinations</Typography>
                        <Divider/>
                        <div style={{width:"650px", display: "flex"}}>
                            <Typography variant="body2" style={{fontWeight: "bold"}}>Number:</Typography>
                            <Typography variant="body2" style={{marginLeft: "10px"}}>CKM/Lek/2369/2020/21/SID</Typography>
                            <Typography variant="body2" style={{fontWeight: "bold", marginLeft: "140px"}}>Expiration date:</Typography>
                            <Typography variant="body2" style={{marginLeft: "10px"}}>2023-09-29</Typography>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default GeneralPage;