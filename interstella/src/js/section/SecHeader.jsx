import '../../css/section/header.css'
import IconCalendar from '../../asset/icon/calendar.svg'
import IconMenu from '../../asset/icon/menu.svg'
import IconLogo from '../../asset/icon/logo.svg'
import ImgHeaderBackground from '../../asset/icon/IconHeaderBackground.svg'
import Button from '../element/Button'
import SwitchButtons from '../component/SwitchButtons'
import ScrollToElement from '../../utils/ScrollToElemet'

export default function SecHeader() {
  return (
    <header>
      <nav>
        <div className='left'>
          <IconLogo width="150" />
          <ul>
            <li onClick={() => ScrollToElement('.secachievements')}>about</li>
            <li onClick={() => ScrollToElement('.secourwork')}>gallery</li>
            <li onClick={() => ScrollToElement('footer')}>contact</li>
          </ul>
          <SwitchButtons />
        </div>
        <div className='right'>
          <div className="buttons">
            <Button>
              <IconMenu />
            </Button> 
            <Button text={'Make Appointment'} callback={() => ScrollToElement('.secappointments')} />      
          </div>
        </div>
      </nav>
      <div className="header-body">
        <h1>Interstella Hair and Nail Salon</h1>
        <p>A 4 stars salon located in KwaMhlanga, Phola Mall 4-ways We specialise in everything beauty, from eyebrows, nails all the way to frontal installation and skin care. <span>learn more</span></p>
        <div className="call-to-action">
          <Button text={'make appointment'} animate={true} callback={() => ScrollToElement('.secappointments')}>
            <IconCalendar />
          </Button>
          <Button>
            <ul>
              <li>9am - 16pm</li>
              <li>Monday - Friday</li>
            </ul>
          </Button>
        </div>
      </div>
        <ImgHeaderBackground />
    </header>
  )
}
