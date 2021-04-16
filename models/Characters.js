const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Characters extends Model {}

Characters.init(
  {
    id: {

      type: DataTypes.INTEGER,

      allowNull: false,

      primaryKey: true,

      autoIncrement: true,

    },
    name: {

      type: DataTypes.STRING(2000),

      allowNull: false,

    },
    gender: {

      type: DataTypes.STRING(2000),

      allowNull: true,


    },
    skin_color: {
      type: DataTypes.STRING(2000),
      
      allowNull: true,
    },
    hair_color: {

      type: DataTypes.STRING(2000),

      allowNull: true,

    },
    height: {

      type: DataTypes.STRING(2000),

      allowNull: true,

    },
    eye_color: {

      type: DataTypes.STRING(100),

      allowNull: true,

    },
    mass: {

      type: DataTypes.STRING,

      allowNull: true,

    },
    homeworld: {

        type: DataTypes.STRING,

        allowNull: true,
    },
    birth_year: {

        type: DataTypes.STRING,

        allowNull: true,
    },
    starships: {

        type: DataTypes.STRING,

        allowNull: true,
    },
    species: {

        type: DataTypes.STRING,

        allowNull: true,
    },

  },
  {
    sequelize,

    timestamps: false,

    freezeTableName: true,

    underscored: true,

    modelName: 'characters',

  }
);

module.exports = Characters;
