import { PdfReader } from "pdfreader";

new PdfReader().parseFileItems("./src/pdf/jan.pdf", (err, item) => {
  if (err) console.error("error:", err);
  else if (!item) console.warn("end of file");
  else if (item.text) console.log(item.text);
});

import fs from "fs";
import PDFParser from "pdf2json"; 

const pdfParser = new PDFParser(undefined, 1) ;

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