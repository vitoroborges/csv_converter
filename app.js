const Reader = require('./Reader');
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require("./HtmlParser")

let leitor = new Reader();

async function main(){
    let data = await leitor.Read('./planilha.csv');
    let processedData = Processor.Process(data);
    
    let users = new Table(processedData);
    
    let html = await HtmlParser.Parse(users);

    console.log(html)

}

main();
