const {dataReader, dataWriter, general01_dataProcessor} = require('../library');

module.exports = () => {
    const {data: originalData, newLine} = dataReader('General01');
    const modifiedData = general01_dataProcessor(originalData);
    let counter = 0;
    modifiedData.forEach(item => {
        const {Name, Strength, Intelligence, HP, MP, Weapon, SuperAttack, SoldierType} = item;
        if( Number(Strength) > 90 || Number(Intelligence) > 90){
            console.log(`${Name} ${Strength} ${Intelligence} ${HP} ${MP} ${Weapon} ${SuperAttack} ${SoldierType}`);
            counter ++
        }
    });
    console.log(counter);
    dataWriter(modifiedData, 'General01', newLine);
};