import express from "express"
import type { Express } from "express"
/*
import { PdfReader } from "pdfreader";

new PdfReader().parseFileItems("./src/pdf/jan.pdf", (err, item) => {
  if (err) console.error("error:", err);
  else if (!item) console.warn("end of file");
  else if (item.text) console.log(item.text);
});
*/
import fs from "fs";
import PDFParser from "pdf2json"; 
interface PatchedPDFParser extends PDFParser {
  getRawTextContent: () => string;
}
const pdfParser = new PDFParser(undefined, 1) as PatchedPDFParser;

pdfParser.on("pdfParser_dataError", (errData) =>
 console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", (pdfData) => {
 fs.writeFile(
  "./pdf2json/test/F1040EZ.json",
  JSON.stringify(pdfData),
  (data) => console.log(data)
 );
});

pdfParser.loadPDF("./src/pdf/jan.pdf");






const app:Express = express()
const PORT:number= 8000

app.get("/",(req,res):void=>{
res.send({message:"Bank statement"})
})

app.listen(PORT,():void=>{
    console.log(`Server running on port ${PORT}`)
})

