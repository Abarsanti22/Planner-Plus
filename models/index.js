const User = require('./User');
const Project = require('./Project');
const Grocery = require('./Grocery');
const Address = require('./Address');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Grocery.belongsTo(User, {
  foreignKey: 'user_id'
});

Address.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, Grocery, Address};

// check if this causes problems