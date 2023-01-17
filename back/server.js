const express = require("express");
const config = require("./config");
const HttpException = config.exception.HttpException;
const { sequelize } = require("./models");
const app = express();
const PORT = config.port;
const router = require("./routes/index")


app.use(express.json());
app.use(router);
app.use((error, req, res, next) => {
  if (error instanceof HttpException) {
    res.json({
      isError: true,
      message: error.message,
      status: error.status,
    });
  } else if (error instanceof Error) {
    res.json({
      isError: true,
      message: error.message,
    });
  }
});

app.listen(PORT, async () => {
  await sequelize.sync({ force: false });
  console.log(`listening on ${PORT}`);
});
