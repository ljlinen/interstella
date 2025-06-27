import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function useIsLocationService() {
  const [isLocationService, setIsLocationService] = useState()
  const location = useLocation()
  useEffect(() => setIsLocationService(location.pathname === '/service'), [location.pathname])
  return isLocationService
}
