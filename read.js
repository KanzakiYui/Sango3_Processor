const fs = require('fs');
const iconv = require('iconv-lite');

module.exports = {
    dataReader: filename => {
        const rawData = iconv.decode(fs.readFileSync(filename), 'Windows950');
        const groupedData = rawData.split('[GENERAL]').filter(item => item.length > 2);
        groupedData.forEach((item, index) => {
            const parsedItem = item.split('\r\n').filter(item => item.length);
            groupedData[index] = parsedItem.reduce((accumulator, value)=>{
                const entries = value.split(' = ');
                accumulator[entries[0]] = entries[1];
                return accumulator;
            },{});
        });
        return groupedData;
    }
};








