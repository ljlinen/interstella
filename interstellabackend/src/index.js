const http = require("http");
const HomeRouter = require("./router/User/UserHome");
const ProductRouter = require("./router/User/UserServices");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      HomeRouter(req, res);
      break;
    case "/product":
      ProductRouter(req, res);
      break;
    default:
      break;
  }
})

server.listen(3000, () => {
  console.log("Running on port 3000");
})

