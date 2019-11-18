var mqtt = require('mqtt');
var Topic = 'fixture_status';
var Broker_URL = 'mqtt://192.168.33.118:1883';
var pg_insert = require('../pg/pgInsert');
var Topic1 = 'dashboard'





var options = {
    clientId: '780740aa-b6a0-4f3b-9724-378a5ff5914f',
    port: 1883,

    keepalive: 60
};

var mqttclient = mqtt.connect('mqtt://192.168.33.118:1883')


mqttclient.on('connect', mqtt_connect);
mqttclient.on('reconnect', mqtt_reconnect);
mqttclient.on('error', mqtt_error);
mqttclient.on('message', mqtt_messsageReceived);
mqttclient.on('close', mqtt_close);
mqttclient.on('message', mqtt_publish);
function mqtt_publish(Topic1,message){
    console.log("subscribed to"+Topic1)
    console.log("message publishing is"+message)
 
}

function mqtt_connect() {

    console.log("Connecting MQTT");
    // const cronjob1=require('./server/cronJobs/CronForDashboard')
    mqttclient.subscribe(Topic, mqtt_subscribe);
    
};


function mqtt_subscribe(err, message_str) {
    console.log("Subscribed to " + Topic);
    if (err) {

        // result.status(300).send();
        // return done();
        console.log(err);
    }
};

function mqtt_reconnect(err) {
    console.log("Reconnect MQTT");
    if (err) {
        result.status(200).send();
        return done();
        console.log(err);
    }
    mqttclient = mqtt.connect(Broker_URL, options);
};

function mqtt_error(err) {
    console.log("Error!");
    if (err) {
        result.status(100).send();
        return done();
        console.log(err);
    }
};


function mqtt_messsageReceived(Topic, message) {

    var jsonStr = JSON.parse(message.toString());
    const message_str = Buffer.from(jsonStr.data);
    console.log(message_str);
    if (message_str.length = 0) {
        console.log("Invalid payload");
    }
    else {
        pg_insert.insertRecord(message_str)
    }
};






function mqtt_close() {
    //console.log("Close MQTT");
};





module.exports = { mqttclient,mqtt_publish};

