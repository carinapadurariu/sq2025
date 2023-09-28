import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import {HOST} from './constants'
import {useTranslation} from "react-i18next";
const LOGIN_URL =  HOST + 'api/auth/login';

const Login = () => {

  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const { t, i18n } = useTranslation();


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

      // Convert the roles array to a JSON string.
      const rolesJson = JSON.stringify(roles);
      console.log("aiciea ne uitam");
      console.log(rolesJson);
      // Save the roles JSON string to localStorage.
      localStorage.setItem('roles', rolesJson);

      localStorage.setItem('token', accessToken);
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
        <h1 className="login-signIn">{t("Login.title")}</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">{t("Login.username")}:</label>
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

          <label htmlFor="password">{t("Login.password")}:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="login-input"

          />
          <button className="login-button">{t("Login.sign-in")}</button>

        </form>
        <p className="login-register-button">
          {t("Login.register-button")}<br />
          <span className="line">
                    <Link className="login-signUp" to="/register">{t("Login.sign-up")}</Link>
                </span>
        </p>
      </section>
    </body>
  )
}

export default Login

