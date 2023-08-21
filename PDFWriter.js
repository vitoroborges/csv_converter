const htmlPdf = require("html-pdf")

class PDFWriter{
    static WritePDF(filename, html){
        htmlPdf.create(html, {childProcessOptions: {
            env: {
                OPENSSL_CONF: '/dev/null',
            },
        }
        }).toFile(filename)

    }
}
module.exports = PDFWriter;

