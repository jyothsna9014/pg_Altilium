'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('logfixtures', {
      id: {
        allowNull: false,
        autoIncrement: true,
       type: Sequelize.INTEGER
      },
      fixtureId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      batteryLevel: {
        type: Sequelize.STRING
      },
      XSRpower: {
        type: Sequelize.INTEGER
      },
      LEDpower: {
        type: Sequelize.STRING
      },
      batteryPower: {
        type: Sequelize.INTEGER
      },
      LuminariesOpMode: {
        type: Sequelize.STRING
      },
      powerMode: {
        type: Sequelize.STRING
      },
      FaultData: {
        type: Sequelize.STRING
      },
      Brightnesslevel: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('logfixtures');
  }
};