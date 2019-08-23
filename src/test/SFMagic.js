const {dataReader, dataWriter} = require('../library');

module.exports = () => {
    const {data: originalData, newLine} = dataReader('SFMagic');
    console.log(originalData);
    dataWriter(originalData, 'SFMagic', newLine);
};