import React, { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      setStatus('sending');
      try {
        const response = await axios.post('http://localhost:8080/notifications/email', { email });

        if (response.status === 200) {
          setStatus('success');
          setMessage('Email saved successfully'); // Adjust based on actual backend response
        } else {
          setStatus('error');
          setMessage('Something went wrong! Please try again later.');
        }

      } catch (error) {
        setStatus('error');
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setMessage(error.response.data.message); // Assuming error response has a message property
        } else if (error.request) {
          // The request was made but no response was received
          setMessage('No response received from server. Please try again later.');
        } else {
          // Something happened in setting up the request that triggered an Error
          setMessage('Error in sending request. Please try again later.');
        }
      }
    } else {
      setStatus('error');
      setMessage('Please enter a valid email address.');
    }
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>{t("Newsletter.description-1")}<br></br>{t("Newsletter.description-2")}</h3>
            {status === 'sending' && <Alert variant="info">{t("Newsletter.sending")}</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit">{t("Newsletter.submit-button")}</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

