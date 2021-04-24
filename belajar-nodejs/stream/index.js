const fs = require('fs');

const readableStream = fs.createReadStream('./input.txt', { 
    highWaterMark: 15
});

const writeableStream = fs.createWriteStream('./output.txt');

readableStream.on('readable', () => {
    try {
        let data;
        while(data = readableStream.read()) {
            writeableStream.write(`${data.toString('utf8')}\n`)
        }
    } catch (error) {
        console.log(error);
    }
});

readableStream.on('end', () => {
    console.log('end');
});