# doc-pdf-image
Biblioteca para converter arquivos de doc, docx para pdf e imagem

## Aplicação ##
Converter DOC, DOCX para PDF
```js
const docPdfImage = require('doc-pdf-image');

let conversao = await docPdfImage.docToPdf('./exemplo/exemplo.eml');
conversao.success ? 'Arquivo convertido com sucesso' : 'Não foi possível converter';
```

Converter DOC, DOCX para IMAGEM (JEPG)
```js
const docPdfImage = require('doc-pdf-image');

let conversao = await docPdfImage.docToImage('./exemplo/exemplo.eml');
conversao.success ? 'Arquivo convertido com sucesso' : 'Não foi possível converter'
```

## License ##

Este projeto é licenciado sobre MIT License - [LICENSE.md](LICENSE) para mais detalhes vide arquivo

## Perfil ##
* E-mail: osmirmarianocc@gmail.com
* Link do npm https://www.npmjs.com/package/eml-pdf-image
