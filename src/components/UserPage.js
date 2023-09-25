import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {HOST} from './constants'

const UserProfile = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        // Fetch user data using the authentication token
        const authToken = localStorage.getItem('token');

        if (!authToken) {
            // Handle the case where the user is not authenticated.
            // You can redirect the user to the login page or display an error message.
            setLoading(false);
            return;
        }

        axios.get(HOST + 'profile', {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    })

        .then((response) => {
             setUser(response.data);
             setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
             setLoading(false);
        });

    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p className="profile-username"><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Phone:</strong> {user.phoneNumber}</p>
            <p><strong>Role:</strong> {user.roles}</p>
            <Link className="userPage-editProfileButton" to="/edituserprofile">Edit Profile</Link>
        </div>
    );
};

export default UserProfile;