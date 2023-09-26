import React from "react";
import { NavLink } from 'react-router-dom';
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
        <NavLink to='/admin' activeStyle>
            <FontAwesomeIcon icon={faShieldHalved} color="#4d4d4e" />
        </NavLink>
    ) : null;
};

export default AdminLink;