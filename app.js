const Reader = require('./Reader');
const Processor = require('./Processor')

let leitor = new Reader();

async function main(){
    let data = await leitor.Read('./planilha.csv');
    let processedData = Processor.Process(data);
}

main();
