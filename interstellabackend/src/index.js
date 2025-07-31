const UserRouter = require("./router/UserRouter");
const AdminRouter = require("./router/AdminRouter");
const Response = require("./utils/responseUtils");


module.exports = (req, res) => {

  if (req.url === '/' || req.url.startsWith('/appointment')) {
    UserRouter(req, res);
  } else if (req.url.startsWith('/admin')) {
    AdminRouter(req, res);
  } else {
    Response(res, 404, false, 'route not found');
  }
};

