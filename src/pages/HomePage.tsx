import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState } from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

type Row = {
    code: string;
    name: string;
    instructor: string;
    ects: number;
    grades: string;
    finalGrade: string;
    payable: string;
}
const HomePage = () => {
    const [selectedSemester, setSelectedSemester] = useState(5)
    const rows5sem: Row[] = [
        {code: "22 9115853 40", name: "Civic Knowledge and Engagement 4", instructor: "mgr Iwona Wróblewska", ects: 1,grades: " ", finalGrade: " ", payable: "no" },
        {code: "02 6363400 00", name: "Computer Aided Design", instructor: "dr inż. Witold Kubiak", ects: 3,grades: " ", finalGrade: " ", payable: "no" },
        {code: "02 576198 00", name: "Computer Graphics", instructor: "dr hab. inż. Mariusz Zubert", ects: 3,grades: " ", finalGrade: " ", payable: "no" },
    ]

    const rows4sem: Row[] = [
        {code: "22 9115853 30", name: "Civic Knowledge and Engagement 3", instructor: "mgr Iwona Wróblewska", ects: 1,grades: " ", finalGrade: "5", payable: "no" },
        {code: "02 6545615 00", name: "Computer Architecture", instructor: "dr inż. Witold Marańda", ects: 5,grades: "Lab. 4.5, Ćw. 4.0 Wyk. 4.0", finalGrade: "4", payable: "no" },
        {code: "02 6556564 00", name: "Interactive Web Applications", instructor: "dr inż. Rafał Kotas", ects: 3,grades: "Wyk. 4.0, Lab. 4.0", finalGrade: "4", payable: "no" },
    ]

    const [selectedRows, setSelectedRows] = useState<Row[]>(rows5sem)
   /* useEffect(()=>{
        if(selectedSemester === 5) setSelectedRows(rows5sem);
        if(selectedSemester === 4) setSelectedRows(rows4sem);
    },[])*/
    const handleSemesterChange = (value: number) => {
        setSelectedSemester(value);
        if(value === 5) setSelectedRows(rows5sem);
        if(value === 4) setSelectedRows(rows4sem);
    }

    return (
        <div >
            <Alert severity="warning" style={{width: "600px", marginLeft: "35%", marginTop: "50px"}}>Szanowni Państwo Uczelniane Centrum Informatyczne wraz z Centrum E-Learningu uruchomiło dla nauczycieli wprowadzanie ocen z WF bezpośrednio z platformy WIKAMP. W związku z tym wszelkie uwagi proszę kierować do nauczycieli, tym bardziej że mają oni podgląd na Państwa sytuację oraz na informację o powodzie nie przesłania oceny. Pozytywne przesłanie oceny powoduje to, że jest ona widoczna w WEBDziekanacie.</Alert>
            <div style={{marginTop: "100px", display: "flex", marginLeft: "25%"}}>
                <FormControl sx={{ m: 1, width: 150, marginTop: "10px" }} size="small" variant="filled">
                    <InputLabel>Semester</InputLabel>
                    <Select label="Age" value={selectedSemester} onChange={(event) => {handleSemesterChange(event.target.value as number)}}>
                        <MenuItem value={5}>2022/23 Z - 5</MenuItem>
                        <MenuItem value={4}>2021/22 L - 4</MenuItem>
                        <MenuItem value={3}>2021/22 Z - 3</MenuItem>
                        <MenuItem value={2}>2020/21 L - 2</MenuItem>
                        <MenuItem value={1}>2020/21 Z - 1</MenuItem>
                    </Select>
                </FormControl>
                <Typography variant="h6" style={{color: "#800000",  width: "150px", marginLeft: "250px"}}>Report Card</Typography>
            </div>
            <Typography variant="body1">Average grade: 3.83 Acumulated Points: 30/30</Typography>
            <TableContainer component={Paper} sx={{width: 1000}} style={{marginLeft: "25%", marginTop: "30px"}} >
                <Table sx={{width: 1000}} aria-label="report table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Code</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Instructor</TableCell>
                            <TableCell align="right">ECTS</TableCell>
                            <TableCell align="right">Grades</TableCell>
                            <TableCell align="right">Final Grade</TableCell>
                            <TableCell align="right">Payable</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {selectedRows.map(row => (<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="right">{row.code}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.instructor}</TableCell>
                            <TableCell align="right">{row.ects}</TableCell>
                            <TableCell align="right">{row.grades}</TableCell>
                            <TableCell align="right">{row.finalGrade}</TableCell>
                            <TableCell align="right">{row.payable}</TableCell>
                        </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default HomePage