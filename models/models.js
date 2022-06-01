const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const {INTEGER, STRING} = DataTypes;

const Author = sequelize.define('Author', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING, allowNull: false},
    lastname: {type: STRING, allowNull: false}
})

const Article = sequelize.define('Article', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: STRING, allowNull: false},
    body: {type: STRING, allowNull: false}
})

Author.hasMany(Article);
Article.belongsTo(Author);


module.exports = {Article, Author}