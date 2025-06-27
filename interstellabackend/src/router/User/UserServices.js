const ProductRouter = (req, res) => {
  switch (req.method) {
    case "GET":
      return GetHandler(req, res);
      break;
    case "POST":
      return PostHandler(req, res);
      break;
    default:
      break;
  }
}

const GetHandler = (req, res) => {
    res.writeHead(401, {
      "content-type": "text"
  });
  return res.end("product get");
}

module.exports = ProductRouter