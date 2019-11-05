var { logfixtures } = require('../server/models')
var updateOrCreate = require('../pg/UpdateOrCreate')


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
    var powerMode= pmode();
    function pmode() {
        if ((mode & 0xc0) === 0x00) {
            {

                if ((mode && 0x20) === 0x20) {
                    return ("Batterymode&present")
                }

                else {
                    return ("batterymode&Absent");
                }
            }
        }

        else if ((mode && 0xc0) === 0x40) {

            if ((mode && 0x20) === 0x20) {
                return ("gridmode&present");
            }
            else {
                return ("gridmode&absent");
            }
        }
        else if ((powerMode&& 0xc0) === 0x80) {
            if ((powerMode && 0x20) === 0x20) {
                return ("chargemode&present");
            }
            else {
                return ("chargemode&absent")
            }

        }

    }

    var newObj = {
        fixtureid: message_str.toString("hex", 3, 11),
      
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
   updateOrCreate.updateOrCreate(logfixtures, { fixtureid: newObj.fixtureid }, newObj)
}

module.exports = {};

module.exports = { insertRecord }