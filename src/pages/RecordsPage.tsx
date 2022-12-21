import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';

const RecordsPage = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{width: "100%"}}>
            <Card style={{margin: "100px auto", width: '600px'}}>
                <CardContent>
                    <div style={{display: "flex", width: "200px", margin: "0px auto"}}>
                        <Typography variant="h6">Records for P.E</Typography>
                        <IconButton style={{marginTop: "-5px"}} onClick={handleClickOpen}>
                            <HelpIcon/>
                        </IconButton>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogContent>
                                <DialogContentText>
                                    Jeśli nie zdążyłeś zapisać się przez internet na zajęcia z obowiązkowego wychowania
                                    fizycznego - zgłoś się osobiście do:
                                </DialogContentText>
                                <DialogContentText></DialogContentText>
                                <DialogContentText>
                                    Centrum Sportu PŁ
                                    90-924 Łódź, al. Politechniki 11

                                </DialogContentText>

                                <DialogContentText>
                                    Po więcej informacji zapraszamy do sekcji aktualności umieszczonej na stronie:
                                    <a href="http://www.p.lodz.pl/swfis,link515,studium_wychowania_fizycznego_i_sportu_pl_index.htm">Studium Wychowania Fizycznego i Sportu PŁ</a>
                                </DialogContentText>
                                <DialogActions>
                                    <Button onClick={handleClose}>OK</Button>
                                </DialogActions>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <Divider/>
                    <Typography variant="body2">Brak terminów do zapsiu na zajęcią w Studium Wychowania Fizycznego i Sportu PŁ.</Typography>
                </CardContent>
            </Card>
            <Card style={{margin: "50px auto", width: "600px"}}>
                <CardContent>
                    <Typography variant="h6">Records up for an exam</Typography>
                    <Divider/>

                </CardContent>
            </Card>
        </div>
    )
}

export default RecordsPage;