import { useState } from 'react'

export default function useChangeDataObj() {

  const [data, setData] = useState({})

  const DataChange = (value, key) => {
    setData((prev) => ({...prev, [key]: value}))
  }

  return { data, DataChange }
}
