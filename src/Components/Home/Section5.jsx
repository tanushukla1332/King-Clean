import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import icon1 from '../../../public/assets/kingClean (1).png';
import icon2 from '../../../public/assets/kingClean (2).png';
import icon3 from '../../../public/assets/kingClean (3).png';
import icon4 from '../../../public/assets/kingClean (34).png';

export default function Section5() {
  const steps = [
    {
      icon: icon3,
      number: '1',
      title: 'Request a Free Quote',
    },
    {
      icon: icon2,
      number: '2',
      title: 'Introductory Phone Call',
  
    },
    {
      icon: icon1,
      number: '3',
      title: 'Schedule On-site inspection',
    
    },
    {
      icon: icon4,
      number: '4',
      title: 'Get your customised Quote',
     
    },
  ];

  return (
    <>
      
      <Row className="d-flex justify-content-center align-items-center pb-5">
        <div>
        <h1 className="text-center hed2 pb-4">
            <span style={{ color: '#4B4E47' }}>Book In 4</span>{' '}
            <span style={{ color: '#628225' }}>Easy Steps</span>
          </h1>
        </div>
        {steps.map((step, index) => (
          <Col key={index} md={2}  xl={2} lg={2} xxl={2} className="mb-4">
            <Card  className='text-center card-how-to-book'>
              <Card.Body>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="step-number hed2" style={{opacity:"0.2",marginBottom:"70px"}}>{step.number}</span>
                <div className="d-flex align-items-center justify-content-center" >
                <img src={step.icon} alt={`Step ${index + 1}`} />
                </div>
                </div>
                <Card.Title>{step.title}</Card.Title>
              
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}