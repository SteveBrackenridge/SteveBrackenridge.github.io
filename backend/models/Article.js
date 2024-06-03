// /backend/models/article.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./Index');
const User = require('./User');

const Article = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

Article.belongsTo(User);

module.exports = Article;
