import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminLink = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  // Get the roles JSON string from localStorage.
  const rolesJson = localStorage.getItem('roles');

  // Convert the roles JSON string to an array.
  const roles = JSON.parse(rolesJson);

  // Use the roles array as needed.


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
