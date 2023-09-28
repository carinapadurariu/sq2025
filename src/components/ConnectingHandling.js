import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { HOST } from "./constants";
import { useTranslation } from 'react-i18next';

const ConnectingHandling = () => {
    const DISCONNECT_URL = HOST + 'api/auth/signout';
    const [isConnected, setIsConnected] = useState(false);
    const navigate = useNavigate();
    const roles = localStorage.getItem('roles');
    const { t, i18n } = useTranslation();

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
            <span>{t("ConnectingHandling.disconnect")}</span>
        </button>
    ) : (
        <button className="vvd" onClick={handleConnect}>
            <span>{t("ConnectingHandling.connect")}</span>
        </button>
    );
};

export default ConnectingHandling;
