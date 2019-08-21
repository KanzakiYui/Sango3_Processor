const fs = require('fs');
const iconv = require('iconv-lite');

module.exports = {
    dataWriter: (data, filename) => {
        const rawString = data.reduce((accumulator, item)=>{
            accumulator += '[GENERAL]\r\n';
            for(let key in item)
                accumulator += `${key} = ${item[key]}\r\n`;
            accumulator += '\r\n';
            return accumulator;
        },'');
        fs.writeFileSync(filename, iconv.encode(rawString, 'Windows950'));
    }
};


