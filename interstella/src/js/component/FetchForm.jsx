import { useState } from "react"
import useChangeDataObj from "../hook/useChangeDataObj"

export default function FetchForm({ useAppoiObj }) {

  const { data, DataChange} = useChangeDataObj()
  const [edit, setEdit] = useState()

  return (
    <form className={!useAppoiObj?.mode?.fetch ? 'form-hidden' : ''}>
      <div className="inputs">
        {
          edit ? 
          <>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="date">Appointment Date:</label>
              <input type="date" />
            </div>
          </>
          : null
        }
        <div>
          <label htmlFor="Phone">Phone<span style={{fontWeight: 300, paddingLeft: 5, opacity: .5}}>(used to make the appointment)</span></label>
          <input type="tel" onChange={(e) => DataChange(e.target.value, 'phone')} />
        </div>
        {
          edit ?
          <div>
            <label htmlFor="">Email: <span style={{fontStyle: 'italic', opacity: .6}}>Optional</span></label>
            <input type="email" placeholder='' />
          </div> :
          null
        }
      </div>
      <input type="button" onClick={() => useAppoiObj.Appointment(data)} value="Check Appointment" />
    </form>
  )
}
