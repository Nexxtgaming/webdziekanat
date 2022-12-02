import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CoursesPage = () => {
    return (
        <div style={{width: "100%"}}>
            <Typography variant="h6" style={{marginTop: "100px"}}>Additional courses</Typography>
            <TableContainer component={Paper} sx={{width: 800}} style={{margin: "0 auto", marginTop: "10px"}}>
                <Table sx={{width: 800}} aria-label="additional courses">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Course Code</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Name of the course</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Instructor</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Min/Max number of persons</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Number of enrolled</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Points</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Semester of studies</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Select the course</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>


            <Typography variant="h6" style={{marginTop: "100px"}}>Elective courses</Typography>
            <TableContainer component={Paper} sx={{width: 800}} style={{margin: "0 auto", marginTop: "10px"}}>
                <Table sx={{width: 800}} aria-label="elective courses">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Course Code</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Name of the course</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Instructor</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Min/Max number of persons</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Number of enrolled</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Points</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Semester of studies</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Select the course</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="right">0257619800</TableCell>
                            <TableCell align="right">Computer Graphics</TableCell>
                            <TableCell align="right">Zubert Mariusz, dr hab. inż. </TableCell>
                            <TableCell align="right">1/99</TableCell>
                            <TableCell align="right">16</TableCell>
                            <TableCell align="right">3</TableCell>
                            <TableCell align="right">5</TableCell>
                            <TableCell align="right">Selected</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="right">0252642100</TableCell>
                            <TableCell align="right">GUI Programming</TableCell>
                            <TableCell align="right">Nowakowski Jacek, dr inż.</TableCell>
                            <TableCell align="right">1/99</TableCell>
                            <TableCell align="right">16</TableCell>
                            <TableCell align="right">3</TableCell>
                            <TableCell align="right">5</TableCell>
                            <TableCell align="right">Selected</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default CoursesPage;