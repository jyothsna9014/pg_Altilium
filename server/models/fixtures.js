'use strict';
module.exports = (sequelize, DataTypes) => {
  const fixtures = sequelize.define('fixtures', {
    fixtureid: {type:DataTypes.STRING,allowNull:false,primaryKey:true},
    floorid: DataTypes.INTEGER,
    groupid: DataTypes.INTEGER,
    gatewayid: DataTypes.INTEGER
  }, {});
  fixtures.associate = function(models) {
    // associations can be defined here
    fixtures.hasOne(models.logfixtures, { foreignKey: 'fixtureid', });
  };
  return fixtures;
};