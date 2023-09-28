import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {HOST} from './constants'
const DATA_URL = HOST + 'profile';

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

        axios
            .get(DATA_URL, {
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
        <div className="user-profile-container">
            <form className="userPage-form">
                <h2 style={{ fontSize: '25px', color:"yellow" }}><u>User Profile</u></h2>
                <p className="profile-username">
                    <p>
                        <strong>Username:</strong> <span style={{ color: 'magenta' }}>{user.username}</span>
                    </p>

                </p>
                <p>
                    <strong>Email:</strong> <span style={{ color: 'magenta' }}>{user.email}</span>
                </p>
                <p>
                    <strong>First Name:</strong> <span style={{ color: 'magenta' }}>{user.firstName}</span>
                </p>
                <p>
                    <strong>Last Name:</strong> <span style={{ color: 'magenta' }}>{user.lastName}</span>
                </p>
                <p>
                    <strong>Phone:</strong> <span style={{ color: 'magenta' }}>{user.phoneNumber}</span>
                </p>
                <p>
                    <strong>Role:</strong> <span style={{ color: 'magenta' }}>{user.roles}</span>
                </p>
                <Link className="userPage-editProfileButton" to="/edituserprofile">
                    Edit Profile
                </Link>
            </form>
        </div>
    );
};

export default UserProfile;