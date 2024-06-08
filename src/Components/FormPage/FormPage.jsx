
import {Row,Col} from 'react-bootstrap';
import img1 from '../../../public/assets/CovidCertificate.png';
import img2 from '../../../public/assets/electrostatic-disinfection.png';
import img3 from '../../../public/assets/safe&verified.png';
import callImg from '../../../public/assets/kingClean (31).png';
import svg from '../.././../public/assets/contactsvg.png'



import './FormPage.css'

export default function FormPage(){
    return(
        <>
      
    <div class="row d-flex justify-content-evenly py-4  gap-5 mt-5">
        
  
    {/* Section1 */}
       
        <div className="col-md-4">
        <div>
        <h2 className='hed2 text-center pb-1' style={{color:"#4B4E47"}}>Professional Commercial  <span style={{color:"#628225"}}>Cleaning Services</span> </h2>
                <div className='d-flex align-items-center pt-5 border-bottom gap-4'>
                    <div>
                        <img src={img1} alt="" className='img-fluid' />
                    </div>
                    <div>
                    <h5>Experienced</h5>
                    <p> Years of experience in cleaning services.</p>
                    </div>
                </div>
                <div className='d-flex align-items-center pt-5 border-bottom gap-4'>
                    <div>
                        <img src={img3} alt="" className='img-fluid' />
                    </div>
                    <div>
                    <h5>Trusted Cleaning Company</h5>
                    <p>Highly reputable cleaning services trusted by Australia's leading brands.</p>
                    </div>
                </div>
                <div className='d-flex align-items-center pt-5 border-bottom gap-4'>
                    <div>
                        <img src={img2} alt="" className='img-fluid' />
                    </div>
                    <div>
                    <h5>Eco-friendly</h5>
                    <p>Specialise in using eco-friendly products for high-quality, non-toxic cleaning.</p>
                    </div>
                </div>
                <div className='d-flex gap-4 mt-5 '>
                <button className="btn btn-success" onClick={()=>navigate('/formpage')}>
                    <img src={callImg} alt="" className='img-fluid' /> <span className='ps-3'>13003429334</span>
                  

                </button>
                </div>
                <div>
                  <img src={svg} alt="" className='img-fluid' style={{height:"500px"}} />

                </div>
          

        </div>
           
          
        </div>
        <div className="col-md-5 sweker-boxmain-div">
            <div className="skewer-box">
            <h2 className='hed2 text-center pb-1' style={{color:"#4B4E47"}}>Get a Free  <span style={{color:"#628225"}}>Quote</span>
            <h6 className='hed6 text-center'>For Your Commercial/Office Cleaning</h6></h2>
            <div className="col-md-12 col-xl-12 col-sm-12 col-lg-12 d-flex gap-4">
                    <div className="row">
                        <div className="col-md-12">
                            <input type="text" id="name" name="name" required className="numbersOnly" placeholder="Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                 
                            <input type="text" id="phone" name="phone" required className="numbersOnly" placeholder="Phone" />
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-12 d-flex gap-4">
                    <div className="row">
                        <div className="col-md-12">
                    
                            <select id="city" name="city" className="form-control required">
                                <option value="Melbourne" selected>Melbourne</option>
                                <option value="Geelong">Geelong</option>
                                <option value="Mornington Peninsula">Mornington Peninsula</option>
                                <option value="Sydney">Sydney</option>
                                <option value="Brisbane">Brisbane</option>
                                <option value="Adelaide">Adelaide</option>
                                <option value="Perth">Perth</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                           
                            <input type="text" id="post_code" name="post_code" required className="numbersOnly" placeholder="Post Code" />
                        </div>
                    </div>
                </div>
                <div className="col-md-12 d-flex gap-4">
                    <div className="row">
                        <div className="col-md-12">
                         
                            <input type="text" id="suburb" placeholder="Suburb" required name="suburb" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                          
                            <input type="text" name="address" id="address" required placeholder="Street Address" />
                        </div>
                    </div>
                </div>
             
                <div className="col-md-12 d-flex gap-4" >
                    <div className="row">
                        <div className="col-md-12">
                            <label>Date?</label>
                            <input type="date" name="day" id="day" required className="br-0 form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Time</label>
                            <br/>
                            <select id="service_time" name="service_time" type="text">
                                <option value="" selected>Select</option>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="(Commercial/Office Cleaning Only)">After Business Hours (Commercial/Office Cleaning Only)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-md-12" >
                
                    <div  className='d-flex'>
                    <div className="row">
                        <div className="col-md-12">
                            <label>How often would you like to get your premises cleaned?</label>
                            <br/>
                            <select id="service_time" name="service_time" type="text">
                                <option value="" selected>Select</option>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="(Commercial/Office Cleaning Only)">After Business Hours (Commercial/Office Cleaning Only)</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>What time would you like to get your premises cleaned?</label>
                            <br/>
                            <select id="service_time" name="service_time" type="text">
                                <option value="" selected>Select</option>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="(Commercial/Office Cleaning Only)">After Business Hours (Commercial/Office Cleaning Only)</option>
                            </select>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="col-md-12 d-flex gap-4 py-2" >
                    <div className="row">
                        <div className="col-md-12">
                            <label>Approximate Number of Employees working at your premises?</label>
                            <br/>
                            <select id="service_time" name="service_time" type="text">
                                <option value="" selected>Select</option>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="(Commercial/Office Cleaning Only)">After Business Hours (Commercial/Office Cleaning Only)</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>
                            When would you like to have a Free Site Inspection to get a No obligation Quote?</label>
                            <input type="date" name="day" id="day" required className="br-0 form-control"/>
                        </div>
                 
                    </div>
                </div>
                <div className="col-md-12">
                <label className='pb-3'>Is there anything else you would like us to know?</label>
                <textarea id="message" name="message" rows="3" style={{width:"100%"}} placeholder="Type your message here..."></textarea>
            </div>
            <div className="col-md-12">
    <div className="row">
        <div className="col-md-12 py-2">
            <label>How did you hear about us ?</label>
            <br/>
            <div className='d-flex gap-5' style={{width:"100%"}}>
            <div className='d-flex gap-2'>
                <input type="radio" id="employees_1-10" name="employee_count" value="1-10"  />
                <label for="employees_1-10">Google</label>
            </div>
            <div className='d-flex gap-2'>
                <input type="radio" id="employees_11-50" name="employee_count" value="11-50" />
                <label for="employees_11-50">Facebook</label>
            </div>
            <div className='d-flex gap-2'>
                <input type="radio" id="employees_51-100" name="employee_count" value="51-100" />
                <label for="employees_51-100">Referral</label>
            </div>
            <div className='d-flex gap-2'>
                <input type="radio" id="employees_101+" name="employee_count" value="101+" />
                <label for="employees_101+"> Email</label>
            </div>
            <div className='d-flex gap-2'>
                <input type="radio" id="employees_101+" name="employee_count" value="101+" />
                <label for="employees_101+">Other</label>
            </div>
        </div>
            </div>
           
    </div>
    <div className="row">
        <div className="col-md-12 py-2">
            <label>How would you like us to be contacted?</label>
            <br/>
           <div className='d-flex gap-5'  style={{width:"100%"}}>
           <div  className='d-flex gap-2' >
                <input type="radio" id="inspection_now" name="inspection_timing" value="Now" />
                <label for="inspection_now">Now</label>
            </div>
            <div  className='d-flex gap-2'>
                <input type="radio" id="inspection_next_week" name="inspection_timing" value="Next Week" />
                <label for="inspection_next_week">Next Week</label>
            </div>
            <div  className='d-flex gap-2'>
                <input type="radio" id="inspection_next_month" name="inspection_timing" value="Next Month" />
                <label for="inspection_next_month">Next Month</label>
            </div>
           </div>
        </div>
    </div>
</div>
                <div className="col-md-12 pb-3"> 
                    <div className="row">
                        <div className="col-md-12">
            <div className='d-flex gap-2'>
                <input type="checkbox" id="interest1" name="interest1" value="Interest 1" />
                <label for="interest1">By Submitting this form, you agree with the Terms & Conditions and Privacy Policy.</label>
            </div>
                        </div>
                    </div>
                    
                <div className='d-flex justify-content-center align-items-center'>
                <button className="btn btn-success ">Submit</button>
                </div>
                </div>
                

            </div>
            
            
           
        </div>
    </div>
  




        </>
    )
}