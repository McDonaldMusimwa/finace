import express,{Request,Response} from 'express'
import statementsrouter from './statements'
import { statement1 } from '../data/data'
const indexRouter = express.Router()

indexRouter.get("/",(req:Request,res:Response)=>{
res.status(200).json({message:"Server running nOW"})
})
indexRouter.use("/statement",statementsrouter)  

export default indexRouter;