require("dotenv").config();
const HttpException = require("./exceptions/HTTPexceptions");

const config = {
  exception: {
    HttpException,
  },
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3001,
  db: {
    development: {
      username: process.env.DB_USER || "",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_DATABASE || "",
      port: process.env.DB_PORT || "",
      host: process.env.DB_HOST || "",
      dialect: "mysql",
      define: { freezeTableName: true, timestamps: false },
    },
    test: {
      username: process.env.DB_USER || "",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_DATABASE || "",
      port: process.env.DB_PORT || "",
      host: process.env.DB_HOST || "",
      dialect: "mysql",
      logging: false,
    },
  },
};

module.exports = config;
