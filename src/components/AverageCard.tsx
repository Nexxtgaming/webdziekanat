import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider'

const AverageCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography>Average</Typography>
                <Divider/>

                <div style={{display: "flex", marginTop: "20px", width: "650px"}}>
                    <Typography variant="body2" style={{fontWeight: "bold"}}>Accepted:</Typography>
                    <Typography variant="body2" style={{marginLeft: "10px"}}> 0.0</Typography>
                    <Typography variant="body2" style={{marginLeft: "280px", fontWeight: "bold"}}>Accepted</Typography>
                    <Typography variant="body2" style={{marginLeft: "10px",}}>0</Typography>
                </div>

                <div style={{display: "flex", marginTop: "20px", width: "650px"}}>
                    <Typography variant="body2" style={{fontWeight: "bold"}}>For a semester:</Typography>
                    <Typography variant="body2" style={{marginLeft: "10px"}}> 0.0</Typography>
                    <Typography variant="body2" style={{marginLeft: "241px", fontWeight: "bold"}}>Gained/Nominal</Typography>
                    <Typography variant="body2" style={{marginLeft: "10px",}}>120/150</Typography>
                </div>

                <div style={{display: "flex", marginTop: "20px", width: "650px"}}>
                    <Typography variant="body2" style={{fontWeight: "bold"}}>For complete studies:</Typography>
                    <Typography variant="body2" style={{marginLeft: "10px"}}> 3.98</Typography>

                </div>
            </CardContent>
        </Card>

    )
}

export default AverageCard;