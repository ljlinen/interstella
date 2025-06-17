import '../../css/section/secaboutus.css'
import imgService from '../../asset/img/style (3).jpg'
import imgService2 from '../../asset/img/style (1).jpg'

export default function SecAboutUs() {
  return (
    <section className='secaboutus'>
      <div className="head">
        <h2>02 About Us</h2>
        <p>We specialise in a coouple of beauty categories, from hairstyles and frontal installations, and menicure/pedicure.</p>
      </div>
      <div className="body">
        <div className="column">
          <div className='text'>
            <h5>Our History</h5>
            <p>{"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}</p>
          </div>
          <div className='images'>
            <div className="about-us-card card-2">
              <img src={imgService} />
            </div>
            <div className="about-us-card">
              <img src={imgService2} />
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
            <h5>Our History</h5>
            <p>{"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
