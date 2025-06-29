const responseHelpers = require("../../helper/responseHelpers");

const Controller = (req, res) => {
  switch (req.method) {
    case "GET":
      return GetHandler(req, res);
      break;
    case "PUT":
      return PutHandler(req, res);
      break;
    default:
      break;
  }
}

// Method Handlers

const GetHandler = (req, res) => {
  try {
    if(true) {
      const data = {data: 'Admin Appointment Id'}
      responseHelpers['200'](res, data)
    } else {
      // responseHelpers['404'](res, '')
    }
  } catch (error) {
    responseHelpers['502'](res, error.message)
  }
}

const PutHandler = (req, res) => {
  try {
    if(true) {
      const params = new URLSearchParams(req.url)
      const id = params.get(':id')
      responseHelpers['201'](res, 'appointment ' + id + 'saved')
    } else {
      // responseHelpers['404'](res, '')
    }
  } catch (error) {
    responseHelpers['502'](res, error.message)
  }
}

module.exports = Controller;