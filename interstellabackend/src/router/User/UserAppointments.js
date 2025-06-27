const responseHelpers = require("../../helper/responseHelpers");

const HomeRouter = (req, res) => {
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
  try {
    if(req.url === '/') {
      res.writeHead(200, {
        "content-type": "application/json"
      });
      const resObj = JSON.stringify({   
        success: true, 
        message: `success`,
        data: HomePageData
      });
      req.end(resObj)
    } else {
      return responseHelpers['404']
    }
  } catch (error) {
    return responseHelpers['502']
  }
}

module.exports = HomeRouter;