import IconArrow from '../../asset/icon/chevron-up.svg'
import '../../css/component/servicecard.css'
import useServiceCard from '../hook/useServiceCard'

export default function ServiceCard({cardData}) {
  const { handleGalleryIconClick } = useServiceCard()
  return (
    <div className="service-card">
      <img src={cardData?.images[0]} />
      <div className="overlay">
        <div className="top" onClick={() => handleGalleryIconClick(cardData)}>
          <p>Details</p>
          <IconArrow style={{transform: 'rotate(90deg)'}} />
        </div>
        <div className="bottom">
          <h3>{cardData?.name}</h3>
          <p>R{cardData?.price}</p>
        </div>
      </div>
    </div>
  )
}
