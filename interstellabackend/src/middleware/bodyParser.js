const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    let reqObjBuffers = [];

    req.on('data', (chunk) => {
      reqObjBuffers.push(chunk);
    });
    
    req.on('end', () => {
      try {
        const reqObjBuffer = Buffer.concat(reqObjBuffers);

        switch (req.headers["content-type"]) {
          case 'text':
            req.body = reqObjBuffer.toString();
            break;
          case 'application/json':
            const reqObjString = reqObjBuffer.toString();
            req.body = JSON.parse(reqObjString);
            break;
          default:
            break;
        }

        resolve();
      } catch (error) {
        console.log(error.message);
        reject(error);
      }
    });

    req.on('error', (error) => {
      console.log(error);
      reject(error);
    });
  });
};

module.exports = parseBody;