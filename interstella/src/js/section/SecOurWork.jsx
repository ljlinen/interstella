import '../../css/section/secourwork.css'
import IconArrow from '../../asset/icon/chevron-up.svg'
import Button from '../element/Button'
import ServiceCard from '../component/ServiceCard'
import { Outlet } from 'react-router-dom'
import useIsLocationService from '../hook/useIsLocationService'
import useRequestData from '../hook/useRequestData'
import useScrollButtons from '../hook/useScrollButtons'
import { useEffect, useState } from 'react'

export default function SecOurWork({data}) {

  const isLocationService = useIsLocationService()

  const [prevPosition, setPrevPosition] = useState(0)

  const { hairStyles } = useRequestData()
  const { Scroll, refContainer } = useScrollButtons('x', .5)


  useEffect(() => {
    const elem = refContainer.current
    if(elem) {
      setPrevPosition(elem.scrollLeft)
      isLocationService ?
      elem.scrollTo({ left: prevPosition }) :
      elem.scrollTo({ left: 0 })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLocationService, refContainer])

  return (
    <section className='secourwork'>
      <div className='head'>
        <h2>03 Some of our work</h2>
        <p>Below are some of the services we provide and some of our previous work. Prices may change anytime contact to ensure prices are as shown here on our website.</p>
        <p></p>
      </div>
      <div className={`body  ${isLocationService ? 'service-is-active' : ''}`}>
        <div ref={refContainer} className={`work`}>
          <div className="scroller">
            { 
              data ?
              data.map((item, i) => {
                item['images'] = hairStyles[i].images
                return (
                  <ServiceCard key={'service-' + i} cardData={item} />
                )
              }) :
              <div>
                <h4>Data Missing</h4>
                <p>Error loading this page.</p>
              </div>
            }
          </div>
          <Outlet />
        </div>
        <div className="work-scroll-buttons" style={{display: data ? 'flex' : 'none'}}>
          <Button callback={() => Scroll(false)}>
            <IconArrow style={{transform: 'rotate(-90deg)'}} />
          </Button>
          <Button callback={() => Scroll(true)}>
            <IconArrow style={{transform: 'rotate(90deg)'}} />
          </Button>
        </div>
      </div>
    </section>
  )
}
