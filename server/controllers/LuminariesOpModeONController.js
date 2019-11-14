var { logfixtures } = require('../models')
var models = require('../models')
const getopmodeON = (req, res, next) => {



    logfixtures.findOne({

        attributes: [[models.sequelize.fn("COUNT", models.sequelize.col("LuminariesOpMode")), "opmodeCountON"]

        ],
        where: { LuminariesOpMode: '1'},
                
            
    }).then(opmodeCountON => {
        console.log("succes-----", opmodeCountON)
        res.send(opmodeCountON);
    }).catch(err => {
        console.log("fail", err)
        res.render('index', { title: 'API' });
    })
}

module.exports = { getopmodeON}