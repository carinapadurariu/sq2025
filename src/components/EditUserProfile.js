import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {HOST} from './constants'
import {useNavigate} from "react-router-dom";


const EditUserProfile = () => {
    const [user, setUser] = useState({});
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
    });
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the user's current profile data and populate the form
        const authToken = localStorage.getItem('token');

        if (authToken) {
            axios
                .get(HOST + 'profile', {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                })
                .then((response) => {
                    setUser(response.data);
                    setFormData({
                        email: response.data.email,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        phoneNumber: response.data.phoneNumber,
                    });
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);

    const handleProfileSubmit = (e) => {
        e.preventDefault();

        // Make a POST request to update the user's profile (email, first name, last name, phone number)
        const authToken = localStorage.getItem('token');

        if (authToken) {
            axios
                .post(HOST+'profile/data', formData, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                })
                .then((response) => {
                    console.log('User profile updated successfully:', response.data);
                    navigate('/login');
                })
                .catch((error) => {
                    console.error('Error updating user profile:', error);
                });
        }
    };

    const handleDeleteAccount = () => {
        const authToken = localStorage.getItem('token');

        if (authToken) {
            axios
                .delete(HOST + 'profile', {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                })
                .then((response) => {
                    // Handle success (e.g., show a success message, log out the user)
                    console.log('User account deleted successfully:', response.data);

                })
                .catch((error) => {
                    // Handle error (e.g., show an error message)
                    console.error('Error deleting user account:', error);
                });
        }
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();

        const authToken = localStorage.getItem('token');
        if (authToken) {
            axios
                .post('http://localhost:8080/profile/password', passwordData, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                })
                .then((response) => {
                    // Handle success (e.g., show a success message, redirect)
                    console.log('Password updated successfully:', response.data);
                })
                .catch((error) => {
                    // Handle error (e.g., show an error message)
                    console.error('Error updating password:', error);
                });
        }
    };

    const handleProfileChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePasswordChange = (e) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="edit-user-profile-container">

            <div className="edit-profile-column">
                <form className="edit-user-profile-form" onSubmit={handleProfileSubmit}>
                    <h2>Edit Profile</h2>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder={formData.email}
                            onChange={handleProfileChange}
                            className=''
                        />
                    </div>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder={formData.firstName}
                            onChange={handleProfileChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder={formData.lastName}
                            onChange={handleProfileChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            placeholder={formData.phoneNumber}
                            onChange={handleProfileChange}
                        />
                    </div>
                    <button className='edit-profile-submit' type="submit">Save Changes</button>
                </form>
            </div>
            <div className="edit-password-column">
                <form className="edit-password-form" onSubmit={handlePasswordSubmit}>
                    <h2>Change Password</h2>
                    <div className="form-group">
                        <label>Current Password:</label>
                        <input
                            type="password"
                            id="currentPassword"
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>New Password:</label>
                        <input
                            type="password"
                            id="newPassword"
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div>
                        <button className='edit-password-submit' type="submit">Change Password</button>
                    </div>
                    <br/>
                    <br/>
                    <button className="delete-button" onClick={handleDeleteAccount}>
                        Delete Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditUserProfile;