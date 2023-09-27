import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faCarBattery,
  faHandshake,
  faRoute,
  faStreetView,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import serviceImg from '../assets/img/service1.png';
import contactImg from '../assets/img/contactImg.png';
import videoBackground from '../assets/img/cinematic-car-service.mp4'
import { Dropdown } from 'react-bootstrap';
import car1Img from '../assets/img/car4.png'
import engineImg from '../assets/img/engine1.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import engine2Img from '../assets/img/engine.png'
import elec1Img from '../assets/img/elec.png'
import pollImg from '../assets/img/pollution.png'
import transmImg from '../assets/img/transm.png'
import brakeImg from '../assets/img/brake.png'
import awardImg from '../assets/img/award.png'




export const About = () => {

   useEffect(() => {
   
      window.scrollTo(0, 0);
  
   }
   )

  return (
    <>
      <div id="about" className="about-content">
      <video autoPlay loop muted className="video-background">
          <source src={videoBackground} type="video/mp4" />
        </video>
        <p className="section_text_p1">Get To Know More</p>
        <div className="section-container">
          <div className="image-container">
            <img
              src={contactImg}
              alt="experience-icon"
              className="icon"
            />
          </div>
          <div className="about-info-text">
            <h2> Reliable Auto Services In Your Ways </h2>
          </div>
          <div className="subtext-about">
          <p className="color-paragraph">At NitroServices, we care about your car! <br />
          <br/>
           <p> Travel safely and confidently when you choose our high-quality services
               for your car's care.
           </p>
            </p>
            </div>
            <div className="services-container">
      <div className="left-column">
        <ul>
          <li>
            <strong>Auto Body Repair and Painting</strong>
          </li>
          <li>
            <strong>Auto Mechanics</strong>
          </li>
          <li>
            <strong>Computerized Auto Diagnostics</strong>
          </li>
          <li>
            <strong>Auto Electrical</strong>
          </li>
          <li>
            <strong>Wheel Alignment</strong>
          </li>
        </ul>
      </div>
      <div className="right-column">
        <ul>
          <li>
            <strong>Auto Air Conditioning</strong>
          </li>
          <li>
            <strong>Tire Vulcanization</strong>
          </li>
          <li>
            <strong>Auto Consultation</strong>
          </li>
          <li>
            <strong>Spare Parts</strong>
          </li>
          <li>
            <strong>Auto Towing Services</strong>
          </li>
        </ul>
      </div>
    </div>
        </div>
        <img
              src={serviceImg}
              alt="profile-picture"
              className="about-pic"
            />
      <div className="service-description">
      <p>NITRO Services aims to set an example in the automotive service industry through the expertise and passion of its professionals and the quality of the services provided.</p>
      <p>It's very easy to get in touch with us and schedule an appointment at our service center. You can contact us for assistance whenever an issue arises with your car.</p>
      <p>We'll respond promptly and together, we'll determine the date and time for your visit to the service center.</p><br/><br/>
      <ul className="service-features">
        <li className="list-about-item">Quick appointment scheduling</li>
        <li className="list-about-item">Guarantee for auto service labor and new parts</li>
        <li className="list-about-item">Professionalism and honesty</li>
        <li className="list-about-item">Competitive pricing</li>
        <li className="list-about-item">Transparency and upfront costs</li>
      </ul>
    </div>
    <h3 className="h3-text">
      Which Problem Fits You The Best?
    </h3>
    <div className="drop-down">
    <Dropdown className="d-inline mx-2">
  <Dropdown.Toggle id="dropdown-autoclose-true">
    Wheels
  </Dropdown.Toggle>

  <Dropdown.Menu className="dropdown-pink-background">
    <Dropdown.Item href="https://autochrome.ro/">Flat Tire </Dropdown.Item>
    <Dropdown.Item href="https://autochrome.ro/">Uneven Tire Wear</Dropdown.Item>
    <Dropdown.Item href="https://autochrome.ro/">Bald Tires </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown className="d-inline mx-2" autoClose="inside">
  <Dropdown.Toggle id="dropdown-autoclose-inside">
  Check Engine
  </Dropdown.Toggle>

  <Dropdown.Menu className="dropdown-pink-background">
    <Dropdown.Item href="https://serviceautocluj.ro/diagnoza-auto-cluj/">Overheating </Dropdown.Item>
    <Dropdown.Item href="https://serviceautocluj.ro/diagnoza-auto-cluj/">Engine Misfire </Dropdown.Item>
    <Dropdown.Item href="https://serviceautocluj.ro/diagnoza-auto-cluj/">Oil Leaks </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown className="d-inline mx-2" autoClose="inside">
  <Dropdown.Toggle id="dropdown-autoclose-inside">
  Electrical Problems
  </Dropdown.Toggle>

  <Dropdown.Menu className="dropdown-pink-background">
    <Dropdown.Item href="https://serviceautoclujnapoca.ro/electrica-auto/">Dead Battery</Dropdown.Item>
    <Dropdown.Item href="https://serviceautoclujnapoca.ro/electrica-auto/">Faulty Alternator</Dropdown.Item>
    <Dropdown.Item href="https://serviceautoclujnapoca.ro/electrica-auto/">Starter Motor Issues</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown className="d-inline mx-2" autoClose="inside">
  <Dropdown.Toggle id="dropdown-autoclose-inside">
  Emissions or Pollution Control Problems
  </Dropdown.Toggle>

  <Dropdown.Menu className="dropdown-pink-background">
    <Dropdown.Item href="https://www.facebook.com/profile.php?id=61550265524787">Catalytic Converter Failure:</Dropdown.Item>
    <Dropdown.Item href="https://www.facebook.com/profile.php?id=61550265524787">Exhaust Gas Recirculation </Dropdown.Item>
    <Dropdown.Item href="https://www.facebook.com/profile.php?id=61550265524787">Air Injection System Malfunction</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown className="d-inline mx-2" autoClose="outside">
  <Dropdown.Toggle id="dropdown-autoclose-outside">
  Transmission Issues
  </Dropdown.Toggle>

  <Dropdown.Menu className="dropdown-pink-background">
    <Dropdown.Item href="https://blackautocluj.com/service-auto-cluj/reparatii-clima-auto-cluj-incarcare-freon-cluj/">Slipping Transmission</Dropdown.Item>
    <Dropdown.Item href="https://blackautocluj.com/service-auto-cluj/reparatii-clima-auto-cluj-incarcare-freon-cluj/">Delayed or Rough Shifting</Dropdown.Item>
    <Dropdown.Item href="https://blackautocluj.com/service-auto-cluj/reparatii-clima-auto-cluj-incarcare-freon-cluj/">Burning Smell</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown className="d-inline mx-2" autoClose={false}>
  <Dropdown.Toggle id="dropdown-autoclose-false">
  Brake System Problems
  </Dropdown.Toggle>

  <Dropdown.Menu className="dropdown-pink-background">
    <Dropdown.Item href="https://www.euromaster.ro/intretinere-autoturism/verificare-sistem-de-franare">Spongy or Soft Brake Pedal</Dropdown.Item>
    <Dropdown.Item href="https://www.euromaster.ro/intretinere-autoturism/verificare-sistem-de-franare">Brake Warning Light</Dropdown.Item>
    <Dropdown.Item href="https://www.euromaster.ro/intretinere-autoturism/verificare-sistem-de-franare">Reduced Braking Power</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </div>
    <img className="image-design1" src={car1Img} />
    <img className="image-design2" src={engineImg} />
    <img className="image-design3" src={awardImg} />
    
      </div>
      <div className="cards-about">
    <Card style={{  width: '18rem',
         backgroundColor: '#8b8049',
         marginBottom: '33px', 
         marginLeft: '27px', 
         position: 'inherit'
     }}>
      <Card.Img variant="top" src={engine2Img} />
      <Card.Body>
        <Card.Title>Check Engine</Card.Title>
        <Card.Text>
        Check engine light illuminated? 
        Bring your vehicle to our service center for a thorough inspection.
        </Card.Text>
        {/* <Button variant="primary" className="btn-design">Go Check The Car</Button> */}
      </Card.Body>
    </Card>

    <Card style={{  width: '18rem',
         backgroundColor: '#8b8049',
         marginBottom: '33px',
         marginLeft: '27px', 
         position: 'inherit'
     }}>
      <Card.Img variant="top" src={elec1Img} />
      <Card.Body>
      <br/>
        <Card.Title>Electrical Problems</Card.Title>
        <Card.Text>
         
        Experiencing electrical issues?
        Schedule a service appointment to diagnose and resolve your car's problems.
        </Card.Text>
        {/* <Button variant="primary" className="btn-design">Go Check The Car</Button> */}
      </Card.Body>
    </Card>

    <Card style={{  width: '18rem',
         backgroundColor: '#8b8049',
         marginBottom: '33px',
         marginLeft: '27px', 
         position: 'inherit'
     }}>
      <Card.Img variant="top" src={pollImg} />
      <Card.Body>
        <Card.Title>Emissions & Pollution</Card.Title>
        <Card.Text>
        Concerned about pollution and emissions? 
        Visit our auto services for an eco-friendly and safe solution for your vehicle.
        </Card.Text>
        {/* <Button variant="primary" className="btn-design">Go Check The Car</Button> */}
      </Card.Body>
    </Card>

    <Card style={{  width: '18rem',
         backgroundColor: '#8b8049',
         marginBottom: '33px',
         marginLeft: '27px',
         position: 'inherit'
     }}>
      <Card.Img variant="top" src={transmImg} />
      <Card.Body>
        <Card.Title>Transmission Issues</Card.Title>
        <Card.Text>
        Experience smooth driving?
        Entrust your car's transmission issues to our expert repair services today.
        </Card.Text>
        {/* <Button variant="primary" className="btn-design">Go Check The Car</Button> */}
      </Card.Body>
    </Card>

    <Card style={{  width: '18rem',
         backgroundColor: '#8b8049',
         marginBottom: '33px', 
         marginLeft: '27px',
         position: 'inherit'
     }}>
      <Card.Img variant="top" src={brakeImg}  />
      <Card.Body>
        <Card.Title>Brake System Problems</Card.Title>
        <Card.Text>
        For brake system concerns, ensure your safety by 
        scheduling a thorough inspection and maintenance with us.
        </Card.Text>
        {/* <Button variant="primary" className="btn-design">Go Check The Car</Button> */}
      </Card.Body>
    </Card>

    </div>
      {/* <div className="stage-cube-cont">
      <div className="cubespinner">
             <div className="face1">
               <FontAwesomeIcon icon={faCar} color="#DD0031" />
             </div>
             <div className="face2">
               <FontAwesomeIcon icon={faRoute} color="#F06529" />
             </div>
             <div className="face3">
               <FontAwesomeIcon icon={faTruck} color="#28A4D9" />
             </div>
             <div className="face4">
               <FontAwesomeIcon icon={faHandshake} color="#5ED4F4" />
             </div>
             <div className="face5">
               <FontAwesomeIcon icon={faCarBattery} color="#EFD81D" />
             </div>
             <div className="face6">
               <FontAwesomeIcon icon={faStreetView} color="#EC4D28" />
             </div>
           </div>
         </div> */}
    </>
  );
};
