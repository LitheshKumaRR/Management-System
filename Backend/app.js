import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import {} from 'dotenv/config';
import dotenv from "dotenv";
//import routes
import StudentRoute from './routes/student_route.js';


const app = express();
dotenv.config();


//database connection

mongoose.connect("mongodb+srv://litheshkumar:litheshwl@cluster0.n0vndvw.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true
}).then(() => {
    console.log("DB connected");
}).catch(err=>{
    console.log('Database not connected'+err)
})

const port = 3300;

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use('/students',StudentRoute);

//server connection
app.get('/',(req,res)=>{
    res.send("welcome!")
    
})
app.listen(port, () => {
    console.log(`servers is running on port ${port}`);
});
