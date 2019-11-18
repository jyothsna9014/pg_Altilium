var { logfixtures } = require('../models')
var models = require('../models')
var ONGridPromise = new Promise((resolve, reject) => {
    resolve(Grid());
});

var ONBatteryPromise = new Promise((resolve, reject) => {

    resolve(Battery());
});

var LitalityNodesPromise = new Promise((resolve, reject) => {

    resolve(LitalityNodes());
});


var opmodeOFFPromise = new Promise((resolve, reject) => {

    resolve(opmodeOFF());
});

var opmodeONPromise = new Promise((resolve, reject) => {

    resolve(opmodeON());
});
var BatteryStatusPromise = new Promise((resolve, reject) => {

    resolve(batteryStatus());
});


function Grid() {
    ONGrid = logfixtures.findOne({

        attributes: [[models.sequelize.fn("COUNT", models.sequelize.col("powerMode")), "ONGrid"]

        ],


        where: {
            powerMode: 'Grid'
        }


    });

    console.log(ONGrid)
    return ONGrid;

}

function Battery() {
    ONBattery = logfixtures.findOne({

        attributes: [[models.sequelize.fn("COUNT", models.sequelize.col("powerMode")), "ONBattery"]

        ],


        where: {
            powerMode: 'Battery'
        }


    });
   
    return ONBattery;

}

function opmodeOFF() {

    modeOFF = logfixtures.findOne({

        attributes: [[models.sequelize.fn("COUNT", models.sequelize.col("LuminariesOpMode")), "opmodeCountOFF"]

        ],
        where: { LuminariesOpMode: '0' },


    });
    return modeOFF;
}
function opmodeON() {
    modeON = logfixtures.findOne({

        attributes: [[models.sequelize.fn("COUNT", models.sequelize.col("LuminariesOpMode")), "opmodeCountON"]

        ],
        where: { LuminariesOpMode: '1' },


    })
    return modeON;
}

function LitalityNodes(){
    Litalitynodecount=
    logfixtures.findOne({

        attributes: [[models.sequelize.fn("COUNT", models.sequelize.col("fixtureid")), "LitalityNodes"]

        ],
        
                
            
    })
    return Litalitynodecount;
}
function batteryStatus(){
    battery= logfixtures.findOne({
        attributes: [[models.sequelize.fn('avg', models.sequelize.col('batteryLevel')), 'batterystatus']],
  


    })
    return battery;
}

module.exports = {ONGridPromise, ONBatteryPromise, opmodeOFFPromise, opmodeONPromise,LitalityNodesPromise,BatteryStatusPromise}