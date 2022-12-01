import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider'

const GeneralCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">General</Typography>
                <Divider/>

                <div style={{display: "flex", marginTop: "20px", width: "600px"}}>
                    <Typography variant="body2" style={{fontWeight: "bold"}}>Faculty:</Typography>
                    <Typography variant="body2" style={{marginLeft: "10px"}}> Centrum Kształcenia
                        Międzynarodowego</Typography>
                    <Typography variant="body2" style={{marginLeft: "50px", fontWeight: "bold"}}>Mode of
                        study:</Typography>
                    <Typography variant="body2" style={{marginLeft: "10px",}}>Stacjonarne</Typography>
                </div>

                <div style={{display: "flex", marginTop: "20px", width: "600px"}}>
                    <Typography variant="body2" style={{fontWeight: "bold"}}>Course: </Typography>
                    <Typography variant="body2" style={{marginLeft: "10px"}}> Computer Science</Typography>
                    <Typography variant="body2" style={{marginLeft: "195px", fontWeight: "bold"}}>Length of
                        studies:</Typography>
                    <Typography variant="body2" style={{marginLeft: "20px",}}>3.5</Typography>
                </div>

                <div style={{display: "flex", marginTop: "20px", width: "600px"}}>
                    <Typography variant="body2" style={{fontWeight: "bold"}}>Specialty: </Typography>
                    <Typography variant="body2" style={{marginLeft: "10px"}}>none</Typography>
                    <Typography variant="body2" style={{marginLeft: "265px", fontWeight: "bold"}}>Main course of
                        studies:</Typography>
                    <Typography variant="body2" style={{marginLeft: "20px",}}>true</Typography>
                </div>

                <div style={{display: "flex", marginTop: "20px", width: "600px"}}>
                    <Typography variant="body2" style={{fontWeight: "bold"}}>Is main index: </Typography>
                    <Typography variant="body2" style={{marginLeft: "10px"}}>yes</Typography>
                    <Typography variant="body2" style={{marginLeft: "247px", fontWeight: "bold"}}>Main
                        index:</Typography>
                    <Typography variant="body2" style={{marginLeft: "20px",}}>234677</Typography>
                </div>

            </CardContent>
        </Card>
    )
}

export default GeneralCard;