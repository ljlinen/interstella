import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../css/section/serviceoutlet.css'
import IconArrow from '../../asset/icon/chevron-up.svg'
import Button from '../element/Button'
import imgService from '../../asset/img/style (7).jpg'
import useIsLocationService from '../hook/useIsLocationService'

export default function ServiceOutlet() {
  const [cardData, setCardData] = useState()

  const location = useLocation()
  const active = useIsLocationService()
  const navigate = useNavigate()
  useEffect(() => {
    setCardData(location?.state?.cardData)
    console.log(cardData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state])
  return (
    <div className={`serviceoutlet ${active ? 'serviceoutlet-active' : ''}`}>
      {
        cardData ? 
        <div className="head">
            <div className="wrap">
              <Button text={'Back'} callback={() => navigate(-1)}>
                <IconArrow style={{transform: 'rotate(-90deg)'}} />
              </Button>
              <h5>{cardData?.name}</h5>
            </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod incidunt harum quos necessitatibus, magnam quas velit temporibus inventore labore quis nam tenetur earum in cumque molestiae explicabo voluptas reiciendis itaque unde nisi. Obcaecati esse, modi nobis odio animi pariatur minus!</p>
        </div> : null
      }
      {
        cardData ?
        <div className='body'>
          <div className='text'>
            <div className="wrap">
              <h5>Style Properties</h5>
              {
                cardData?.properties?.length ?
                cardData.properties.map((item, i) => {
                  if(item && item?.length == 2)
                  return (
                    <div className="property" key={'property-' + i}>
                      <p>{item[0]}</p>
                      <p>{item[1]}</p>
                    </div>
                  )
                  return <p key={'missing-property-' + i}>properties missing</p>
                }) :
                <p>properties missing</p>
              }
            </div>
            <div className="wrap appointment">
              <div className="cost">
                <h5>Estimated Cost</h5>
                <h5>R{cardData.price}</h5>
              </div>
              <Button text={'make appointment for this'} />
            </div>
          </div>
          <div className='images'>
            <img src={cardData?.images?.length && cardData?.images[0]} />
            <div className="next-buttons">
              <Button>
                <IconArrow style={{transform: 'rotate(-90deg)'}} />
              </Button>
              <Button>
                <IconArrow style={{transform: 'rotate(90deg)'}} />
              </Button>
            </div>
          </div>
        </div> :
        <>
          <h2>No Data Was Passed For This Page</h2>
          <p>Data Is Undefined</p>
        </>
      }
    </div>
  )
}
