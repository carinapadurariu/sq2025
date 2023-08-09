import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [confPass, setConfPass] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (pass === confPass) {
            setError(''); // Curăță mesajul de eroare dacă parolele sunt corecte
            console.log('Registration successful');
            // Continuă cu procesul de înregistrare
        } else {
            setError('Passwords do not match');
        }
    };
    

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input value={confPass} onChange={(e) => setConfPass(e.target.value)} type="password" placeholder="********" id="confirm-password" name="confirm-password" />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}