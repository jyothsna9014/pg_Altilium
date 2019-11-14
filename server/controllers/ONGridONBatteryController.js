
var { logfixtures } = require('../models')
var models = require('../models')

const getONGrid = (req, res, next) => {



    logfixtures.findAll({

        attributes: [[models.sequelize.fn("COUNT", models.sequelize.col("powerMode")), "ONGrid"]

        ],


        where: {
            powerMode: 'Grid'
        }


    }).then(ONGrid => {
        console.log("succes", ONGrid)
        res.send(ONGrid);
    }).catch(err => {
        console.log("fail", err)
        res.render('index', { title: 'API' });
    })
}
const getONBattery = (req, res, next) => {



    logfixtures.findAll({

        attributes: [[models.sequelize.fn("COUNT", models.sequelize.col("powerMode")), "ONBattery"]

        ],
        where: {
            powerMode: 'Battery',

        }

    }).then(ONBattery => {
        console.log("succes", ONBattery)
        res.send(ONBattery);
    }).catch(err => {
        console.log("fail", err)
        res.render('index', { title: 'API' });
    })
}


module.exports = { getONGrid, getONBattery }
