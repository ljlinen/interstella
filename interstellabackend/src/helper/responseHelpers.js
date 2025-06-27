
const Success = (res, data) => {

  res.writeHead(200, {
    "content-type": "application/json"
  });
  const resObj = JSON.stringify({   
    success: true, 
    message: `success`,
    data
  });

  return res.end(resObj);
}

const Created = (res, message = "Created Successfully") => {

  res.writeHead(201, {
    "content-type": "application/json"
  });
  const resObj = JSON.stringify({   
    success: true, 
    message
  });

  return res.end(resObj);
}

const NotFound = (res, url) => {

  res.writeHead(404, {
    "content-type": "application/json"
  });
  const resObj = JSON.stringify({   
    success: true, 
    message: `ERROR 404: path: ${url} was not found`
  });

  return res.end(resObj);
}

const InternalError = (res, reason) => {

  res.writeHead(500, {
    "content-type": "application/json"
  });
  const resObj = JSON.stringify({
    success: false, 
    message: `ERROR 500: Internal Server Error | Reason: ${reason}`
  });

  return res.end(resObj);
}

const responseHelpers = {
  200: Success,
  201: Created,
  404: NotFound,
  502: InternalError,
}

module.exports = responseHelpers;
