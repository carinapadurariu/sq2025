import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { HOST } from "./constants";

const ConnectingHandling = () => {
    const DISCONNECT_URL = HOST + 'api/auth/signout';
    const [isConnected, setIsConnected] = useState(false);
    const navigate = useNavigate();
    const roles = localStorage.getItem('roles');

    useEffect(() => {
        if (roles != null) {
            setIsConnected(true);
        } else {
            setIsConnected(false);
        }
    }, [roles]);

    const handleConnect = () => {
        // Navigate to the login page
        setIsConnected(true);
        console.log(isConnected);
        navigate('/login');
        console.log('connected');
    }

    const handleDisconnect = () => {
        // Delete the token from local storage
        setIsConnected(false);
        console.log(isConnected);
        console.log('disconnected');
        localStorage.removeItem('token');
        navigate('/');
      };

    return isConnected ? (
        <button className="vvd" onClick={handleDisconnect}>
            <span>Let's Disconnect</span>
        </button>
    ) : (
        <button className="vvd" onClick={handleConnect}>
            <span>Let's Connect</span>
        </button>
    );
};

export default ConnectingHandling;
