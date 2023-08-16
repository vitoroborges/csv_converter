const Reader = require('./Reader');
const Processor = require('./Processor')
const Table = require('./Table')

let leitor = new Reader();

async function main(){
    let data = await leitor.Read('./planilha.csv');
    let processedData = Processor.Process(data);
    
    let users = new Table(processedData);
    
    console.log(users.RowCount);


}

main();
