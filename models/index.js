const User = require('./User');
const Project = require('./Project');
const Grocery = require('./Grocery');

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

module.exports = { User, Project, Grocery };

// check if this causes problems