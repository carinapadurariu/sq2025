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
        oldPassword: '',
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
                .put(HOST+'profile/data', formData, {
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
                .put(HOST+ 'profile/password', passwordData, {
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
            [e.target.id]: e.target.value,
        });
    };

    const handlePasswordChange = (e) => {
        setPasswordData({
            ...passwordData,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <div className="edit-user-profile-container">
            <button className="delete-button" onClick={handleDeleteAccount}>
                Delete Account
            </button>
            <form className="edit-user-profile-form" onSubmit={handleProfileSubmit}>
                <div className="edit-user-form-group">
                    <h2>Edit Profile</h2>
                    <div className='edit-user-input'>
                        <div className='edit-user-input-group'>
                            <label>Email:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder={formData.email}
                                onChange={handleProfileChange}
                                className='edit-user-input'
                            />
                        </div>
                        <div className='edit-user-input-group'>
                            <label>First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder={formData.firstName}
                                onChange={handleProfileChange}
                                className='edit-user-input'
                            />
                        </div>
                        <div className='edit-user-input-group'>
                            <label>Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder={formData.lastName}
                                onChange={handleProfileChange}
                                className='edit-user-input'
                            />
                        </div>
                        <div className='edit-user-input-group'>
                            <label>Phone Number:</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                placeholder={formData.phoneNumber}
                                onChange={handleProfileChange}
                                className='edit-user-input'
                            />
                        </div>
                    </div>
                    <br/>
                    <button className='edit-profile-submit' type="submit">Save Changes</button>
                </div>
            </form>
            <form className="edit-password-form" onSubmit={handlePasswordSubmit}>
                <h2>Change Password</h2>
                <div className="edit-password-form-group">
                    <div className='edit-user-input-group'>
                        <label>Current Password:</label>
                        <br/>
                        <input
                            type="password"
                            id="oldPassword"
                            onChange={handlePasswordChange}
                            className='edit-password-input'
                        />
                    </div>
                    <div className='edit-user-input-group'>

                        <label>New Password:</label>
                        <br/>
                        <input
                            type="password"
                            id="newPassword"
                            onChange={handlePasswordChange}
                            className='edit-password-input'

                        />
                    </div>
                    <div className='edit-user-input-group'>
                        <label>Confirm Password:</label>
                        <br/>
                        <input
                            type="password"
                            id="confirmPassword"
                            onChange={handlePasswordChange}
                            className='edit-password-input'
                        />
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <button className='edit-password-submit' type="submit">Change Password</button>
                <br/>
                <br/>
            </form>
        </div>
    );
}

export default EditUserProfile;