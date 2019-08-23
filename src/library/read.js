const fs = require('fs');
const iconv = require('iconv-lite');
const { fileNameToSeperatorMap } = require('./constant');

module.exports = filename => {
        const filepath = `input/${filename}.ini`;
        const rawData = iconv.decode(fs.readFileSync(filepath), 'Windows950');
        const newLine = rawData.includes('\r\n') ? '\r\n' : '\n';
        const separator = `[${fileNameToSeperatorMap[filename]}]`;   
        const groupedData = rawData.split(separator).filter(item => item.length > 2);
        groupedData.forEach((item, index) => {
            const parsedItem = item.split(newLine).filter(item => item.length);
            groupedData[index] = parsedItem.reduce((accumulator, value)=>{
                const entries = value.split(' = ');
                accumulator[entries[0]] = entries[1];
                return accumulator;
            },{});
        });
        return {
            data: groupedData,
            newLine
        };
    };








