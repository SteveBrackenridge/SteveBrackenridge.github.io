// /backend/models/image.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./Index');
const Article = require('./Article');

const Image = sequelize.define('Image', {
  path: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Image.belongsTo(Article);

module.exports = Image;

