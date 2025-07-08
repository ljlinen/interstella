const path = require("path");
const fileUtils = require("../utils/fileHandlingUtils");
const databasePath = path.join(__dirname, '../data/databaseAdmin.json')


const GetAdminData = async () => {
    const dataObject = await fileUtils.readFromFile(databasePath)
    if(!dataObject) {
      throw new Error('admin data seem to be missing')
    }
    return dataObject.settings
}

const UpdateAdminData = async (newSettingsData) => {
    const dataObject = await fileUtils.readFromFile(databasePath)

    if(!dataObject.settings) {
      throw new Error('admin settings seems to be missing')
    }

    dataObject.settings = {...dataObject.settings, ...newSettingsData}
    await fileUtils.writeToFile(databasePath, dataObject)
}

const FetchAllAppointments = async () => {
    const dataObject = await fileUtils.readFromFile(databasePath)
    if(!dataObject.appointments) {
      throw new Error('appointments seem to be missing')
    }
    return dataObject.appointments
}

const UpdateAppointment = async (newData) => {
    const dataObject = await fileUtils.readFromFile(databasePath)
    if(!dataObject.appointments) {
      throw new Error('appointments seem to be missing')
    }
    dataObject?.appointments?.map((item, i) => item?.id === newData?.id ? newData : item)
    return await fileUtils.writeToFile(databasePath, data)
}

module.exports = {
  GetAdminData,
  UpdateAdminData,
  FetchAllAppointments,
  UpdateAppointment
}