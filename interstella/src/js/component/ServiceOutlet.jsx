import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../css/section/serviceoutlet.css'
import IconArrow from '../../asset/icon/chevron-up.svg'
import Button from '../element/Button'
import useIsLocationService from '../hook/useIsLocationService'

export default function ServiceOutlet() {
  const [cardData, setCardData] = useState()
  const [ImgCurrent, setImgCurrent] = useState()
  const [hideTransition, setHideTransition] = useState()
  const [ImgCurrentIndex, setImgCurrentIndex] = useState(0)

  const location = useLocation()
  const active = useIsLocationService()
  const navigate = useNavigate()

  useEffect(() => {
    setCardData(location?.state?.cardData)
  }, [cardData, location?.state])

  useEffect(() => {
    if(cardData?.images && (ImgCurrentIndex < cardData.images.length)) {
      setHideTransition(true)
      setTimeout(() => {
        setImgCurrent(cardData.images[ImgCurrentIndex])
      }, [200])
      setTimeout(() => {
        setHideTransition(false)
      }, [200])
    }
  }, [ImgCurrentIndex, cardData?.images])

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
          <p>{cardData?.description}</p>
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
            <img className={hideTransition ? 'hide' : ''} src={ImgCurrent} />
            <div className={`next-buttons`} style={{ displey: cardData?.images?.length ? 'flex' : 'none' }}>
              <Button classes={(ImgCurrentIndex - 1) < 0 ? 'hide' : ''} 
                callback={() => setImgCurrentIndex(ImgCurrentIndex - 1)}>
                <IconArrow style={{transform: 'rotate(-90deg)'}} />
              </Button>
              <Button classes={(ImgCurrentIndex + 1) > cardData?.images?.length ? 'hide' : ''} 
              callback={() => setImgCurrentIndex(ImgCurrentIndex + 1)}>
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
