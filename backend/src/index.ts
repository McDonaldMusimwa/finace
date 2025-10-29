import express from "express"
import type { Express } from "express"
import indexRouter from "./routes/indexRouter"
/* line 3 to line 10*/









const app:Express = express()
const PORT:number= 8000

app.use("/",indexRouter)

app.listen(PORT,():void=>{
    console.log(`Server running on port ${PORT}`)
})


/*
import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript Express Server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/