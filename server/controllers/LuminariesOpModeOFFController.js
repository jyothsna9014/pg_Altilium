
var { logfixtures } = require('../models')
var models = require('../models')
const getopmodeOFF = (req, res, next) => {



    logfixtures.findAll({

        attributes: [[models.sequelize.fn("COUNT", models.sequelize.col("LuminariesOpMode")), "opmodeCountOFF"]

        ],
        where: { LuminariesOpMode: '0'},
                
            
    }).then(opmodeCountOFF => {
        console.log("succes", opmodeCountOFF)
        res.send(opmodeCountOFF);
    }).catch(err => {
        console.log("fail", err)
        res.render('index', { title: 'API' });
    })
}

module.exports = { getopmodeOFF}