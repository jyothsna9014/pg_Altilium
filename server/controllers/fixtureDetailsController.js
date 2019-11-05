var  {fixtures} = require('../models');
var  {logfixtures}  = require('../models');
const getfixturedetails = (req, res, next) => {

  fixtures.findAll({ include: [{ model: logfixtures, fixtureId: logfixtures.fixtureId }] }).then(data => {
    console.log("succes", data)
    res.send(data);
  }).catch(err => {
    console.log("fail", err)
    res.render('index', { title: 'API' });
  })

}

module.exports = { getfixturedetails }
