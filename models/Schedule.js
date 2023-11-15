// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Schedule extends Model {}

// Schedule.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     Event_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Event_date: {
//       type: DataTypes.DATE,
//     },
//     Event_time: {
//       type: DataTypes.TIME,
//       allowNull: false,
//       defaultValue: DataTypes.NOW,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'schedule',
//   }
// );

// module.exports = Schedule;
