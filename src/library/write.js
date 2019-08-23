const fs = require('fs');
const iconv = require('iconv-lite');
const { fileNameToSeperatorMap } = require('./constant');

module.exports = (data, filename, newLine) => {
        const filepath = `output/${filename}.ini`;
        const separator = `[${fileNameToSeperatorMap[filename]}]`;
        const rawString = data.reduce((accumulator, item)=>{
            accumulator += separator+newLine;
            for(let key in item)
                accumulator += `${key} = ${item[key]}${newLine}`;
            accumulator += newLine;
            return accumulator;
        },'');
        fs.writeFileSync(filepath, iconv.encode(rawString, 'Windows950'));
    };


