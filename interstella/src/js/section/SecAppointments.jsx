import '../../css/section/secappointments.css'
import useAppointments from '../hook/useAppointments'

export default function SecAppointments() {

  const { Appointment, response, mode, setMode } = useAppointments()

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
        <AppointmentsForm />
      </div>
    </section>
  )
}
