import { useState, useEffect} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome,faUser } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';


export const MyNavBar = (props) => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src ={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <nav className="nav-bar-icons">
            <Nav.Link exact="true"
             activeclassname="active" 
             to="/"
             onClick = {() => {
              console.log('gotohome')
              props.setPageState('home')
             }
            }
             >
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </Nav.Link>
            <Nav.Link exact="true"
             activeclassname="active"
             className="about-link"
             to="/about"
             onClick = {() => {
              console.log('gotoabout')
              props.setPageState('about')
             }
             } >
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </Nav.Link>
            <Nav.Link exact="true"
             activeclassname="active" 
             className="contact-link" 
             to="/contact"
             onClick = {() => {
              console.log('gotocontact')
              props.setPageState('contact')
             }
             } 
             >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </Nav.Link>
            <Nav.Link exact="true" activeclassname="active" className="map-link" to="/map">
              <FontAwesomeIcon icon={faMap} color="#4d4d4e" />
            </Nav.Link>
          </nav>
          <span className="navbar-text">
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
            <button className="vvd" onClick={() => {console.log('connect'); props.setShowLoginComponent(true)}}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

