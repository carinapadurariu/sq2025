import React, { useState, useEffect } from 'react';
import { HOST } from './constants'
import axios from 'axios';
import { useTranslation } from 'react-i18next';
const ADMIN_URL = HOST + 'admin/users';


const Admin = () => {
    const [users, setUsers] = useState([]);
    const { t, i18n } = useTranslation();

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
            <tbody>
                <tr>
                    <th>{t("Admin.table-1")}</th>
                    <th>{t("Admin.table-2")}</th>
                    <th>{t("Admin.table-3")}</th>
                    <th>{t("Admin.table-4")}</th>
                    <th>{t("Admin.table-5")}</th>
                    <th>{t("Admin.table-6")}</th>
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
            </tbody>
        </div>
    )
}

export default Admin