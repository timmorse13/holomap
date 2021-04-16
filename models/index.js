const Planets = require('./Planets');

const Characters = require('./Characters');



Planets.hasMany(Characters, {
  foreignKey: 'homeworld',
  onDelete: 'Cascade',
});


Characters.belongsTo(Planets, {
  foreignKey: 'homeworld',
});

module.exports = { Characters, Planets };
