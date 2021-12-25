import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import User from './User';
import authService from '../services/authService';
import { Button, Card, Form } from 'react-bootstrap';

async function loginUser(user: User) {
  console.log('inside login')
  return authService.login(user);
}

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    var user = {
      user: username,
      password: password
    };
   
    let result = await fetch("http://localhost:8090/api/Auth", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    const data = await result.json();
    let key=data.token;
    localStorage.setItem("access_token",key);
    window.location.href='http://localhost:3000/employee';
    
  }
  function validateForm() {
    return username.length > 0 && password.length > 0;
  }
  return (
    <div className="Login">
      <Card style={{ width: '25rem' }} className="text-center card">
      <Card.Header>Sign In</Card.Header>
      <Form onSubmit={handleSubmit}>
        <Form.Group  controlId="username">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button  size="lg" className='mt-3' type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      </Card>
    </div>
  )
}


