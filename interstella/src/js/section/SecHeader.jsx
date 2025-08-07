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
            <Button text={'Schedule Appointment'} callback={() => ScrollToElement('.secappointments')} />      
          </div>
        </div>
      </nav>
      <div className="header-body">
        <h1>Feel Amazing. </h1>
        <h1>Look Stunning. </h1>
        <h1>Leave Radiant.</h1>
        <p>Interstella is your go-to beauty studio for hair, nails, and glow-up essentials. Whether you&apos;re prepping for an event or just need some well-earned self-care.<span>learn more</span></p>
        <div className="call-to-action">
          <Button text={'Schedule Appointment'} animate={true} callback={() => ScrollToElement('.secappointments')}>
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
