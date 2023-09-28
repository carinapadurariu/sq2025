import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {HOST} from './constants'
import axios from 'axios';
const ADMIN_URL = HOST + 'admin/users/';

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const authToken = localStorage.getItem('token');

        axios.get(ADMIN_URL, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        })
            .then(response => setUsers(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleDeleteUser = (user) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            axios.delete(`${ADMIN_URL}${user.username}`)
                .then(() => setUsers(users.filter(u => u.username !== user.username)))
                .catch(error => console.log(error));
        }
    };

    return (
        <section>
            <h1>Admins Page</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.username}>
                        {user.name}
                        <Link to = {`${ADMIN_URL}${user.username}/profile`}>View Profile</Link>
                        <Link to = {`${ADMIN_URL}${user.username}/edit`}>Edit User</Link>
                        <button onClick={() => handleDeleteUser(user)}>Delete User</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Admin