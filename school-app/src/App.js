import React ,{useState}from 'react';
import './App.css';
// import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';

import Testing from './Components/StudentList';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Edit from './Components/Edit';
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Loader from './Components/Loader';

import AddStu from './Components/AddStu';



function App() {
  const[formData, setFormData] = useState( null)
  const feildChange=(prop,value)=>{
  console.log(prop,"prop",value)
  }

  const handleFormData=(id,list)=>{
setFormData(
    list.filter((form)=>{
      return form._id == id
    }));
  }
  console.log(formData,"formData")
  return (
   <>

   <Router>
    <Navbar />
        <Routes>
          <Route exact path="/" element={<Testing handleFormData={handleFormData}/>} />
          <Route exact path="/edit" element={<Edit formData={formData} feildChange={feildChange}/>} />
          <Route exact path="/loader" element={<Loader/>} />
          <Route exact path="/add" element={<AddStu/>} />
        </Routes>
        <Footer/>
      </Router>
   </>
  );
}

export default App;
