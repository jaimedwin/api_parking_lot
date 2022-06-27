const wkhtmltopdf = require('wkhtmltopdf').command;

//wkhtmltopdf('http://apple.com/', { output: 'out.pdf' });
//wkhtmltopdf('http://google.com/', { pageSize: 'letter' }).pipe(fs.createWriteStream('out.pdf'));
console.log(wkhtmltopdf);

wkhtmltopdf('http://ourcodeworld.com', { 
    output: 'ourcodeworld.pdf',
    pageSize: 'letter'
});