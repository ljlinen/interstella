import IconLogo from '../../asset/icon/logo.svg'
import IconLinkedIn from '../../asset/icon/linkedin.svg'
import IconEmail from '../../asset/icon/mail.svg'
import IconWhatsapp from '../../asset/icon/whatsapp.svg'

import '../../css/section/secfooter.css'

export default function SecFooter() {
  return (
    <footer>
      <div className="sf-head">
        <IconLogo width="150" />
      </div>
      <div className="sf-body">
        <div className="sf-sub-body">
          <h3>Contact Us</h3>
          <div>
            <IconLinkedIn />
            <p>LinkedIn</p>
          </div>
          <div>
            <IconEmail />
            <p>Gmail</p>
          </div>
          <div>
            <IconWhatsapp />
            <p>Whatsapp</p>
          </div>
        </div>
        <div className="sf-sub-body" style={{marginTop: 10}}>
          <h3>Visit Us</h3>
          <div style={{flexDirection: 'column', alignItems: 'unset', gap: 'unset'}}>
            <p>KwaMhlanga, 1022</p>
            <p>Phola Park, Forest</p>
            <a href="#" style={{color: 'var(--clr-10)'}}>
              <p>directions</p>
            </a>
          </div>
        </div>
        <p></p>
        <div className="sf-sub-body"></div>
      </div>
    </footer>
  )
}
