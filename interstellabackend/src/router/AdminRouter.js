const ControllerHome = require('../controller/Admin/AdminHome');
const ControllerAppointments = require('../controller/Admin/AdminAppointments');
const ControllerAppointment = require('../controller/Admin/AdminAppointment');

const AdminRouter = (req, res) => {
  switch (req.url) {
    case "/admin":
      ControllerHome(req, res)
      break;
    case "/admin/appointments":
      ControllerAppointments(req, res);
      break;
    case "/admin/appointments/:id":
      ControllerAppointment(req, res);
      break;
    default:
      break;
  }
}

module.exports = AdminRouter;