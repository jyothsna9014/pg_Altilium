var {fixtures}=require('../models')
var getfixtures = (req, res, next) => {
  fixtures.findAll().then(data => {
    console.log("succes", data)
    res.send(data);
  }).catch(err => {
    console.log("fail",err)
    res.render('index', { title: 'API' });
  })
    
  }
  module.exports = {getfixtures}