const fs = require('fs');

const readFromFile = async (path) => {
  const dataObject = new Promise((resolve, reject) => {
    fs.readFile(path, (error, contentBuffer) => {
      
      if(error) {
        console.log(error.message);
        reject(error.message)
      }

      const contentStr = contentBuffer.toString()
      resolve(JSON.parse(contentStr))
    })
  })

  
  return await dataObject
}

const writeToFile = async (path, content) => {
  const contentStr = JSON.stringify(content);
  await new Promise((resolve, reject) => {
    fs.writeFile(path, contentStr, (error) => {
      if(error) {
        console.log(error.message);
        reject(error.message)
      }
      resolve()
    })    
  }) 
}

module.exports = {
  readFromFile,
  writeToFile
}