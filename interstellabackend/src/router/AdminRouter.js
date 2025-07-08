const { GetAdminData, UpdateAdminData, FetchAllAppointments, UpdateAppointment } = require('../controller/AdminController');
const Response = require('../utils/responseUtils');
const parseBody = require('../middleware/bodyParser')

const AdminRouter = async (req, res) => {

  if (req.url === '/admin' && req.method === 'GET') {
    GetAdminData(req, res)    
  } else if (req.url === '/admin' && req.method === 'PUT') {
    await parseBody(req)
    UpdateAdminData(req, res);    
  } else if (req.url === '/admin/appointments' && req.method === 'GET') {
    FetchAllAppointments(req, res);
  } else if (req.url.startsWith('/admin/appointments/') && req.method === 'PUT') {
    await parseBody(req)
    UpdateAppointment(req, res);
  } else {
    Response(res, 404, false, 'route or method not found');
  }
}

module.exports = AdminRouter;