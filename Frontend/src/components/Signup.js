import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
  // form inputs
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const userNameRef = useRef();
  // const [profilePicFile, setProfilePicFile] = useState();

  //state handlers
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // const navigate = useNavigate();
  const { signup } = useAuth();
  const auth = getAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    // Validators
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    if (passwordRef.current.value.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    try {
      setError('');
      setLoading(true);

      const userCredential = await signup(emailRef.current.value, passwordRef.current.value);
      const user = userCredential.user;

      const profilePicRef = ref(storage, `profilePics/${user.uid}`);
      // await uploadBytes(profilePicRef, profilePicFile);
      // const profilePicURL = await getDownloadURL(profilePicRef);

      // let userName = `${userNameRef.current.value}`;
      let currentEmail = `${emailRef.current.value}`;
      await updateProfile(user, {
        displayName: currentEmail,
        // photoURL: profilePicURL
      });
      await user.reload();
      // navigate('/');
    } catch (error) {
      setError('Failed to create an account');
    }

    setLoading(false);
  }

  return (
    <div
      className="d-flex"
      style={{
        minHeight: '100vh'
      }}>
      <Card
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '20vh', margin: 'auto', maxWidth: '400px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            
            <Button disabled={loading} className="w-100 mt-4 mb-4" type="submit" onClick={handleSubmit}>
              Sign Up
            </Button>
            
          </Form>
        </Card.Body>
        <div className=" text-center d-flex" style={{ marginBottom: '-32px' }}>
          Already have an account? Log In
        </div>
      </Card>
    </div>
  );
}
