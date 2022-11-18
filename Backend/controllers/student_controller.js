import StudentService from "../services/student_services.js";

export default class StudentController {
 
  createStudent(request, response, next) {
    
     StudentService.prototype
      .createStudent(request)
      .then(creatingstudent => {
        response.json(creatingstudent);
      })
      .catch(error => {console.log(error) 
        next(error)});
  }

   getAllStudents(request,response,next){
     StudentService.prototype
      .getAllStudents (request)
      .then(getallstudents => {
        response.json(getallstudents);
      })
      .catch(error=>next(error));
   }

   getOneStudent(request,response,next){
  
    StudentService.prototype
     .getOneStudent(request)
     .then(getonestudent => {
       response.json(getonestudent);
     })
     .catch(error=>next(error));
  }
  updateStudent(request,response,next){
    StudentService.prototype
      .updateStudent(request)
      .then(updatestudent=> {
        response.json(updatestudent);
      })
      .catch(error=>next(error));
  
  };

  deleteStudent(request,response,next){
   StudentService.prototype
     .deleteStudent(request)
     .then(deletestudent=>{
       response.json(deletestudent);
     })
     .catch(error=>next(error));
  };
  }

