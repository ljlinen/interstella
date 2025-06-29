const ControllerHome = require('../controller/User/UserHome');
const ControllerAppointments = require('../controller/User/UserHome');

const UserRouter = (req, res) => {
  switch (req.url) {
    case "/":
      ControllerHome(req, res)
      break;
    case "/appointments":
      ControllerAppointments(req, res);
      break;
    default:
      break;
  }
}

module.exports = UserRouter;