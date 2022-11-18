import Student from '../models/student.js';
import { ObjectId } from "mongodb";


export default class StudentService{
    createStudent(request){
        return new Promise((resolve,reject)=>{
            Student.create(request.body)
            .then(creatingstudent=>{
                resolve(creatingstudent)
            }).catch(error=>reject(error))
        })
    }
    getAllStudents(request) {
        return new Promise((resolve, reject) => {
          let matchQuery={}
          if(request.query.first_name){
            matchQuery['first_name']=request.query.first_name
          }
          
          if(request.query.last_name){
            matchQuery['last_name']=request.query.last_name
          }
          if(request.query.email){
            matchQuery['email']=request.query.email
          }
          Student.find(matchQuery)
            .then(getallstudents=> {
              resolve(getallstudents)
            }).catch(error => reject(error));
        })
      }
      getOneStudent(request) {
        return new Promise((resolve, reject) => {
          console.log(request)
          console.log(request.params.student_id)
      Student.findOne({_id:request.params.student_id})
            .then(getonestudent=> {          resolve(getonestudent)
            }).catch(error => reject(error));
        })
      }
      updateStudent(request) {
        return new Promise((resolve, reject) => {
      Student.findOneAndUpdate({_id:request.params.student_id},{$set:request.body},{new:true})
            .then(updatingstudentdetails => { 
              resolve(updatingstudentdetails)
  
            }).catch(error => {
            console.log("error update",error);
            reject(error)});
            
        })
      }
      deleteStudent(request) {
        return new Promise((resolve, reject) => {
      Student.findOneAndRemove({_id:request.params.student_id})
            .then(deletingstudent=> {          resolve(deletingstudent)
            }).catch(error => reject(error));
        })
      }
}