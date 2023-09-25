import React from "react";
import { Nav } from 'react-bootstrap';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminLink = () => {
    const roles = localStorage.getItem('roles');
    let isAdmin = false;
    if (roles != null) {
        isAdmin = roles.includes('ROLE_ADMIN');
    }
    else {
         isAdmin = false;
    }

    return isAdmin ? (
        <Nav.Link exact="true" activeclassname="active" className="admin-link" to="/admin">
                            <FontAwesomeIcon icon={faShieldHalved } color="#4d4d4e" />
                        </Nav.Link>
    ) : null;
};

export default AdminLink;