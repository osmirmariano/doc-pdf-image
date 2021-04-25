const fs = require('fs');
const doc = require('libreoffice-convert');

class DocPdfImage {
    constructor() { };

    docToPdf(input, output) {
        let file = fs.readFileSync(input);
        doc.convert(file, '.pdf', undefined, (err, done) => {

        })
    }

    docToImage(input) {
        let file = fs.readFileSync(input);
            doc.convert(file, '.pdf', undefined, (err, done) => {
            
        })
    }

}

module.exports = new DocPdfImage();