const AdminHomeRouter = (req, res) => {
  switch (req.method) {
    case "GET":
      return GetHandler(req, res);
      break;
    default:
      break;
  }
}

const PostHandler = (req, res) => {
    res.writeHead(401, {
      "content-type": "text"
  });
  return res.end("product get");
}