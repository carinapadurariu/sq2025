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
        <body className='userPage-body'>
        <section className="userPage-section">
            <form className="userPage-form" style={{ width: '400px' }}>
                <h2 style={{ fontSize: '25px', color:"lime" }}><u>User Profile</u></h2>
                <p className="profile-username">
                    <p>
                        <strong style={{marginLeft:'-40px'}}>Username:</strong> <span style={{ color: 'red' }}>{user.username}</span>
                    </p>

                </p>
                <p>
                    <strong>Email:</strong> <span style={{ color: 'red' }}>{user.email}</span>
                </p>
                <p>
                    <strong style={{marginLeft:'-90px'}}>First Name:</strong> <span style={{ color: 'red' }}>{user.firstName}</span>
                </p>
                <p>
                    <strong style={{marginLeft:'-80px'}}>Last Name:</strong> <span style={{ color: 'red' }}>{user.lastName}</span>
                </p>
                <p>
                    <strong style={{marginLeft:'-60px'}}>Phone:</strong> <span style={{ color: 'red' }}>{user.phoneNumber}</span>
                </p>
                <p>
                    <strong style={{marginLeft:'-80px'}}>Role:</strong> <span style={{ color: 'red' }}>{user.roles}</span>
                </p>
                <Link className="userPage-editProfileButton" to="/edituserprofile">
                    Edit Profile
                </Link>
            </form>
        </section>
        </body>
    );
};

export default UserProfile;