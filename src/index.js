const dataReader = require('./read').dataReader;
const dataProcessor = require('./process').dataProcessor;
const dataWriter = require('./write').dataWriter;

const originalData = dataReader('General01.ini');
const modifiedData = dataProcessor(originalData);

let counter = 0;
modifiedData.forEach(item => {
    const {Name, Strength, Intelligence, HP, MP, Weapon, SuperAttack, SoldierType} = item;
    if( Number(Strength) > 85 || Number(Intelligence) > 85){
        console.log(`${Name} ${Strength} ${Intelligence} ${HP} ${MP} ${Weapon} ${SuperAttack} ${SoldierType}`);
        counter ++
    }
});
console.log(counter);

dataWriter(modifiedData, 'output.ini');