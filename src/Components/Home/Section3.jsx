import { Row, Col } from 'react-bootstrap';
import bgimg from '../../../public/assets/Group 152.png';
import sec2secimg from '../../../public/assets/kingClean (17).png';

export default function Section3() {
    return (
        <>
            <Row style={{ backgroundImage: `url(${bgimg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='py-3 d-flex align-items-center justify-content-center px-0' >
                <Col md={5} xl={5} lg={5} xxl={5}>
                    <h2 className='hed2' style={{color:"#4B4E47"}}>Hire the  <span style={{color:"#628225"}}>Best Office
                    Cleaning Services  Melbournehg</span></h2>
                    <h6 className='hed6'>
                        If you had to ask yourself this question, it’s definitely the time to look for
                        new cleaners. King Office Cleaning Melbourne takes care of all your
                        Commercial Cleaning Melbourne needs as the Best Office Cleaning
                        Service Melbourne. Sign up for 30 day trial immediately and receive Price
                        beat Guarantee. If you don’t love our work after 30 days, you can walk
                        away.
                    </h6>
                    <button className="banner-button mt-3">Get A free Quote Today</button>
                </Col>
                <Col md={5} xl={5} lg={5} xxl={5}>
                    <img src={sec2secimg} alt="sec-img" className='img-fluid' />
                </Col>

            </Row>
        </>
    )
}