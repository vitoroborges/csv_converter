class Processor{
    static Process(data){
        let part = data.split("\r\n");
        let rows = [];
        part.forEach(row => {
            let arr = row.split(',');
            rows.push(arr);
        })

        return rows;
    }
}

module.exports = Processor;
