
var {logfixtures}=require('../models')



  
const getlog = (req, res, next) => {
  logfixtures.findAll() .then(data => {
    console.log("succes", data)
    res.send(data);
  }).catch(err => {
    console.log("fail",err)
    res.render('index', { title: 'API' });
  })
    
  }
  const getlogbyid = (req, res, next) => {
    logfixtures.findByPk(req.params.id) .then(data => {
      res.send(data);
    }).catch(err => {
      res.render('index', { title: 'API' });
    })
      
    }
  

  module.exports = {getlog,getlogbyid}