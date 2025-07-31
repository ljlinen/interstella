import { useEffect, useState } from 'react';
import { ENDPOINT } from '../main.jsx'

export default function useAppointments() {

  const [response, setResponse] = useState()
  const [mode, setMode] = useState({create: true})

  useEffect(() => {
      setMode(p => (response?.success ? {info: true} : {...p, info: true}))
  }, [response])
  
  const Appointment = async (data) => {
    try {
      const resp = await fetch(`${ENDPOINT + '/appointments'}${mode.fetch ? '/' + data.phone : mode.create ? '' : ''}`, {
        method: mode.create ? 'POST' : mode.edit ? 'PUT' : mode.cancel ? 'DELETE' : 'GET',
        headers: {
          'content-type': 'application/json',
        },
        body: mode?.create ? JSON.stringify(data) : null
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
