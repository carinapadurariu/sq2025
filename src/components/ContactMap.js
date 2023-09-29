import { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Image from 'react-bootstrap/Image';
import assistImg from '../assets/img/assistant.png'
import mechImg from '../assets/img/mech.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faCarBattery,
  faHandshake,
  faRoute,
  faStreetView,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import {HOST} from './constants'


export const ContactMap = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
   
    window.scrollTo(0, 0);

 }
 )


  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value,
        "to":formDetails.email,
        "subject": formDetails.firstName + formDetails.lastName
      })
  }

  const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");

        let response = await fetch(HOST+'emails', {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">

      <Container>
        <Row className="align-items-center">
           <h1 className="contact-text-h1"> {t("ContactMap.title")}</h1>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                 
                <h2>{t("ContactMap.impressions")}</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <Container className="footer-contact">
  <Row>
    <Col xs={12} sm={6} md={4} lg={3} className="custom-col">
      <Image src={assistImg} roundedCircle className="img1-design" />
    </Col>
    <Col xs={12} sm={6} md={8} lg={9}>
      <div className="stage-cube-cont">
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
      </div>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3} className="custom-image">
      <Image src={mechImg} roundedCircle className="img2-design" />
    </Col>
  </Row>
</Container>

<h4 className="h4-design-contact">{t("ContactMap.contact-details-title")}</h4>
<h5 className="h5-contact">{t("ContactMap.contact-details-address")}</h5>
<h6 className="h6-contact">{t("ContactMap.contact-details-phone")}</h6>
<h7 className="h7-contact">{t("ContactMap.contact-details-email")}</h7>

<div class="time-table">
<h2 class="opening-time--title">{t("ContactMap.schedule-title")}</h2>
<div class="inner-bg">
  <dl class="week-day">
    <dt>{t("ContactMap.schedule-day-1")}</dt>
    <dd>{t("ContactMap.schedule-hour-1")}</dd>
  </dl>
  <dl class="week-day">
    <dt>{t("ContactMap.schedule-day-2")}</dt>
    <dd>{t("ContactMap.schedule-hour-1")}</dd>
  </dl>
  <dl class="week-day">
    <dt>{t("ContactMap.schedule-day-3")}</dt>
    <dd>{t("ContactMap.schedule-hour-1")}</dd>
  </dl>
  <dl class="week-day">
    <dt>{t("ContactMap.schedule-day-4")}</dt>
    <dd>{t("ContactMap.schedule-hour-1")}</dd>
  </dl>
  <dl class="week-day">
    <dt>{t("ContactMap.schedule-day-5")}</dt>
    <dd>{t("ContactMap.schedule-hour-1")}</dd>
  </dl>
  <dl class="week-day">
    <dt>{t("ContactMap.schedule-day-6")}</dt>
    <dd>{t("ContactMap.schedule-hour-2")}</dd>
  </dl>
  <dl class="week-day closed">
    <dt>{t("ContactMap.schedule-day-7")}</dt>
    <dd>{t("ContactMap.schedule-hour-3")}</dd>
  </dl>
</div>

</div>

    <div className="map-styling-x">
    <iframe classname="mapping" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.685462539089!2d23.57321687619794!3d46.7513837466423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490dcd88b4ed5b%3A0x1e9c94ad374e64fb!2sFortech!5e0!3m2!1sro!2sro!4v1695296951521!5m2!1sro!2sro" 
    width = "1000px"
    height="500px"
    margin-left= "44px"
    border-radius="20px"
    animation= "2s"
    margin-top="20px"
    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </section>

  )
}