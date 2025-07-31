import { useEffect, useState } from 'react'

export default function InfoView({ useAppoiObj }) {

  return (
    <div className={!useAppoiObj.mode?.info || (useAppoiObj.mode?.create || useAppoiObj.mode?.fetch)  ? 'form-hidden' : 'info'}>
      {
        useAppoiObj?.response?.data ?
        Object.entries(useAppoiObj.response.data).map(([key, value], i) => {
          <div key={i}>
            <h3>{key}</h3>
            <p>{value}</p>
          </div>
        }) :
        <>
          <h5>{useAppoiObj?.response?.message}</h5>
        </>
      }
    </div>
  )
}
