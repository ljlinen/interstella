const Response = require('../utils/responseUtils')
const databaseUsers = require('../data/databaseUsers.json');
const { validateAppointmentData } = require("../utils/validators");
const fs = require('fs');
const userService = require("../services/user.service");


const GetHomeData = async (req, res) => {
  try {
    const appointments = await userService.FetchAllAppointments()

    if(appointments) {
      Response(res, 200, true, databaseUsers.services)
    } else {
      Response(res, 503, false, 'database seems to be missing, try again later')
    }
    
  } catch (error) {
    Response(res, 500, false, error.message)
  }
}

const MakeAppointment = async (req, res) => {
  try { 
      validateAppointmentData(req.body)
      await userService.SaveAppointment(req.body)
      Response(res, 201, true, 'Appointment was made, we will contact you for confirmation.')
  } catch (error) {
    Response(res, 500, false, error.message)
  }
}

const GetAllAppointments = async (req, res) => {
  try {
    const appointments = await userService.FetchAllAppointments()
    if(appointments) {
      Response(res, 200, true, appointments)
    } else {
      Response(res, 503, true, 'appointments missing. try again later')
    }
  } catch (error) {
    Response(res, 500, false, error.message)
  }
}

const GetAppointment = async (req, res) => {

  try {
    const params = req.url.split('/');
    const id = params[2];
    if (id) {
      const appointment = await userService.FetchAppointment(id)

      if(appointment) {
        Response(res, 200, true, appointment)
      } else {
        Response(res, 404, false, 'appointment not found in database')
      }
    } else {
      Response(res, 400, false, 'id missing, provide id')
    }
  } catch (error) {
    Response(res, 500, false, error.message)
  }
}

const EditAppointment = async (req, res) => {
  try {
    validateAppointmentData(req.body)
    await userService.EditAppointment(req.body)
    Response(res, 201, true, 'Appointment Edited')
  } catch (error) {
    Response(res, 500, false, error.message)
  }
}

const CancelAppointment = async (req, res) => {
  try {
    const params = req.url.split('/');
    const id = params[2];

    await userService.CancelAppointment(id)
    Response(res, 200, true, 'Appointment Cancelled')
  } catch (error) {
    Response(res, 500, false, error.message)
  }
}

module.exports = {
  GetHomeData,
  GetAllAppointments,
  MakeAppointment,
  GetAppointment,
  EditAppointment,
  CancelAppointment
};