import react, {useState, Fragment, SyntheticEvent} from 'react'
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider'
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const FeesPage = () => {
    const [bankAccount, setBankAccount] = useState('');
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    );
    return (
        <div style={{width: "100% "}}>
            <Alert severity="warning" style={{width: "800px", margin: "50px auto"}}>Please note that payments for accommodation in a student dormitory should be transferred to the bank account number generated in the ?Student dormitory? tab.</Alert>
            <Card style={{width: "850px", margin: "0 auto"}}>
                <CardContent>
                    <Typography variant="h6">Data for payment</Typography>
                    <Divider/>
                    <div style={{display: 'flex', width: "850px"}}>
                        <Typography variant="body2" style={{fontWeight: "bold"}}>Account number:</Typography>
                        <Typography variant="body2" style={{marginLeft: "10px"}}>82102000324590234677000000</Typography>
                    </div>
                    <div style={{display: 'flex', width: "850px"}}>
                        <Typography variant="body2" style={{fontWeight: "bold"}}>Beneficiary:</Typography>
                        <Typography variant="body2" style={{marginLeft: "10px"}}>Centrum Kształcenia Międzynarodowego Politechniki Łódzkiej

                            ul. Żwirki 36</Typography>
                    </div>

                </CardContent>
            </Card>
            <div style={{width: "900px", margin: "0 auto", display: "flex"}}>
                <Card style={{width: "400px", margin: "10px 25px"}}>
                    <CardContent>
                        <Typography variant="h6">Balance of payments</Typography>
                        <Divider/>
                        <div style={{width: "400px", display: "flex"}}>
                            <Typography variant="body2" style={{fontWeight: "bold", marginLeft: "120px"}}>Overpayment</Typography>
                            <Typography variant="body2" style={{marginLeft: "10px"}}>0 zł</Typography>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{width: "400px", margin: "10px auto"}}>
                    <CardContent>
                        <Typography variant="h6">Overpayment</Typography>
                        <Divider/>
                        <div style={{width: "400px", display: "flex"}}>
                            <Typography variant="body2" style={{fontWeight: "bold", marginLeft: "60px"}}>Overpayment for register number</Typography>
                            <Typography variant="body2" style={{marginLeft: "10px"}}>0 zł</Typography>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div style={{marginTop: "50px"}}>
                <Typography variant="h6">Account number for payout</Typography>
                <TextField label="bank account number" variant="outlined" size="small" style={{marginTop: "10px"}} value={bankAccount} onChange={(value) => {setBankAccount(value.target.value)}}/>
                <Button variant="contained" style={{marginLeft: "50px", marginTop: "10px"}} onClick={handleClick}>Save</Button>
            </div>

            <Typography variant="h6" style={{marginTop: "100px"}}>List of payments</Typography>
            <TableContainer component={Paper} sx={{width: 800}} style={{margin: "0 auto"}}>
                <Table sx={{width: 800}}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Date of payment</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>For a semester</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Amount charged</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Paid</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Remaining</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Was the payment made before the due date?</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Interests</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="right">2020-10-31	</TableCell>
                            <TableCell align="right">2020/21 Z,s.1	</TableCell>
                            <TableCell align="right">22 zł</TableCell>
                            <TableCell align="right">22 zł</TableCell>
                            <TableCell align="right">0 zł</TableCell>
                            <TableCell align="right">tak</TableCell>
                            <TableCell align="right">0 zł</TableCell>
                            <TableCell align="right">Legitymacja</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Account number saved"
                action={action}
            />
        </div>
    )
}

export default FeesPage;