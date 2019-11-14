'use strict';
module.exports = (sequelize, DataTypes) =>  {
  const logfixtures = sequelize.define('logfixtures', {
    fixtureid: DataTypes.STRING,
    batteryLevel: DataTypes.INTEGER,
    XSRpower: DataTypes.INTEGER,
    LEDpower: DataTypes.STRING,
    batteryPower: DataTypes.INTEGER,
    LuminariesOpMode: DataTypes.STRING,
    powerMode: DataTypes.STRING,
    FaultData: DataTypes.STRING,
    Brightnesslevel: DataTypes.STRING,
    occupancy:DataTypes.STRING
  }, {});
  logfixtures.associate = function(models) {
    // associations can be defined here
    logfixtures.belongsTo(models.fixtures, { foreignKey: 'fixtureid', onDelete: 'CASCADE' });
  };
  return logfixtures;
};
