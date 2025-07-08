const validateAppointmentData = (data) => {
  const requiredData = ['name', 'phone', 'date']
  const obj = {name: 'Hi'}
  for (let i = 0; i < requiredData.length; i++) {
    if(!data.hasOwnProperty(requiredData[i]) && !data[requiredData[i]]) {
      throw new Error (`${requiredData[i]} missing`)
    }
  }
}

module.exports = {
  validateAppointmentData
}