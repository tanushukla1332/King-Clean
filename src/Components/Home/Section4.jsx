import {Row,Col} from 'react-bootstrap';
import img from '../../../public/assets/kingClean (12).png';
import img1 from '../../../public/assets/kingClean (6).png';
import img2 from '../../../public/assets/kingClean (7).png';
import img3 from '../../../public/assets/kingClean (4).png';


export default function Section4(){
    return(
        <>
        <Row  className='py-5 d-flex align-items-center justify-content-center px-0'>
        <h1 className='hed2 text-center' style={{color:"#4B4E47"}}>Are You Looking For The <span style={{color:"#628225"}}>Best  <br/>Cleaner 
        Melbourne?</span></h1>
            <Col md={10}>
            <div className='d-flex'>
            <div className="image-container">
            <img src={img} alt="img-cleaning" className='img-fluid' />
            <div className="overlay">
                <h3 className='hed5 text-center' style={{color:"#628225"}}>Office Cleaning
                    Lorem, ipsum.
                </h3>
            </div>
        </div>
        <div className="image-container">
            <img src={img1} alt="img-cleaning" className='img-fluid' />
            <div className="overlay">
                <h3  className='hed5 text-center' style={{color:"#628225"}}>Body Corporate & 
                Strata Cleaning</h3>
            </div>
        </div>
        <div className="image-container">
            <img src={img2} alt="img-cleaning" className='img-fluid' />
            <div className="overlay">
                <h3  className='hed5 text-center' style={{color:"#628225"}}>Hotel/Motel/Pub & 
                Club Cleaning</h3>
            </div>
        </div>
        <div className="image-container">
            <img src={img3} alt="img-cleaning" className='img-fluid' />
            <div className="overlay">
                <h3  className='hed5 text-center' style={{color:"#628225"}}>Childcare Cleaning
                    Lorem, ipsum.
                </h3>
            </div>
        </div>
                
                
            </div>
            <div className='d-flex'>
            <div className="image-container">
            <img src={img} alt="img-cleaning" className='img-fluid' />
            <div className="overlay">
                <h3  className='hed5 text-center' style={{color:"#628225"}}>Office Cleaning
                    Lorem, ipsum.
                </h3>
            </div>
        </div>
        <div className="image-container">
            <img src={img3} alt="img-cleaning" className='img-fluid' />
            <div className="overlay">
                <h3  className='hed5 text-center' style={{color:"#628225"}}>Body Corporate & 
                Strata Cleaning</h3>
            </div>
        </div>
        <div className="image-container">
            <img src={img2} alt="img-cleaning" className='img-fluid' />
            <div className="overlay">
                <h3  className='hed5 text-center' style={{color:"#628225"}}>Hotel/Motel/Pub & 
                Club Cleaning</h3>
            </div>
        </div>
        <div className="image-container">
            <img src={img1} alt="img-cleaning" className='img-fluid' />
            <div className="overlay">
                <h3  className='hed5 text-center' style={{color:"#628225"}}>Childcare Cleaning
                    Lorem, ipsum.
                </h3>
            </div>
        </div>
                
                
            </div>


            </Col>
        </Row>
        </>
    )
}