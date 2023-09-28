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
import { useTranslation } from 'react-i18next';


export const About = () => {
  const { t, i18n } = useTranslation();

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
        <p className="section_text_p1">{t("About.section_text_p1")}</p>
        <div className="section-container">
          <div className="image-container">
            <img
              src={contactImg}
              alt="experience-icon"
              className="icon"
            />
          </div>
          <div className="about-info-text">
            <h2> {t("About.about-info-text")} </h2>
          </div>
          <div className="subtext-about">
          <p className="color-paragraph">{t("About.color-paragraph")} <br />
          <br/>
           <p> {t("About.safety-message")}
           </p>
            </p>
            </div>
            <div className="services-container">
      <div className="left-column">
        <ul>
          <li>
            <strong>{t("About.left-column-1")}</strong>
          </li>
          <li>
            <strong>{t("About.left-column-2")}</strong>
          </li>
          <li>
            <strong>{t("About.left-column-3")}</strong>
          </li>
          <li>
            <strong>{t("About.left-column-4")}</strong>
          </li>
          <li>
            <strong>{t("About.left-column-5")}</strong>
          </li>
        </ul>
      </div>
      <div className="right-column">
        <ul>
          <li>
            <strong>{t("About.right-column-1")}</strong>
          </li>
          <li>
            <strong>{t("About.right-column-2")}</strong>
          </li>
          <li>
            <strong>{t("About.right-column-3")}</strong>
          </li>
          <li>
            <strong>{t("About.right-column-4")}</strong>
          </li>
          <li>
            <strong>{t("About.right-column-5")}</strong>
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
      <p>{t("About.service-description-1")}</p>
      <p>{t("About.service-description-2")}</p>
      <p>{t("About.service-description-3")}</p><br/><br/>
      <ul className="service-features">
        <li className="list-about-item">{t("About.service-features-1")}</li>
        <li className="list-about-item">{t("About.service-features-2")}</li>
        <li className="list-about-item">{t("About.service-features-3")}</li>
        <li className="list-about-item">{t("About.service-features-4")}</li>
        <li className="list-about-item">{t("About.service-features-5")}</li>
      </ul>
    </div>
    <h3 className="h3-text">
    {t("About.h3-text")}
    </h3>
    <div className="drop-down">
    <Dropdown className="d-inline mx-2">
  <Dropdown.Toggle id="dropdown-autoclose-true">
  {t("About.problem-1")}
  </Dropdown.Toggle>

  <Dropdown.Menu className="dropdown-pink-background">
    <Dropdown.Item href="https://autochrome.ro/">{t("About.wheels-1")} </Dropdown.Item>
    <Dropdown.Item href="https://autochrome.ro/">{t("About.wheels-2")}</Dropdown.Item>
    <Dropdown.Item href="https://autochrome.ro/">{t("About.wheels-3")} </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown className="d-inline mx-2" autoClose="inside">
  <Dropdown.Toggle id="dropdown-autoclose-inside">
  {t("About.problem-2")}
  </Dropdown.Toggle>

  <Dropdown.Menu className="dropdown-pink-background">
    <Dropdown.Item href="https://serviceautocluj.ro/diagnoza-auto-cluj/">{t("About.check-engine-menu-1")} </Dropdown.Item>
    <Dropdown.Item href="https://serviceautocluj.ro/diagnoza-auto-cluj/">{t("About.check-engine-menu-2")} </Dropdown.Item>
    <Dropdown.Item href="https://serviceautocluj.ro/diagnoza-auto-cluj/">{t("About.check-engine-menu-3")} </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown className="d-inline mx-2" autoClose="inside">
  <Dropdown.Toggle id="dropdown-autoclose-inside">
  {t("About.problem-3")}
  </Dropdown.Toggle>

  <Dropdown.Menu className="dropdown-pink-background">
    <Dropdown.Item href="https://serviceautoclujnapoca.ro/electrica-auto/">{t("About.electrical-problems-menu-1")}</Dropdown.Item>
    <Dropdown.Item href="https://serviceautoclujnapoca.ro/electrica-auto/">{t("About.electrical-problems-menu-2")}</Dropdown.Item>
    <Dropdown.Item href="https://serviceautoclujnapoca.ro/electrica-auto/">{t("About.electrical-problems-menu-3")}</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown className="d-inline mx-2" autoClose="inside">
  <Dropdown.Toggle id="dropdown-autoclose-inside">
  {t("About.problem-4")}
  </Dropdown.Toggle>

  <Dropdown.Menu className="dropdown-pink-background">
    <Dropdown.Item href="https://www.facebook.com/profile.php?id=61550265524787">{t("About.emissions-problems-menu-1")}</Dropdown.Item>
    <Dropdown.Item href="https://www.facebook.com/profile.php?id=61550265524787">{t("About.emissions-problems-menu-2")}</Dropdown.Item>
    <Dropdown.Item href="https://www.facebook.com/profile.php?id=61550265524787">{t("About.emissions-problems-menu-3")}</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown className="d-inline mx-2" autoClose="outside">
  <Dropdown.Toggle id="dropdown-autoclose-outside">
  {t("About.problem-5")}
  </Dropdown.Toggle>

  <Dropdown.Menu className="dropdown-pink-background">
    <Dropdown.Item href="https://blackautocluj.com/service-auto-cluj/reparatii-clima-auto-cluj-incarcare-freon-cluj/">{t("About.transmission-problems-menu-1")}</Dropdown.Item>
    <Dropdown.Item href="https://blackautocluj.com/service-auto-cluj/reparatii-clima-auto-cluj-incarcare-freon-cluj/">{t("About.transmission-problems-menu-2")}</Dropdown.Item>
    <Dropdown.Item href="https://blackautocluj.com/service-auto-cluj/reparatii-clima-auto-cluj-incarcare-freon-cluj/">{t("About.transmission-problems-menu-3")}</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown className="d-inline mx-2" autoClose={false}>
  <Dropdown.Toggle id="dropdown-autoclose-false">
  {t("About.problem-6")}
  </Dropdown.Toggle>

  <Dropdown.Menu className="dropdown-pink-background">
    <Dropdown.Item href="https://www.euromaster.ro/intretinere-autoturism/verificare-sistem-de-franare">{t("About.brake-system-problems-menu-1")}</Dropdown.Item>
    <Dropdown.Item href="https://www.euromaster.ro/intretinere-autoturism/verificare-sistem-de-franare">{t("About.brake-system-problems-menu-2")}</Dropdown.Item>
    <Dropdown.Item href="https://www.euromaster.ro/intretinere-autoturism/verificare-sistem-de-franare">{t("About.brake-system-problems-menu-3")}</Dropdown.Item>
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
        <Card.Title>{t("About.check-engine-1")}</Card.Title>
        <Card.Text>
        {t("About.check-engine-2")}
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
        <Card.Title>{t("About.electrical-problems-1")}</Card.Title>
        <Card.Text>
        {t("About.electrical-problems-2")}
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
        <Card.Title>{t("About.emissions-problems-1")}</Card.Title>
        <Card.Text>
        {t("About.emissions-problems-2")}
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
        <Card.Title>{t("About.transmission-problems-1")}</Card.Title>
        <Card.Text>
        {t("About.transmission-problems-2")}
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
        <Card.Title>{t("About.brake-system-problems-1")}</Card.Title>
        <Card.Text>
        {t("About.brake-system-problems-2")}
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
