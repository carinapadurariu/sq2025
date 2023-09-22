import React from "react";
import { Nav } from 'react-bootstrap';

const AdminLink = () => {
    const isAdmin = localStorage.getItem(roles).includes('ROLE_ADMIN');

    return isAdmin ? (
        <Nav.Link exact="true" activeclassname="active" className="admin-link" to="/admin">
                            <FontAwesomeIcon icon={faShieldHalved } color="#4d4d4e" />
                        </Nav.Link>
    ) : null;
};

export default AdminLink;