var { logfixtures } = require('../server/models')
var updateOrCreate = require('../pg/UpdateOrCreate')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');

const insertRecord = (message_str) => {
    var battery = message_str.readUInt8(12);
    var mode = message_str.readUInt8(11);
    var batteryLevel = batlvl();
    function batlvl() {
        if ((battery & 0x80) == 0x80) {
            return (0x7f & battery)
        }
        else {
            return ("No value")
        }

    }

    var occupancy = occu();
    function occu() {
        if ((mode && 0x20) === 0x20) {
            return ("Present")
        }

        else {
            return ("Absent");
        }
    }


    var powerMode = pmode();
    function pmode() {
        if ((mode && 0xc0) === 0x00) {
            return ("Battery");
        }

        else if ((mode && 0xc0) === 0x40) {
            return ("Grid");

        }
        else if ((powerMode && 0xc0) === 0x80) {
            return ("Charge")


        }

    }

    var newObj = {
        fixtureid: message_str.toString("hex", 3, 11),
        occupancy: occu(),
        powerMode: pmode(),
        //battery : message_str.readUInt8(12),
        batteryLevel: batlvl(),
        XSRpower: message_str.readUInt16LE(13, 14),
        LEDpower: message_str.readUInt16LE(15, 16),
        batteryPower: message_str.readUInt16LE(17, 18),
        LuminariesOpMode: message_str.readUInt8(19),
        FaultData: message_str.readUInt8(20),
        Brightnesslevel: message_str.readUInt8(21),

    }
    let headerArr = [];
    Object.keys(newObj).forEach(key => {
        console.log(key)
       let recordObj = {'id':key, 'title':key} 
       headerArr.push(recordObj);
    })
    // console.log(JSON.stringify(headerArr[0]))
    
    // console.log(JSON.stringify(headerArr))
    let csvWriterOption = {
        path: 'out.csv',
        header:  headerArr
      }
      fs.existsSync('out.csv') ? csvWriterOption['append'] = true:csvWriterOption['append'] = false;
    const csvWriter = createCsvWriter(csvWriterOption);
      console.log(fs.existsSync('out.csv'))
      
      csvWriter.writeRecords([newObj])       // returns a promise
    .then(() => {
        console.log('...Done');
    })

    updateOrCreate.updateOrCreate(logfixtures, { fixtureid: newObj.fixtureid }, newObj)
}

module.exports = {};

module.exports = { insertRecord }