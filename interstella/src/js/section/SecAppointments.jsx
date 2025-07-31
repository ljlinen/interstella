import '../../css/section/secappointments.css'
import useAppointments from '../hook/useAppointments'
import FetchForm from '../component/FetchForm.jsx'
import CreateForm from '../component/CreateForm.jsx'
import InfoView from '../component/InfoView.jsx'
import { useEffect } from 'react'

export default function SecAppointments() {

  const useAppoiObj = useAppointments()
  useEffect(() => console.log(useAppoiObj)
  , [useAppoiObj])

  return (
    <section className='secappointments'>
      <div className="head">
        <h2>04 Book an Appointment</h2>
        <p>You can choose a suitable date from the available options, we will also send an sms or call for confirmation of your appointment.</p>
      </div>
      <div className="body">
        <div className="trading-hours">
          <h5>Working Hours</h5>
          <ul>
            <li>
              <p>Mon-Fri</p>
              <p>8am - 16pm</p>
            </li>
            <li>
              <p>Holidays</p>
              <p>9am - 14pm</p>
            </li>
            <li>
              <p>Sundays</p>
              <p>Closed</p>
            </li>
          </ul>
        </div>
        <div className="forms">
          <div className="tabs">
            <div className="head">
            {
              useAppoiObj.info && useAppoiObj.response?.success && !(useAppoiObj.mode?.create && useAppoiObj.mode?.fetch) ? 
              <h5>Info View</h5> :
              <>
                <h5 className={useAppoiObj.mode.create ? 'active' : ''} onClick={() => useAppoiObj.setMode({create: true})}>Make An Appointment</h5>
                <h5 className={useAppoiObj.mode.fetch ? 'active' : ''} onClick={() => useAppoiObj.setMode({fetch: true})}>Check An Appointment</h5>
              </>

            }               
            </div>
            <p>{useAppoiObj.mode?.info && (useAppoiObj?.mode?.create || useAppoiObj?.mode?.fetch) ? useAppoiObj.response?.message : '' }</p>
          </div>
          <div className={`wrap ${useAppoiObj.mode?.create ? 'form-create' : useAppoiObj.mode?.fetch ? 'form-fetch' : ''}`}>
            <CreateForm useAppoiObj={useAppoiObj} />
            <FetchForm useAppoiObj={useAppoiObj} />
            <InfoView useAppoiObj={useAppoiObj} />
          </div>
        </div>

      </div>
    </section>
  )
}
