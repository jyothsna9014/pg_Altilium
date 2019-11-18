
const {ONGridPromise, ONBatteryPromise, opmodeOFFPromise, opmodeONPromise,LitalityNodesPromise,BatteryStatusPromise} = require('../services/dashboardService')

const getdashboard = (req, res, next) => {
  

    Promise.all([ONGridPromise, ONBatteryPromise, opmodeOFFPromise, opmodeONPromise,LitalityNodesPromise,BatteryStatusPromise]).then((result) => {
        //console.log('on battery issss ==== ',result[1])
        const resultObj = JSON.parse(JSON.stringify(result))
        //console.log(JSON.stringify(result[0][0]))
        let response = {};
       
        for(let i=0;i<resultObj.length;i++){
           
            response[Object.keys(resultObj[i])[0]] = Object.values(resultObj[i])[0]
        }
        res.send(response);
    }).catch(err => {
        console.log("fail", err)
        res.render('index', { title: 'API' });
    })

}






module.exports={getdashboard}

























































