import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {HOST} from './constants'
import axios from 'axios';

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${HOST}admin/users`)
            .then(response => setUsers(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleDeleteUser = (user) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            axios.delete(`${HOST}admin/users/${user.username}`)
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
                        <Link to = {`${HOST}admin/users/${user.username}/profile`}>View Profile</Link>
                        <Link to = {`${HOST}admin/users/${user.username}/edit`}>Edit User</Link>
                        <button onClick={() => handleDeleteUser(user)}>Delete User</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Admin