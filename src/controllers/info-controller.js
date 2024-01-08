const { StatusCodes } = require("http-status-codes");

//This is just to check if our api server is alive or not
const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "API is alive",
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};
