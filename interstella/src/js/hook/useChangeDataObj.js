import { useEffect, useState } from 'react'

export default function useChangeDataObj() {

  const [data, setData] = useState({})
  useEffect(() => {
    console.log(data);
  }, [data])

  const DataChange = (value, key) => {
    setData((prev) => ({...prev, [key]: value}))
  }

  return { data, DataChange }
}
