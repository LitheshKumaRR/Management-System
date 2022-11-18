import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { deepPurple, green } from "@mui/material/colors";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
});

const  AddStu = ()=> {
  const classes = useStyles();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    _id: "",
    first_name: "",
    last_name: "",
    class: "",
    blood_group: "",
    batch: "",
    email: "",
    phone:"",
  });
  const [status, setStatus] = useState();

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3300/students`, student);
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  if (status) {
    navigate("/");
  }
  return (
    <>
      
          <Box sx={{ flexGrow: 1 }} md={6}>
      <Grid container  spacing={4} sx={{marginTop:"5%"}}>
        <Grid item md={6} xs={12} sx={{margin:"auto"}}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Add Student</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="_id"
                  name="_id"
                  variant="outlined"
                  required
                  fullWidth
                  id="_id"
                  label="Id"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="first_name"
                  name="first_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="first_name"
                  label="First_name"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="last_name"
                  name="last_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="last_name"
                  label="Last_name "
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="class"
                  name="class"
                  variant="outlined"
                  required
                  fullWidth
                  id="class"
                  label="Class "
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="blood_group"
                  name="blood_group"
                  variant="outlined"
                  required
                  fullWidth
                  id="blood_group"
                  label="Blood_group "
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="batch"
                  name="batch"
                  variant="outlined"
                  required
                  fullWidth
                  id="batch"
                  label="Batch "
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email "
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="phone"
                  name="phone"
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone "
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
      </Box>
      {/* </div> */}
    </>
  );
};

export default AddStu;
