import { Row, Col } from 'react-bootstrap';
import './Banner.css';
import bannerimg2 from '../../../public/assets/kingClean (28).png';
import bannerimg3 from '../../../public/assets/kingClean (27).png';
import bannerimg4 from '../../../public/assets/kingClean (26).png';
import callImg from '../../../public/assets/kingClean (2).png';

export default function Banner() {
    const bannerStyle = {
        backgroundImage: "url('./assets/kingClean (29).png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: 'auto', // Ensure the container has a height
        maxwidth: "100%" // Ensure the container has a width
    };

    return (
        <>
         <div className="py-5 px-0" style={bannerStyle}>
          <div className="banner-content ps-5">
            <div className="banner-text  text-light col-md-5">
              <h1>Commercial Cleaning </h1>
              <h2> <span className='se'>Services</span><span className='me'> Melbourne</span></h2>
              <p>
                We are one of leading & competitive commercial office cleaning
                company/delivers high-standard cleaning services for offices and
                commercial premises in Melbourne wide.
              </p>
              <div className="banner-icons gap-2 col-md-8">
                <div className="banner-icon  gap-2">
                    <img src={bannerimg2} alt="banner-img-2" className='img-fluid' />
                    <p className='title'>100% Customer<br/>
                    satisifaction</p>
                  </div>
                <div className="banner-icon1 gap-2">
                <img src={bannerimg3} alt="banner-img-2" className='img-fluid' />
                 <p className='title'>An Eye for <br/>Details
                 </p>
                </div>
                <div className="banner-icon1  gap-2">
                <img src={bannerimg4} alt="banner-img-2" className='img-fluid' />
                <p className='title'>Focus on 
                    <br/>
                 Progress
                 </p>
                </div>
              </div>
             
              <div className='d-flex  align-items-center my-4 gap-3'>
              <button className="banner-button">Get A free Quote Today</button>
              <div className="phone-container">
          <div className="phone-icon">
        <img src={callImg} alt="Call Icon" width="20" height="20" />
         </div>
      <div>
        <span className="phone-text">Call Us Now</span>
        <a className="nav-link phone-text" href="tel:13003429334">
          13003429334
        </a>
      </div>
    </div>
                </div>
            </div>
          </div>
          <div className="banner-description ps-5 ">
            <p>
              We are a professional cleaning company that clean all types of <br/>
              offices, whether small or large throughout Australia. <br/>
              With a professional cleaning staff experienced in office cleaning, we 
              clean your <br/>
              office spotlessly that helps you in increasing your productivity and
              revenue.<br/>
              We offer our services throughout Australia in all sectors of office
              cleaning.<br/>
              It means that for your office cleaning needs, you can completely rely
              on King Solutions.
            </p>
          </div>
         
        </div>


           
        </>
    );
}
