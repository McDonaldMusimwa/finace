import express,{Request,Response} from "express";
import { statement1 } from "../data/data";
const statementsrouter = express.Router()

statementsrouter.get("/",(req:Request,res:Response)=>{
    console.log("statements recheaed")
    res.status(200).json({message:"Successfull",data:statement1})
})

export default statementsrouter