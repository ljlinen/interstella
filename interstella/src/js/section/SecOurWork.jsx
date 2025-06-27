import '../../css/section/secourwork.css'
import IconArrow from '../../asset/icon/chevron-up.svg'
import Button from '../element/Button'
import ServiceCard from '../component/ServiceCard'
import { Outlet } from 'react-router-dom'
import useIsLocationService from '../hook/useIsLocationService'
import useRequestData from '../hook/useRequestData'

export default function SecOurWork() {
  const isLocationService = useIsLocationService()
  const data = useRequestData();
  return (
    <section className='secourwork'>
      <div className='head'>
        <h2>03 Some of our work</h2>
        <p>Below are some of the services we provide and some of our previous work. Prices may change anytime contact to ensure prices are as shown here on our website.</p>
        <p></p>
      </div>
      <div className={`body  ${isLocationService ? 'service-is-active' : ''}`}>
        <div className={`work`}>
          <div className="scroller">
            {
              data.hairStyles.map((item, i) => {
                return (
                  <ServiceCard key={'service-' + i} cardData={item} />
                )
              })
            }
          </div>
          <Outlet />
        </div>
        <div className="work-scroll-buttons">
          <Button>
            <IconArrow style={{transform: 'rotate(-90deg)'}} />
          </Button>
          <Button>
            <IconArrow style={{transform: 'rotate(90deg)'}} />
          </Button>
        </div>
      </div>
    </section>
  )
}
