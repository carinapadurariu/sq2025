import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminLink = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const roles = localStorage.getItem('roles');

  useEffect(() => {
    if (roles != null) {
      setIsAdmin(roles.includes('ROLE_ADMIN'));
    } else {
      setIsAdmin(false);
    }
  }, [roles]);

  return isAdmin ? (
    <NavLink to='/admin' activeStyle>
      <FontAwesomeIcon icon={faShieldHalved} color="#4d4d4e" />
    </NavLink>
  ) : null;
};

export default AdminLink;
