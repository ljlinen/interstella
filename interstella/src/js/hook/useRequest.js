import { useEffect, useState } from 'react'
import { ENDPOINT } from '../main';

export default function useRequest() {
  const [object, setObject] = useState();
  useEffect(() => {
    const FetchObject = async () => {
      try {
        const request = await fetch(ENDPOINT)
        const result = (request.ok & request.headers.get('content-type') === 'application/json') ?
        await request.json() :
        null
        if(!result) throw new Error('requet failed, check your network');
        setObject(result?.data);
      } catch (error) {
        console.log(error);
      }
    }
    FetchObject()
  }, [])
  return object
}
