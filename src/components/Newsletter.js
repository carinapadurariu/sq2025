import React, { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      try {
        const response = await fetch('https://team1-backend-jpdqtnohpq-uc.a.run.app/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            EMAIL: email,
          }),
        });

        if (response.status === 200) {
          // Trimiterea a fost cu succes, poți face ceva cu răspunsul dacă este necesar
          onValidated({ EMAIL: email });
        } else {
          // Trimiterea a eșuat, poți afișa un mesaj de eroare
          console.error('Trimiterea a eșuat');
        }
      } catch (error) {
        console.error('Eroare la trimitere:', error);
      }
    }
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            {status === 'sending' && <Alert variant="info">Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
