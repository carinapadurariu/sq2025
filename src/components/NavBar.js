import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faEnvelope, faHome, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";
import i18n from 'i18next';
import AdminLink from './AdminLink';
import ConnectingHandling from './ConnectingHandling';
import { useTranslation } from 'react-i18next';

export const MyNavBar = (props) => {

    const { t, i18n } = useTranslation();
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

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
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <nav className="nav-bar-icons">
                            <NavLink exact="true" activeclassname="active" to="/">
                                <FontAwesomeIcon icon={faHome} color="#4d4d4e" style={{marginRight: '20px' }}/>
                            </NavLink>
                            <NavLink to='/about' activeStyle>
                                <FontAwesomeIcon icon={faNewspaper} color="#4d4d4e" style={{marginRight: '20px' }}/>
                            </NavLink>

                            <NavLink to='/contactMap' activeStyle>
                                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" style={{marginRight: '20px' }}/>
                            </NavLink>
                            <NavLink to='/carProfile' activeStyle>
                                <FontAwesomeIcon icon={faCar} color="#4d4d4e" style={{marginRight: '20px' }}/>
                            </NavLink>
                            
                            <NavLink to='/carmap' activeStyle>
                                <FontAwesomeIcon icon={faMap} color="#4d4d4e" style={{marginRight: '20px' }}/>
                            </NavLink>
                            <NavLink to='/userpage' activeStyle>
                                <FontAwesomeIcon icon={faUser} color="#4d4d4e" style={{marginRight: '20px' }}/>
                            </NavLink>
                            <AdminLink />
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
                        <ConnectingHandling />
                        <button onClick={() => i18n.changeLanguage('en')}>{t("NavBar.en-language")}</button>
                        <button onClick={() => i18n.changeLanguage('ro')}>{t("NavBar.ro-language")}</button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}