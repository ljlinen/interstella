import '../../css/section/header.css'
import IconCalendar from '../../asset/icon/calendar.svg'
import IconLogo from '../../asset/icon/logo.svg'
import ImgHeaderBackground from '../../asset/icon/IconHeaderBackground.svg'
import Button from '../element/Button'
import SwitchButtons from '../component/SwitchButtons'

export default function SecHeader() {
  return (
    <header>
      <nav>
        <div className='left'>
          <IconLogo width="150" />
          <ul>
            <li>about</li>
            <li>gallery</li>
            <li>contact</li>
          </ul>
          <SwitchButtons />
        </div>
        <div className='right'>
          <Button text={'Make Appointment'} />
        </div>
      </nav>
      <div className="header-body">
        <h1>Interstella Hair and Nail Salon</h1>
        <p>A 4 stars salon located in KwaMhlanga, Phola Mall 4-ways We specialise in everything beauty, from eyebrows, nails all the way to frontal installation and skin care. <span>learn more</span></p>
        <div className="call-to-action">
          <Button text={'make appointment'} animate={true}>
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
