import { useState } from 'react';
import { ENDPOINT } from '../main.jsx'

export default function useAppointments() {

  const [response, setResponse] = useState()
  const [mode, setMode] = useState({create: true})
  
  const Appointment = async () => {
    try {
  
      const resp = await fetch(`${ENDPOINT + '/appointments'}${(mode.fetch || mode.cancel) ? '/' : ''}`, {
        method: mode.create ? 'POST' : mode.edit ? 'PUT' : mode.cancel ? 'DELETE' : 'GET',
        headers: {
          'content-type': 'application/json',
        }
      })

      if (resp.status === 204) {
        ({ success: true, message: 'appointment cancelled' })
      }
      setResponse(await resp.json())
    } catch (error) {
      console.log(error);
    }
  }
  
  return {
    Appointment,
    response,
    mode,
    setMode
  }
}
