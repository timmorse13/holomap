const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Homeland extends Model {}

Homeland.init(
    {
      id: {

        type: DataTypes.INTEGER,

        allowNull: false,

        primaryKey: true,

        autoIncrement: true

      },
      planets_id: {

        type: DataTypes.INTEGER,

        references: {

          model: 'planets',

          key: 'id',

          unique: false

        }
      },
      characters_id: {

        type: DataTypes.INTEGER,

        references: {

          model: 'characters',
          
          key: 'id',

          unique: false

        }
      },
    },
    {
      sequelize,

      timestamps: false,

      freezeTableName: true,

      underscored: true,
      
      modelName: 'homeland'
    }
  );


module.exports = Homeland;