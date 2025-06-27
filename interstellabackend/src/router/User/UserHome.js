const responseHelpers = require("../../helper/responseHelpers");
const DataBase = require('../../data/DataBase.json');

const HomeRouter = (req, res) => {
  switch (req.method) {
    case "GET":
      return GetHandler(req, res);
      break;
    default:
      break;
  }
}

const GetHandler = (req, res) => {
  try {
    if(req.url === '/') {
      if(!(DataBase && typeof DataBase === 'object')) throw new Error('Services in Database Is broken, try again later');
      return responseHelpers['200'](res, DataBase)
    } else {
      return responseHelpers['404'](req, req)
    }
  } catch (error) {
    return responseHelpers['502'](res, req)
  }
}

module.exports = HomeRouter;