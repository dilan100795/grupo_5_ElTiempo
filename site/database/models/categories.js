'use strict';
const {
  Model
} = require('sequelize');
const historiales = require('./historiales');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      categories.hasMany(models.Products, {
        as: 'productos',
        foreignKey: 'categoriesId'
      })
  
      categories.hasMany(models.historiales, {
          as: 'historiales',
          foreignKey: 'categoriesId'
        })
    }
  }
  categories.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categories',
    timestamps: true
  });
  return categories;
};