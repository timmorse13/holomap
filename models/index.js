const Planets = require('./Planets');

const User = require('./User');

const Characters = require('./Characters');



Planets.belongsToMany(Characters, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Planets,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'user_favorites',
  foreignKey: 'user_id',
});

Characters.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Favorites,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'favorited_games',
  foreignKey: 'games_id'
});

module.exports = { User, Characters, Planets };
