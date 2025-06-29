const responseHelpers = require("../../helper/responseHelpers");

const Controller = (req, res) => {
  switch (req.method) {
    case "GET":
      GetHandler(req, res);
      break;
    default:
      responseHelpers['404'](res, 'route does not have that method');
      break;
  }
}

const GetHandler = (req, res) => {
  const data = {data: 'Admin Home Data'}
  try {
    responseHelpers['200'](res, data)
  } catch (error) {
    responseHelpers['502'](res, error.message)
  }
}

module.exports = Controller;