// /backend/models/video.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./Index');
const Article = require('./Article');

const Video = sequelize.define('Video', {
  path: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Video.belongsTo(Article);

module.exports = Video;
