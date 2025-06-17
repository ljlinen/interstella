import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../css/section/serviceoutlet.css'
import IconArrow from '../../asset/icon/chevron-up.svg'
import Button from '../element/Button'
import imgService from '../../asset/img/style (7).jpg'

export default function ServiceOutlet() {
  const [cardData, setCardData] = useState()
  const [active, setActive] = useState()
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    setCardData(location?.state?.cardData)
    setActive(location?.state?.cardData ? true : false)
    console.log(cardData);
  }, [location.state])
  return (
    <div className={`serviceoutlet ${active ? 'serviceoutlet-active' : ''}`}>
      {
        cardData ?
        <>
          <div className='text'>
            <div className="wrap">
              <div className="head">
                <h5>{cardData?.name}</h5>
                <Button text={'Back'} mainStyle={{width: 'fit-content', flexDirection: 'row-reverse', backgroundColor: 'transparent', color: 'var(--clr-40)', textTransform: 'Capitalize'}} callback={() => navigate(-1)}> 
                  <IconArrow style={{transform: 'rotate(-90deg)'}} />
                </Button>
              </div>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
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
        </> :
        <>
          <h2>No Data Was Passed For This Page</h2>
          <p>Data Is Undefined</p>
        </>
      }
    </div>
  )
}
