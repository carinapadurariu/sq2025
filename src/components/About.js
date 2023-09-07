import React from 'react';
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

export const About = () => {
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
