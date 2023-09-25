import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/logo.png';
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <ul>
              <li>
                <a target="_blank"
                 rel="noreferrer" 
                 href="https://www.facebook.com/padurariu.carina/">

                  <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
              </li>
              <li>
                <a target="_blank"
                 rel="noreferrer" 
                 href="https://github.com/">

                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
              </li>
              <li>
                <a target="_blank"
                 rel="noreferrer" 
                 href="https://www.instagram.com/">

                  <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
              </li>
            </ul>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
          
        </Row>
      </Container>
    </footer>
  )
}