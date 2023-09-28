import React, { useState, useEffect } from 'react';
import { HOST } from './constants'
import axios from 'axios';
const ADMIN_URL = HOST + 'admin/users';

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const authToken = localStorage.getItem('token');
        if (!authToken) {
            // Handle the case where the user is not authenticated.
            // You can redirect the user to the login page or display an error message.
            return;
        }

        axios.get(ADMIN_URL, {
            headers: {
                Authorization: `Bearer ${authToken}`
            },
        })
            .then(response => {
                setUsers(response.data)
                console.log(response.data)
                console.log(users)
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
            
    }, []);

    const handleDeleteUser = (user) => {
        const authToken = localStorage.getItem('token');
        if (window.confirm('Are you sure you want to delete this user?')) {
            axios.delete(`${ADMIN_URL}/${user.username}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            })
                .then(() => setUsers(users.filter(u => u.username !== user.username)))
                .catch(error => console.log(error));
        }
    };

    return (
        <div className="admin-user-display">
            <table>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                    <th>Roles</th>
                </tr>
                {users && users.map((user, key) => (
                    <tr key={key}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.roles.join()}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Admin