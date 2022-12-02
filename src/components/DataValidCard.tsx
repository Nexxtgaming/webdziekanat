import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider'

const DataValidCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">Data Valid</Typography>
                <Divider/>

                <div style={{display: "flex", marginTop: "20px", width: "650px"}}>
                    <Typography variant="body2" style={{fontWeight: "bold"}}>Current year:</Typography>
                    <Typography variant="body2" style={{marginLeft: "10px"}}> 3</Typography>
                    <Typography variant="body2" style={{marginLeft: "270px", fontWeight: "bold"}}>Academic semester</Typography>
                    <Typography variant="body2" style={{marginLeft: "10px",}}>2022/23 Z</Typography>
                </div>

                <div style={{display: "flex", marginTop: "20px", width: "600px"}}>
                    <Typography variant="body2" style={{fontWeight: "bold"}}>Current semester:</Typography>
                    <Typography variant="body2" style={{marginLeft: "10px"}}> 5</Typography>
                    <Typography variant="body2" style={{marginLeft: "236px", fontWeight: "bold"}}>Status</Typography>
                    <Typography variant="body2" style={{marginLeft: "10px",}}>REJESTRACJA PEŁNA</Typography>
                </div>

                <div style={{display: "flex", marginTop: "20px", width: "650px"}}>
                    <Typography variant="body2" style={{fontWeight: "bold"}}>Annual registration:</Typography>
                    <Typography variant="body2" style={{marginLeft: "10px"}}> rejestracja pełna</Typography>
                    <Typography variant="body2" style={{marginLeft: "125px", fontWeight: "bold"}}>Semester qualification</Typography>
                    <Typography variant="body2" style={{marginLeft: "10px",}}>pozytywna</Typography>
                </div>

            </CardContent>
        </Card>
    )

}

export default DataValidCard;