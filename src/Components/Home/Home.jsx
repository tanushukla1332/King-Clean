import Banner from "./Banner";
import './Home.css';

import {Row,Col} from 'react-bootstrap';
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import ImageWithText from "./Section4";
import Section5 from "./Section5";


export default function Home(){
    return(
        <>
        <Banner/>

        <Row className="d-flex justify-content-center align-items-center py-5 my-5 px-0" style={{backgroundColor:'#628225'}}>
            <Col md={10}  className="d-flex justify-content-between align-items-center ">
            <div>
                <h3 className="hed35">
                Your Trusted Cleaning Partner <br/> For Commercial And <br/> Domestic Needs In Melbourne
                </h3>
            </div>
            <div>
            <button className="banner-button" style={{backgroundColor:"#ffff",color:"#628225",fontSize:"16px",fontWeight:"700"}}>Get A free Quote Today</button>
            <p className="text-light text-sm fw-medium pt-3">OR- CALL US NOW 1300342934</p>
            </div>


                </Col>
            
        </Row>
        <Section1/>
        <Section2/>
        <Section3/>
   <ImageWithText/>
  <Section5/>
       
        </>
    )
}