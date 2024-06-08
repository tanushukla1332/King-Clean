import { Row, Col } from 'react-bootstrap';
import call from '../../../public/assets/kingClean (31).png';
import loc from '../../../public/assets/kingClean (33).png';
import mail  from './../../../public/assets/kingClean (30).png';

export default function Footer() {
    return (
        <>
            <Row className='d-flex justify-content-center align-items-center py-4' style={{backgroundColor:"#628225"}}>
                <Col md={10} xl={10} lg={10} xxl={10} className='d-flex justify-content-between align-items-center'>
                    <div className='text-light col-md-4'>
                        <h3>About Us</h3>
                        <p>King Solutions is a versatile family business
                            with wealth of experience in wide variety
                            of cleaning services and service across
                            Melbourne.</p>
                    </div>
                    <div className='text-light'>
                        <h3>Get In Touch</h3>
                      <div className='d-flex align-items-center gap-2'> 
                        <img src={loc} alt="loc-img" className='img-fluid' style={{maxWidth:"15px"}} />
                        23 Milton Parade, Malvern VIC 3144
                      </div>
                      <div className='d-flex  align-items-center gap-2 mt-2'> 
                        <img src={call} alt="loc-img" className='img-fluid'   style={{maxWidth:"15px"}}/>
                        IN 1300342934
                        </div>
                      <div  className='d-flex  align-items-center gap-2 mt-2'> 
                        <img src={mail} alt="loc-img" className='img-fluid ' style={{maxWidth:"15px"}} />
                      contact@kingsolutions.com</div>
                    </div>
                    <div className='rouned-5 d-flex justify-content-center align-items-center'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5298.6190825035455!2d145.03684925139905!3d-37.84676979119665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6421a9a096b7f%3A0x5be9b9de917a161!2s23%20Milton%20Parade%2C%20Malvern%20VIC%203144%2C%20Australia!5e0!3m2!1sen!2sin!4v1717831527395!5m2!1sen!2sin"  allowfullscreen="" loading="lazy"  width="300px"  height="250px" className="rounded-1"referrerpolicy="no-referrer-when-downgrade"></iframe> 
                    </div>
                </Col>
                <div className='pb-0 mt-5 col-md-12 col-xl-12 col-sm-12 col-lg-12 d-flex justify-content-center align-items-center bg-light text-center pt-3' style={{height:"30px"}}>
                        <p className='text-center hed6'>Copyright © 2024 | King Solutions | Powered by SCS Pvt. Ltd.</p>
                    </div>
            </Row>
        </>
    )
}