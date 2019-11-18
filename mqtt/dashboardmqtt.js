var mqttclient = require('../mqtt/mqtt')
var { getdashboard, ONGridPromise, ONBatteryPromise, opmodeOFFPromise, opmodeONPromise, LitalityNodesPromise, BatteryStatusPromise } = require('../server/services/dashboardService')
//var mqtt_publish = require('./mqtt')


const dash = () => {
   return new Promise((resolve, reject) => {
        Promise.all([ONGridPromise, ONBatteryPromise, opmodeOFFPromise, opmodeONPromise, LitalityNodesPromise, BatteryStatusPromise]).then((result) => {
            //console.log('on battery issss ==== ',result[1])
            const resultObj = JSON.parse(JSON.stringify(result))
            //console.log(JSON.stringify(result[0][0]))
            let response = {};

            for (let i = 0; i < resultObj.length; i++) {

                response[Object.keys(resultObj[i])[0]] = Object.values(resultObj[i])[0]
            }
            console.log(response);
            resolve(response);
        });
    });
}


module.exports = { dash}