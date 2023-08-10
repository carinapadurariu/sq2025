import React, { useState } from "react";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [confPass, setConfPass] = useState('');
    const [error, setError] = useState('');

    const validateForm = () => {
        let isValid = true;
        const errors = {};

        if (!name) {
            errors.name = 'Full Name is required';
            isValid = false;
        }

        if (!email) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
            isValid = false;
        }

        if (!pass) {
            errors.password = 'Password is required';
            isValid = false;
        } else if (pass.length < 6) {
            errors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        if (pass !== confPass) {
            errors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setError(errors);
        return isValid;
    };

    function showMessage()
    {
        window.alert('Your request was submitted. You will be redirected to the login page');
        props.onFormSwitch('login'); // Navigate back to the login page
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setError('');
            setIsRegistrationSuccessful(true); // Set registration success
            showMessage();
            console.log('Registration successful');
            // Continue with the registration process
        }
    };



    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
                {error.name && <p className="error-message">{error.name}</p>}

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                {error.email && <p className="error-message">{error.email}</p>}

                <label htmlFor="password">Password (6 or more characters)</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                {error.password && <p className="error-message">{error.password}</p>}

                <label htmlFor="confirm-password">Confirm Password</label>
                <input value={confPass} onChange={(e) => setConfPass(e.target.value)} type="password" placeholder="Confirm Password" id="confirm-password" name="confirm-password" />
                {error.confirmPassword && <p className="error-message">{error.confirmPassword}</p>}

                <button type="submit">Sign Up</button>

            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}
