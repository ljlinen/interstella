export default function AppointmentsForm({ mode }) {

  return (
    <form action="submit">
      <h5>
        { 
          mode.create ? 'Book Appointment' :
          mode.edit ? 'Edit Appointment' :
          mode.cancel ? 'Cancel Appointment' :
          null
        }
        </h5>
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
  )
}
