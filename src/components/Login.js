import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import {HOST} from './constants'
const LOGIN_URL =  HOST + 'api/auth/login';

const Login = () => {

  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [username, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
          JSON.stringify({ username: username, password: password }),
          {
            headers: { 'Content-Type': 'application/json' },
          }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.token;
      console.log(accessToken);
      const roles = response?.data?.roles;
      localStorage.setItem('token', accessToken);
      localStorage.setItem('roles', roles);
      navigate('/userpage');


    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  }

  return (
      <body className="login-body">
      <section className="login-section">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1 className="login-signIn">Sign In</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              className="login-input"
          />

          <label htmlFor="password">Password:</label>
          <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="login-input"

          />
          <button className="login-button">Sign In</button>

        </form>
        <p className="login-register-button">
          Need an Account?<br />
          <span className="line">
                    <Link className="login-signUp" to="/register">Sign Up</Link>
                </span>
        </p>
      </section>
      </body>
  )
}

export default Login