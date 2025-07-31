const Response = (res, status, success, body) => {
  res.statusCode = status;

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const resObj = JSON.stringify(
    typeof body === 'string'
      ? { success, message: body }
      : { success, data: body }
  );

  res.end(resObj);
};

module.exports = Response;
