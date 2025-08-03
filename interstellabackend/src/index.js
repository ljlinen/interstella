const http = require("http");
const UserRouter = require("./router/UserRouter");
const AdminRouter = require("./router/AdminRouter");
const Response = require("./utils/responseUtils");

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url.startsWith('/appointment')) {
      UserRouter(req, res)
    } else if (req.url.startsWith('/admin')) {
      AdminRouter(req, res)
    } else {
      Response(res, 404, false, 'route not found')
    }
  })

server.listen(3000, () => {
  console.log("Running on port 3000");
})

