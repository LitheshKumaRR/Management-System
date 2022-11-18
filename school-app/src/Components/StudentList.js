import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Testing({handleFormData}) {
  const [list, setList] = useState([]);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth0();

  const handleEdit=(e)=>{
    const {id} = e.currentTarget
    handleFormData(id,list);
    
   navigate(`/edit`)
  }
 

  const handleDelete = async (_id) => {
    await axios.delete(`http://localhost:3300/students/${_id}`);
    var newstudent = students.filter((item) => {
      // console.log(item);
      return item._id !== _id;
    });
    setStudents(newstudent);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3300/students')
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <TableContainer component={Paper} sx={{ marginTop: "7%" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">First_Name</StyledTableCell>
              <StyledTableCell align="right">Last_name</StyledTableCell>
              <StyledTableCell align="right">Batch</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Blood_group</StyledTableCell>
              <StyledTableCell align="right">Class</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((student) => (
              <StyledTableRow key={student.name}>
                <StyledTableCell component="th" scope="row">
                  {student._id}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {student.first_name}
                </StyledTableCell>
                <StyledTableCell align="right">{student.last_name}</StyledTableCell>
                <StyledTableCell align="right">{student.batch}</StyledTableCell>
                <StyledTableCell align="right">{student.email}</StyledTableCell>
                <StyledTableCell align="right">
                  {student.blood_group}
                </StyledTableCell>
                <StyledTableCell align="right">{student.class}</StyledTableCell>
                <StyledTableCell align="right">{student.phone}</StyledTableCell>
                {/* {isAuthenticated ? (
                <StyledTableCell align="right">
                  <Link to={`/details`}>
                
                  <Button variant="contained">Details</Button>
                  </Link>
                </StyledTableCell>
              ) : (
                <StyledTableCell align="right">
                <Link to={`/loader`}>
                
                <Button variant="contained">Details</Button>
                </Link>
                </StyledTableCell>
               
              )} */}
                {isAuthenticated ? (
                  <StyledTableCell align="right">
                    <Stack direction="row-reverse" spacing={2}>
                      
                      <IconButton onClick={() => handleDelete(student._id)}>
                        <DeleteIcon sx={{ color: "black" }} />
                      </IconButton>

                    
                        <IconButton id={student._id} onClick={handleEdit} > 
                          <EditIcon  sx={{ color: "black" }} />
                        </IconButton>
                    
                    </Stack>
                  </StyledTableCell>
                ) : (
                  <StyledTableCell align="right">
                    <Link to={`/loader`}>
                    <Stack direction="row-reverse" spacing={2}>
                      {/* onClick={() => handleDelete(student.id)} */}
                      <IconButton>
                        <DeleteIcon sx={{ color: "black" }} />
                      </IconButton>

                      <Link to={`/loader`}>
                        <IconButton>
                          <EditIcon sx={{ color: "black" }} />
                        </IconButton>
                      </Link>
                    </Stack>
                    </Link>
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
