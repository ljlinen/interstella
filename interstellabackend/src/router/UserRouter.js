const { GetHomeData, GetAllAppointments, MakeAppointment } = require('../controller/UserController');
const { GetAppointment, EditAppointment, CancelAppointment } = require('../controller/UserController');
const bodyParser = require('../middleware/bodyParser');
const Response = require('../utils/responseUtils');


const UserRouter = async (req, res) => {
  try {
      if (req.url === '/' && req.method === 'GET') {
        GetHomeData(req, res)    
      } else if (req.url === '/appointments' && req.method === 'GET') {
        GetAllAppointments(req, res);    
      } else if (req.url === '/appointments' && req.method === 'POST') {
        await bodyParser(req)
        MakeAppointment(req, res);
      } else if (req.url === '/appointments' && req.method === 'PUT') {
        await bodyParser(req)
        EditAppointment(req, res);
      } else if (req.url.startsWith('/appointments/') && req.method === 'DELETE') {
        CancelAppointment(req, res);
      } else if (req.url.startsWith('/appointments/') && req.method === 'GET') {
        GetAppointment(req, res);
      } else {
        Response(res, 404, false, 'route or method not found');
      }
  } catch (error) {
    console.log(error.message);
    Response(res, 500, false, error.message)
  }
}

module.exports = UserRouter;