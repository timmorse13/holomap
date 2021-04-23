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

      type: DataTypes.STRING(25),
      
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

      type: DataTypes.STRING(10),

      allowNull: true,

    },
    population: {

      type: DataTypes.STRING(50),

      allowNull: true,

    },
    description: {

      type: DataTypes.TEXT,

      allowNull: true,

    },
    planet_info: {

      type: DataTypes.TEXT,

      allowNull: true,

    },
    img: {

      type: DataTypes.STRING,
      
      allowNull: true,

    },
    surface_img: {

      type: DataTypes.STRING,

      allowNull: true,
      
    }
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