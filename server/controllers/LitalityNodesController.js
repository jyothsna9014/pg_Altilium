
var { logfixtures } = require('../models')
var models = require('../models')
const getLitalityNodes = (req, res, next) => {



    logfixtures.findAll({

        attributes: [[models.sequelize.fn("COUNT", models.sequelize.col("fixtureid")), "LitalityNodes"]

        ],
        
                
            
    }).then(LitalityNodes => {
        console.log("succes", LitalityNodes)
        res.send(LitalityNodes);
    }).catch(err => {
        console.log("fail", err)
        res.render('index', { title: 'API' });
    })
}

module.exports = { getLitalityNodes}