// var mqtt = require('mqtt');
// const cron = require("node-cron");
// var Topic1 = 'dashboard';
// var Broker_URL = 'mqtt://192.168.33.118:1883';
// var client = mqtt.connect('mqtt://192.168.33.118:1883')
// var options = {
//   clientId: '780740aa-b6a0-4f3b-9724-378a5ff5914f',
//   port: 1883,

//   keepalive: 60
// };
// client.on("connect",function(){	
//   console.log("connected");
// })
// client.subscribe(Topic1)
// var message="http://localhost:8080/api/v1/dashboard";

// //publish every 5 secs
// var timer_id=setInterval(function(){publish(Topic1,message);},5000);

// //publish function
// function publish(topic,msg){
//   console.log("publishing",msg);
// if (client.connected == true){
//   client.publish(topic,msg);
// }
// }

// cron.schedule("5 * * * *", publish() {
//   console.log("---------------------");
//   console.log("Running Cron Job");
//   fs.unlink("./error.log", err => {
//     if (err) throw err;
//     console.log("Error file succesfully deleted");
//   });
// });
