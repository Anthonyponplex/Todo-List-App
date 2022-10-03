import express, {Request, Response,NextFunction} from "express";
import db from "./config/database.config";
import todoRouter from "./todo/route"


db.sync().then(() =>{
    console.log("connect to db"); 
});


const app = express();
const port = 9000;

app.use(express.json());

app.use(todoRouter)



app.listen(port, ()=>{
    console.log("server is running ${port} ")
});