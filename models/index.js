const Planets = require('./Planets');

const Characters = require('./Characters');



Planets.hasMany(Characters, {
  foreignKey: 'planet_name',
  onDelete: 'Cascade',
});


Characters.belongsTo(Planets, {
  foreignKey: 'planet_name',
});

module.exports = { Characters, Planets };
