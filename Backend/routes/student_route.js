import express from "express";
import StudentController from "../controllers/student_controller.js";

const Router = express.Router();

Router
  .route("/")
  .post(StudentController.prototype.createStudent)
  .get(StudentController.prototype.getAllStudents)
Router
  .route("/:student_id")  
  .get(StudentController.prototype.getOneStudent)
  .put(StudentController.prototype.updateStudent)
  .delete(StudentController.prototype.deleteStudent)

 export default Router;
