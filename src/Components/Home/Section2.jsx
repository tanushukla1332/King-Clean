import { Row, Col } from 'react-bootstrap';
import secimg from '../../../public/assets/kingClean (16).png';
import sec1img from '../../../public/assets/kingClean (18).png';
import sec2img from '../../../public/assets/kingClean (20).png';

export default function () {
    return (
        <>
            <Row className='d-flex align-items-center justify-content-center py-5'>
                <h1 className='text-center 
            hed2'>Why Choose King Solutions as your
                    <span className='home-sec-first-text-design pe-2'> Professional</span> <br />
                    Office  <span className='home-sec-first-text-design '>Cleaning Partner?</span></h1>
                <p className='hed5 text-center '>We Kill 99.99% Germs and Viruses and Make your Work Space Safer</p>

                <Col md={10} xl={10} lg={10} className='d-flex gap-5 align-items-center justify-content-center pt-5' >
               
                    <div className='home-sec-div4'>
                    <div className='d-flex align-items-center justify-content-center'>
                    <img src={sec2img} alt="icon" className='img-fluid' />
                </div>
                        <h4 className='hed5 text-center  pt-3'>Highly Sophisticated <span className='ser' style={{ fontSize: "20px" }}> Office</span>
                            <span className='cleaning' style={{ fontSize: "20px" }}> Cleaning</span>  Staff</h4>
                        <p className='para text-center'>When you book an office cleaning service
                            with us, you are booking a lot more than
                            just mop and dusters. Our staff comes with
                            a wealth of experience and expertise.
                            While you know how to keep your office
                            space organized, our professional cleaning
                            staff knows the best way to clean, sanitize,
                            and dust it. By hiring King Solutions for office
                            cleaning, you ensure that your office is
                            always at its best.</p>
                    </div>
                    <div className='home-sec-div4'>
                    <div className='d-flex align-items-center justify-content-center'>
                    <img src={secimg} alt="icon" className='img-fluid' />
                </div>
                        <h4 className='hed5 text-center pt-3 '>Affordable  <span className='ser' style={{ fontSize: "20px" }}>Office</span> Clean
                            <span className='ser' style={{ fontSize: "20px" }}>  Up  </span> Service</h4>
                        <p className='para text-center'>When you book an office cleaning service
                            with us, you are booking a lot more than
                            just mop and dusters. Our staff comes with
                            a wealth of experience and expertise.
                            While you know how to keep your office
                            space organized, our professional cleaning
                            staff knows the best way to clean, sanitize,
                            and dust it. By hiring King Solutions for office
                            cleaning, you ensure that your office is
                            always at its best.</p>
                    </div>
                    <div className='home-sec-div4'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src={sec1img} alt="icon" className='img-fluid' />
                        </div>
                        <h4 className='hed5 text-center pt-3'>
                            <span className='ser' style={{ fontSize: "20px" }}>  100%  </span>Customer <br/>
                            Satisfaction</h4>

                        <p className='para text-center'>When you book an office cleaning service
                            with us, you are booking a lot more than
                            just mop and dusters. Our staff comes with
                            a wealth of experience and expertise.
                            While you know how to keep your office
                            space organized, our professional cleaning
                            staff knows the best way to clean, sanitize,
                            and dust it. By hiring King Solutions for office
                            cleaning, you ensure that your office is
                            always at its best.</p>
                    </div>


                </Col>
            </Row>

        </>
    )
}