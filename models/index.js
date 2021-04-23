const Planets = require('./Planets');

const Characters = require('./Characters');

const User = require('./User');



Planets.hasMany(Characters, {
  foreignKey: 'planet_name',
  onDelete: 'Cascade',
});


Characters.belongsTo(Planets, {
  foreignKey: 'planet_name',
});

module.exports = { Characters, Planets, User };
