const cron = require('node-cron');
const mqttclass = require('../../mqtt/mqtt')
const message=require('../../mqtt/dashboardmqtt');
var {dash}=require('../../mqtt/dashboardmqtt')

var {mqtt_publish}=require('../../mqtt/mqtt')

cron.schedule("*/5 * * * * *", function () {
  console.log("getting called");
  console.log(message)
 
  dash().then(data => {
    console.log(JSON.stringify(data))
    mqttclass.mqttclient.publish("dashboard",JSON.stringify(data))
   
  //mqtt_publish.mqttclient("dashboard",message)
  })
});

