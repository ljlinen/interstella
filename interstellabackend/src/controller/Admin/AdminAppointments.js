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
  try {
    if(true) {
      const data = {data: 'Admin Appointments'}
      responseHelpers['200'](res, data)
    } else {
      // responseHelpers['404'](res, '')
    }
  } catch (error) {
    responseHelpers['502'](res, error.message)
  }
}


module.exports = Controller;