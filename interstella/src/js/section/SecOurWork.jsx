import '../../css/section/secourwork.css'
import IconArrow from '../../asset/icon/chevron-up.svg'
import Button from '../element/Button'
import ServiceCard from '../component/ServiceCard'
import { Outlet } from 'react-router-dom'
import useIsLocationService from '../hook/useIsLocationService'
import useRequestData from '../hook/useRequestData'
import useScrollButtons from '../hook/useScrollButtons'
import { useEffect, useState } from 'react'

export default function SecOurWork({ data }) {

  
  const isLocationService = useIsLocationService()
  const [prevPosition, setPrevPosition] = useState(0)
  const [isPositionEnd, setIsPositionEnd] = useState({left: true})

  const { hairStyles } = useRequestData()
  const { Scroll, refContainer } = useScrollButtons('x', .5)
  


  /**
   * Resets The Container's ScrollX To Position 0
   * Why: The Container is a parent to two chrildren that depend on the scroll position
   * reseting container's scrollx allows the hidden child to begin at scrollX:0 when toggled active
   */

  useEffect(() => {
    const elem = refContainer.current
    
    if(elem) {
      setPrevPosition(elem.scrollLeft)
      isLocationService ?
      elem.scrollTo({ left: 0 }) :
      elem.scrollTo({ left: prevPosition })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLocationService, refContainer])

  useEffect(() => {

  }, [isPositionEnd])

  useEffect(() => {
    const elem = refContainer.current
    
    if(elem) {
      elem.onscroll = (e) => {
        const elem = e.target
        setIsPositionEnd({ 
          left: (elem.scrollLeft < 1), 
          right: (elem.scrollLeft + elem.clientWidth >= elem.scrollWidth)
        })
      }

    }
  }, [refContainer])


  return (
    <section className='secourwork'>
      <div className='head'>
        <h2>02 Our Work & Services</h2>
        <p>Take a look at some of our signature styles and client transformations. We update our lookbook often, so keep checking in for the latest inspiration.</p>
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
          <Button classes={isPositionEnd?.left ? 'hide' : ''} callback={() => Scroll(false)}>
            <IconArrow style={{transform: 'rotate(-90deg)'}} />
          </Button>
          <Button classes={isPositionEnd?.right ? 'hide' : ''} callback={() => Scroll(true)}>
            <IconArrow style={{transform: 'rotate(90deg)'}} />
          </Button>
        </div>
      </div>
    </section>
  )
}
