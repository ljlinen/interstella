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
        setObject(result);
      } catch (error) {
        console.log(error);
        throw new Error(error.meage);
      }
    }
    FetchObject()
  }, [])
  return object
}
