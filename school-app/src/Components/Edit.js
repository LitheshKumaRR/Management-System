import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { deepPurple, green, yellow } from "@mui/material/colors";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Stack from "@mui/material/Stack";
import './edit.css'
const useStyles = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: "#1976d2",
    color: "white",
  },
});

const Edit = ({ formData, feildChange }) => {
  const classes = useStyles();
  const { _id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);
  const [stuData, setStuData] = useState({
    _id: formData[0]._id,
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3300/students`,
    })
      .then((res) => {
        console.log(res.data);
        setStudent(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const onTextFieldChange = (prop) => (e) => {
    const { value } = e.target;
    

    setStuData({ ...stuData, [prop]: value });
  };
 

  async function onFormSubmit(e) {
    e.preventDefault();

    axios({
      method: "put",
      url: `http://localhost:3300/students/${formData[0]._id}`,
      data: stuData,
    })
      .then((res) => {
        console.log(res.data, "response");
        navigate("/");
      })
      .catch((error) => {
        console.log(error,"Something is Wrong");
        navigate("/");
      });
  }
  function handleClick() {
    navigate("/");
  }
  return (
    <div >
      
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh", margin: "auto !important" }}
        spacing={0}
      >
        <Grid item md={6} xs={12} sx={{margin:"auto"}}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Edit Details</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  value={formData[0]._id}
                  disable
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
                  label="First_Name"
                  value={stuData.first_name}
                  onChange={onTextFieldChange("first_name")}
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
                  label="Last_name"
                  value={stuData.last_name}
                  onChange={onTextFieldChange("last_name")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="phone"
                  name="phone"
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  value={stuData.phone}
                  onChange={onTextFieldChange("phone")}
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
                  label="Email"
                  value={stuData.email}
                  onChange={onTextFieldChange("email")}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                fullWidth
                onClick={onFormSubmit}
              >
                Update
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Stack spacing={2} direction="row">
              <Button variant="contained" color="primary" onClick={handleClick}>
                Back to Home
              </Button>
              <Link to={`/add`}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  Add Student
                </Button>
              </Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    
    </div>
  );
};

export default Edit;
