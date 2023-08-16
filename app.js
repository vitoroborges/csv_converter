const Reader = require('./Reader');

let leitor = new Reader();

async function main(){
    let dados = await leitor.Read('./planilha.csv');
    console.log(dados);
}

main();
