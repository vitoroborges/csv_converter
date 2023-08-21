const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFWriter = require('./PDFWriter');

let reader = new Reader();
let writer = new Writer();

async function main(){
    let data = await reader.Read('./planilha.csv');
    let processedData = Processor.Process(data);

    let users = new Table(processedData);

    let html = await HtmlParser.Parse(users);

    writer.Write("teste.html", html)
    PDFWriter.WritePDF("test.pdf", html)
}

main();
