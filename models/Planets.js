const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Planets extends Model {}

Planets.init(
  {
    // id: {

    //   type: DataTypes.INTEGER,

    //   allowNull: false,

    //   primaryKey: true,

    //   autoIncrement: true,

    // },
    climate: {

      type: DataTypes.STRING(2000),

      allowNull: true,

    },
    surface_water: {

      type: DataTypes.STRING(2000),
      
      allowNull: true,

    },
    name: {

      type: DataTypes.STRING,
      
      allowNull: false,

      primaryKey: true,

    },
    diameter: {

      type: DataTypes.STRING(2000),

      allowNull: true,

    },
    rotation_period: {

      type: DataTypes.STRING(2000),

      allowNull: true,

    },
    terrain: {

      type: DataTypes.STRING(100),

      allowNull: true,

    },
    gravity: {

      type: DataTypes.STRING,

      allowNull: true,

    },
    orbital_period: {

      type: DataTypes.STRING,

      allowNull: true,

    },
    population: {

      type: DataTypes.STRING,

      allowNull: true,

    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,

    timestamps: false,

    freezeTableName: true,

    underscored: true,

    modelName: 'planets',

  }
);

module.exports = Planets;