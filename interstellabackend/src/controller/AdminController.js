const Response = require("../utils/responseUtils");
const adminService = require('../services/admin.service')


const GetAdminData = async (req, res) => {
  
  try {
    const data = await adminService.GetAdminData()
    Response(res, 200, true, data)
  } catch (error) {
    Response(res, 500, false, error.message)
  }
}

const UpdateAdminData = async (req, res) => {

  try {
    await adminService.UpdateAdminData(req.body)
    Response(res, data)
  } catch (error) {
    Response(res, 500, false, error.message)
  }
}

const FetchAllAppointments = async (req, res) => {

  try {
    const appointments = await adminService.FetchAllAppointments()
    Response(res, 200, true, appointments)
  } catch (error) {
    Response(res, 500, false, error.message)
  }
}

const UpdateAppointment = (req, res) => {
  try {
    responseHelpers['201'](res, 'Appointment Edited')
  } catch (error) {
    Response(res, 500, false, error.message)
  }
}

module.exports = {
  GetAdminData,
  UpdateAdminData,
  FetchAllAppointments,
  UpdateAppointment
};