import { useNavigate } from 'react-router-dom'

export default function useServiceCard() {
  const navigate = useNavigate()

  const handleGalleryIconClick = (cardData) => {

    navigate('/service', {state: { cardData }})
  }

  return {
    handleGalleryIconClick,
  }
}
