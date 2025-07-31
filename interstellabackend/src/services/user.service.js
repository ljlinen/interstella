const path = require("path");
const fileUtils = require("../utils/fileHandlingUtils");
const databasePath = path.join(__dirname, '../data/databaseAdmin.json')


const SaveAppointment = async (appointmentData) => {
    const id = Date.now().toString(32)
    const dataObject = await fileUtils.readFromFile(databasePath, appointmentData)

    if(!dataObject?.settings?.appointments || !dataObject?.appointments) {
      throw new Error('we are not taking appointments at the moment.')
    }

    appointmentData['id'] = id
    dataObject.appointments.push(appointmentData)
    await fileUtils.writeToFile(databasePath, dataObject)
}

const FetchAppointment = async (phone) => {
    const dataObject = await fileUtils.readFromFile(databasePath)

    if(!dataObject?.appointments) {
      throw new Error('appointments seem to be mising.')
    }

    const appointment = dataObject?.appointments?.find(item => item?.phone === phone)
    return appointment
}

const FetchAllAppointments = async () => {
    const dataObject = await fileUtils.readFromFile(databasePath)

    if(!dataObject?.appointments) {
      throw new Error('appointments seem to be mising.')
    }

 
    return dataObject.appointments
}

const EditAppointment = async (newData) => {
    const dataObject = await fileUtils.readFromFile(databasePath)

    if(!dataObject?.appointments) {
      throw new Error('appointments seem to be mising.')
    }
    if(!newData?.id) throw new Error('provide id for appointment to edit')

    await new Promise(async(resolve, reject) => {
      for(let i = 0; i < dataObject.appointments.length; i++) {
        if(dataObject.appointments[i]?.id === newData?.id) {
          dataObject.appointments[i] = newData;
          await fileUtils.writeToFile(databasePath, dataObject)
          resolve()
        }
      };
      
      reject(new Error('apointment id not in database'))
    })
}

const CancelAppointment = async (id) => {
    const dataObject = await fileUtils.readFromFile(databasePath)

    if(!id) throw new Error('id missing to cancel appointment')
    if(!dataObject?.appointments) {
      throw new Error('appointments seem to be mising.')
    }

    await new Promise(async(resolve, reject) => {
      for(let i = 0; i < dataObject.appointments.length; i++) {
        if(dataObject.appointments[i]?.id === id) {
          dataObject.appointments.splice(i, 1)
          await fileUtils.writeToFile(databasePath, dataObject)
          resolve()
        }
      };
      
      reject(new Error('no appointment with that id in the database'))
    })
}

module.exports = {
  SaveAppointment,
  FetchAppointment,
  FetchAllAppointments,
  EditAppointment,
  CancelAppointment
}