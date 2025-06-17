import '../../css/section/secappointments.css'

export default function SecAppointments() {
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
        <form action="submit" method="post">
          <h5>Book Appointment</h5>
          <div className="inputs">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="date">Appointment Date:</label>
              <input type="date" />
            </div>
            <div>
              <label htmlFor="Phone">Phone</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Email: <span style={{fontStyle: 'italic', opacity: .6}}>Optional</span></label>
              <input type="email" placeholder='' />
            </div>
          </div>
          <input type="submit" value="Book Appointment" />
        </form>
      </div>
    </section>
  )
}
