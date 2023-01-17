const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config");
const db = config.db[config.env];

const sequelize = new Sequelize(db.database, db.username, db.password, db);

fs.readdirSync(__dirname)
  .filter(v => v.indexOf("index"))
  .forEach((file) => {
    require(path.join(__dirname, file))(sequelize, Sequelize);
  });

const { models } = sequelize

for (const v in models) {
  if (typeof models[v].associate === "function")
  sequelize.models[v].associate(models);
}

console.log(models)

module.exports = {
  sequelize,
  Sequelize,
};
