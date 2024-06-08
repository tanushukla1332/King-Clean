import checkimg from '../../../public/assets/Mask group (16).png'
import {Row,Col,Button} from 'react-bootstrap';
import secimg from '../../../public/assets/kingClean (25).png';
import seci2mg from '../../../public/assets/kingClean (24).png';
import sec3img from '../../../public/assets/kingClean (23).png';
import sec4img from '../../../public/assets/kingClean (22).png';
import sec5img from '../../../public/assets/kingClean (21).png';

export default function Section1(){
    const listItems = [
        "Office deep cleaning services for maintaining cleanliness and safety.",
        "King Clean's experienced and adaptable approach ensures effective services.",
        "Adherence to government regulations for prioritizing health and safety.",
        "Use of eco-friendly products and advanced technology for thorough disinfection.",
        "Comprehensive cleaning process targets all areas, including hard-to-reach corners.",
        "Focus on promoting a healthy work environment.",
        "Nationwide coverage available for convenience."
    ];
    const content = [
        {
            heading: "Tailored Cleaning for All Office Sizes",
            text: "Regardless of your office's size, our professional services can transform it into a clean, welcoming space."
        },
        {
            heading: "Flexible Service Options",
            text: "Whether you require one-time or daily cleaning, we employ industry standard methods for consistent cleanliness."
        },
        {
            heading: "Comprehensive Cleaning Solutions",
            text: "Our services effectively eliminate dirt, dust, and odors, creating a pleasant and productive work environment."
        },
        {
            heading: "Customized Cleaning Programs",
            text: "We collaborate with clients to design personalized cleaning programs tailored to their office's unique needs."
        },
        {
            heading: "Complete Floor Care Program",
            text: "King Clean's team takes pride in delivering comprehensive floor care alongside office cleaning services."
        }
    ];
    
 
    
   
    
    return(
        <>
        <Row className='d-flex justify-content-center align-items-center'>
            <Col md={5}  xl={5} lg={5}>
            <h2 className='hed2'>
                <span className='home-sec-first-text-design'>O</span>
            ffice 
            <span className='home-sec-first-text-design ps-3'>D</span>
            eep
            <span className='home-sec-first-text-design ps-3'>C</span>
            leaning
               <span className='home-sec-first-text-design ps-3'>S</span>
               ervices
               </h2>
               <div className='sectionhome-list-div'>
            {listItems.map((item, index) => (
                <ul key={index}>
                    <div className='d-flex align-items-center'>
                        <img src={checkimg} alt="check-mark" className='img-fluid' />
                     <li>{item}</li>
                    </div>
                   
                </ul>
            ))}
        </div>
            </Col>
            <Col md={5}   xl={5} lg={5} className='text-center'>
            <img src={secimg} alt="section-home1st" />
           
            </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center py-5'>
            <Col md={5}>
            <img src={seci2mg} alt="sec-img2"  className='img-fluid'/>
            </Col>
            <Col md={5}>
            <h2 className='hed2'>Office<span className=' ps-2 cleaning'>Cleaning</span> <br/>
            <span><span className='ser'>Services </span>for All Size </span> <br/>
            <span>of Offices</span></h2>
            <div className='sectionhome-list-div2'>
            {content.map((item, index) => (
                <ul key={index}>
                    <div className='d-flex align-items-start'>
                        <img src={checkimg} alt="check-mark" className='img-fluid' />
                        <div className='list-data2'>
                            <li className='hed'>{item.heading}</li>
                            <li className='text'>{item.text}</li>
                        </div>
                    </div>
                </ul>
            ))}
        </div>


            </Col>


        </Row>
        <Row  style={{backgroundColor:"#628225"}} className='d-flex justify-content-center align-items-center py-5'>
        <Col xs={12} md={5} className='text-light'>
          <h4 className='hed4'>Hire Professional</h4>
          <h1 className='hed2 text-light'>
            When you hire a  <br  className='mt-2'/>
            professional office  <br  className='mt-2 mb-2' /> 
            clean up service, you:
          </h1>
          <button className="banner-button mt-4" style={{backgroundColor:"#ffff",color:"#628225",fontSize:"25px",fontWeight:"800",height:"60px"}}>Get A free Quote Today</button>
        </Col>
        <Col xs={12} md={5}>
          <Row  className='sec-div3-home mb-3 py-3'>
            <Col xs={2}  className="d-flex align-items-center">
              <img src={sec3img} alt="Icon"  className='img-fluid'/>
            </Col>
            <Col xs={10} className='sec-div3-inside-data'>
              <h4 className='hed5'>Boosts Employees' Morale and Productivity</h4>
              <p className='para'>
                A clean and pleasant ambience at your workplace encourages your employees to do their best and be more productive.
                Therefore, hiring a professional office cleaning service will spruce your employees' performance.
              </p>
            </Col>
          </Row>
          <Row  className='sec-div3-home  mb-3 py-3'>
            <Col xs={2}  className="d-flex align-items-center">
              <img src={sec4img} alt="Icon"  className='img-fluid'/>
            </Col>
            <Col xs={10} className='sec-div3-inside-data'>
              <h4 className='hed5'>Prolonging your Office Fixtures' Condition</h4>
              <p className='para'>
                The dust, moisture, and spills on your office fixture primarily contribute to its natural aging process.
                With a proper office cleaning schedule, furniture and other assets will have a much shorter lifespan.
              </p>
            </Col>
          </Row>
          <Row className='sec-div3-home py-3'>
            <Col xs={2}  className="d-flex align-items-center">
              <img  src={sec5img} alt="Icon"  className='img-fluid' />
            </Col>
            <Col xs={10} className='sec-div3-inside-data'>
              <h4 className='hed5'>Saves Time and Money</h4>
              <p className='para'>
                Cleaning up an office is not a quick job. It can take a significant amount of time from your regular employees' schedules.
                By hiring a professional office clean up service, you can let other employees focus on their work which ultimately adds up to your revenue.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

        </>
    )
}