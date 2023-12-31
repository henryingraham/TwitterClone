import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const navigate = useNavigate();

  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // Try to create an account
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      // navigate('/Home');
      console.log('success');
    } catch (error) {
      setError('Failed to log in');
      console.log('error');
    }

    setLoading(false);
  }


  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh'
      }}>
      <Card
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '20vh', margin: 'auto', maxWidth: '400px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-4" type="submit" onClick={handleSubmit}>
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            Forgot Password?
          </div>
        </Card.Body>
        <div className="text-center d-flex" style={{ marginBottom: '-32px' }}>
          Need an account? Sign Up
        </div>
      </Card>
    </div>
  );
}
