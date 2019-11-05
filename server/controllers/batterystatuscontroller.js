
var {logfixtures}=require('../models')

var models=require('../models')
const getbatterystatus = (req, res, next) => {

logfixtures.findAll({
        attributes:[[models.sequelize.fn('avg', models.sequelize.col('batteryLevel')), 'batterystatus']],
        // group:'batteryLevel',
        
     
     }).then(batterystatus => {
            console.log("succes", batterystatus)
            res.send(batterystatus);
        }).catch(err => {
            console.log("fail", err)
            res.render('index', { title: 'API' });
        })
}

module.exports = {getbatterystatus}

// attributes: [[sequelize.fn('max', sequelize.col('batteryLevel')), 'batterystatus']],

        // raw: true,

    // logfixtures.query(
    //     'SELECT AVG("batteryLevel" ) FROM "logfixtures"',
    //     { type: sequelize.QueryTypes.SELECT }
    // )