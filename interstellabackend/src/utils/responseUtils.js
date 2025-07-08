const Response = (res, status, success, body) => {

  res.writeHead(status, {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const resObj = (typeof body === 'string') ?
  JSON.stringify({ success, message: body }) :
  JSON.stringify({ success, data: body })

  return res.end(resObj);
}

module.exports = Response
