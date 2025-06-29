const responseHelpers = require("../../helper/responseHelpers");

const HomeRouter = (req, res) => {
  switch (req.method) {
    case "GET":
      GetHandler(req, res);
      break;
    case "POST":
      PostHandler(req, res);
      break;
    case "PUT":
      PutHandler(req, res);
      break;
    case "DELETE":
      DeleteHandler(req, res);
      break;
    default:
      responseHelpers['404'](res, 'route does not have that method');
      break;
  }
}


// Method Handlers

const GetHandler = (req, res) => {
  try {
    if(true) {
      const data = {data: 'User Appointments'}
      responseHelpers['200'](res, data)
    } else {
      // responseHelpers['404'](res, '')
    }
  } catch (error) {
    responseHelpers['502'](res, error.message)
  }
}

const PostHandler = (req, res) => {
  try {
    if(true) {
      responseHelpers['201'](res, 'appointment made')
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
      responseHelpers['201'](res, 'Appointment Updated')
    } else {
      // responseHelpers['404'](res, '')
    }
  } catch (error) {
    responseHelpers['502'](res, error.message)
  }
}

const DeleteHandler = (req, res) => {
  try {
    if(true) {
      responseHelpers['200'](res, 'appointment cancelled')
    } else {
      // responseHelpers['404'](res, '')
    }
  } catch (error) {
    responseHelpers['502'](res, error.message)
  }
}

module.exports = HomeRouter;