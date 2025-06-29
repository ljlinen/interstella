const http = require("http");
const UserRouter = require("./router/UserRouter");
const AdminRouter = require("./router/AdminRouter");
const responseHelpers = require("./helper/responseHelpers");

const server = http.createServer((req, res) => {
  const params = new URLSearchParams(req.url)
  console.log(req.url, ' params: ', params);
  
    ['/', '/appointments', '/appointments/:id'].includes(req.url) ?
    UserRouter(req, res) :
    ['/admin', '/admin/appointments/', '/admin/appointments/:id'] ?
    AdminRouter(req, res) :
    responseHelpers['404'](res, 'route not found')
  })

server.listen(3000, () => {
  console.log("Running on port 3000");
})

