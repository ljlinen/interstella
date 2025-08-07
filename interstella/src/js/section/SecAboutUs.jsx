import '../../css/section/secaboutus.css'
import imgService from '../../asset/img/style (12).jpg'
import imgService2 from '../../asset/img/style (13).jpg'
import imgService3 from '../../asset/img/style (8).jfif'
import imgService4 from '../../asset/img/style (2).jfif'

export default function SecAboutUs() {
  return (
    <section className='secaboutus'>
      <div className="head">
        <h2>02 About Interstella</h2>
        <p>We specialise in a coouple of beauty categories, from hairstyles and frontal installations, and menicure/pedicure.</p>
      </div>
      <div className="body">
        <div className="column">
          <div className='text'>
            <h5>Our History</h5>
            <p>{"Founded in 2020, Interstella began as a small dream in a home studio and has grown into one of Sandton’s most loved self-care destinations. Our mission is to make high-quality beauty services accessible, relaxing, and empowering for everyone."}</p>
          </div>
          <div className='images'>
            <div className="about-us-card card-2">
              <img src={imgService3} />
            </div>
            <div className="about-us-card">
              <img src={imgService4} />
            </div>
          </div>
        </div>
        <div className="column">
          <div className='images'>
            <div className="about-us-card card-2">
              <img src={imgService2} />
            </div>
            <div className="about-us-card">
              <img src={imgService} />
            </div>
          </div>
          <div className='text'>
            <h5>Client-First Approach</h5>
            <p>{"We believe in honest service, fair pricing, and results you’ll love. At Interstella, you’re not just a booking—you’re part of the experience."}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
