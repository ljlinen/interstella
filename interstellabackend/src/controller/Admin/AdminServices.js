const DataBase = require('../../data/DataBase.json');
const responseHelpers = require('../../helper/responseHelpers');
const AdminServicesRouter = (req, res) => {
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
    if(req.url === '/services') {
      if(!DataBase?.services) throw new Error('Services in Database Is broken, try again later');
      responseHelpers['200'](req, DataBase.services)
    } else {
      responseHelpers['404'](res, res.url)
    }
  } catch (error) {
    responseHelpers['502'](res, error.message)
  }
}

const PostHandler = (req, res) => {
  try {
    if(req.url === '/services') {
      if(!DataBase?.services) throw new Error('Services in Database Is broken, try again later');
      responseHelpers['200'](req, DataBase.services)
    } else {
      responseHelpers['404'](res, res.url)
    }
  } catch (error) {
    responseHelpers['502'](res, error.message)
  }
}