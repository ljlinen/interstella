import useChangeDataObj from "../hook/useChangeDataObj"

export default function CreateForm({ useAppoiObj }) {

  const { data, DataChange} = useChangeDataObj()

  return (
    <form className={!useAppoiObj?.mode?.create ? 'form-hidden' : ''}>
      <div className="inputs">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" onChange={(e) => DataChange(e.target.value, 'name')} />
        </div>
        <div>
          <label htmlFor="Phone">Phone</label>
          <input type="text" onChange={(e) => DataChange(e.target.value, 'phone')} />
        </div>
        <div>
          <label htmlFor="">Email: <span style={{fontStyle: 'italic', opacity: .6}}>Optional</span></label>
          <input type="email" onChange={(e) => DataChange(e.target.value, 'email')} />
        </div>
        <div>
          <label htmlFor="date">Appointment Date:</label>
          <input type="date" onChange={(e) => DataChange(e.target.value, 'date')} />
        </div>
      </div>
      <input type="button" onClick={() => useAppoiObj.Appointment(data)} value="Book Appointment" />
    </form>
  )
}
