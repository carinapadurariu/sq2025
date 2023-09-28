import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";
import {HOST} from './constants'
import {useTranslation} from "react-i18next";

const NAME_REGEX = /^[A-Za-z\s'-]{1,50}$/;
const PHONE_NUMBER_REGEX = /^\d{10}$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const { t, i18n } = useTranslation();


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidFirstName(NAME_REGEX.test(firstName));
    }, [firstName])

    useEffect(() => {
        setValidLastName(NAME_REGEX.test(lastName));
    }, [lastName])

    useEffect(() => {
        setValidName(USER_REGEX.test(username));
    }, [username])

    useEffect(() => {
        setValidPhoneNumber(PHONE_NUMBER_REGEX.test(phoneNumber));
    }, [phoneNumber])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [firstName, lastName, phoneNumber, username, email, password, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);
        const v3 = NAME_REGEX.test(firstName);
        const v4 = NAME_REGEX.test(lastName);
        const v5 = NAME_REGEX.test(email);
        const v6 = PHONE_NUMBER_REGEX.test(phoneNumber);

        if (!v1 || !v2 ) {
            setErrMsg("Invalid Entry");
            return;
        }

        try {
            const response = await axios.post(HOST  + 'api/auth/signup',
                JSON.stringify({firstName:firstName, lastName:lastName,
                    phoneNumber:phoneNumber, email:email, username: username, password: password}),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setEmail('')
            setUsername('');
            setPassword('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section className='register-success'>
                    <h1> <a href="/login">{t("Register.success-message")}</a></h1>
                </section>
            ) : (
                <body className="register-body">
                <section className="register-section">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className="register-h1">{t("Register.title")}</h1>
                    <form className="register-form" onSubmit={handleSubmit}>
                        <table>
                            <tr>
                                <th>
                                    <label htmlFor="firstName">
                                        {t("Register.first-name")}
                                        <FontAwesomeIcon icon={faCheck} className={validFirstName ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validFirstName || !firstName ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        autoComplete="off"
                                        onChange={(e) => setFirstName(e.target.value)}
                                        value={firstName}
                                        required
                                        aria-invalid={validFirstName ? "false" : "true"}
                                        aria-describedby="firstNameNote"
                                        onFocus={() => setFirstNameFocus(true)}
                                        onBlur={() => setFirstNameFocus(false)}
                                        className="register-input"
                                    />

                                    <p id="firstNameNote" className={firstNameFocus && firstName && !validFirstName ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        {t("Register.first-name-error-1")}<br />
                                        {t("Register.first-name-error-2")}<br />
                                        {t("Register.first-name-error-3")}
                                    </p>
                                </th>
                                <th>
                                    <label htmlFor="lastName">
                                        {t("Register.last-name")}
                                        <FontAwesomeIcon icon={faCheck} className={validLastName ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validLastName || !lastName ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        autoComplete="off"
                                        onChange={(e) => setLastName(e.target.value)}
                                        value={lastName}
                                        required
                                        aria-invalid={validLastName ? "false" : "true"}
                                        aria-describedby="lastNameNote"
                                        onFocus={() => setLastNameFocus(true)}
                                        onBlur={() => setLastNameFocus(false)}
                                        className="register-input"

                                    />

                                    <p id="lastNameNote" className={lastNameFocus && lastName && !validLastName ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        {t("Register.last-name-error-1")}<br />
                                        {t("Register.last-name-error-2")}<br />
                                        {t("Register.last-name-error-3")}
                                    </p>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="phoneNumber">
                                        {t("Register.phone-number")}
                                        <FontAwesomeIcon icon={faCheck} className={validPhoneNumber ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validPhoneNumber || !phoneNumber ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        autoComplete="off"
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        value={phoneNumber}
                                        required
                                        aria-invalid={validPhoneNumber ? "false" : "true"}
                                        aria-describedby="firstNameNote"
                                        onFocus={() => setPhoneNumberFocus(true)}
                                        onBlur={() => setPhoneNumberFocus(false)}
                                        className="register-input"

                                    />

                                    <p id="phoneNumberNote" className={phoneNumberFocus && phoneNumber && !validPhoneNumber ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        {t("Register.phone-number-error-1")}<br />
                                    </p>
                                </th>
                                <th>
                                    <label htmlFor="email">
                                        {t("Register.email")}
                                        <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        autoComplete="off"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                        aria-invalid={validEmail ? "false" : "true"}
                                        aria-describedby="emailNote"
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}
                                        className="register-input"

                                    />

                                    <p id="emailNote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        {t("Register.email-error-1")}
                                    </p>
                                </th>
                            </tr>
                            <th>
                                <tr>
                                    <label htmlFor="username">
                                        {t("Register.username")}
                                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validName || !username ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                        required
                                        aria-invalid={validName ? "false" : "true"}
                                        aria-describedby="uidnote"
                                        onFocus={() => setUserFocus(true)}
                                        onBlur={() => setUserFocus(false)}
                                        className="register-input"

                                    />
                                    <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        {t("Register.username-error-1")}<br />
                                        {t("Register.username-error-2")}<br />
                                        {t("Register.username-error-3")}
                                    </p>
                                </tr>

                                <tr>
                                    <label htmlFor="confirm_pwd">
                                        {t("Register.confirm-password")}
                                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        type="password"
                                        id="confirm_pwd"
                                        onChange={(e) => setMatchPwd(e.target.value)}
                                        value={matchPwd}
                                        required
                                        aria-invalid={validMatch ? "false" : "true"}
                                        aria-describedby="confirmnote"
                                        onFocus={() => setMatchFocus(true)}
                                        onBlur={() => setMatchFocus(false)}
                                        className="register-input"

                                    />
                                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        {t("Register.confirm-password-error-1")}
                                    </p>
                                </tr>
                            </th>
                            <label htmlFor="password">
                                <strong>{t("Register.password")}</strong>
                                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hide" : "invalid"} />
                            </label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                                className="register-input"

                            />
                            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                {t("Register.password-error-1")}<br />
                                {t("Register.password-error-2")}<br />
                                {t("Register.password-error-3")} <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>


                            <button className="register-signUp" disabled={!validName || !validPwd || !validMatch ? true : false} onClick={handleSubmit}>{t("Register.register-button")}</button>
                        </table>
                    </form>
                    <p className="register-login-button">
                        {t("Register.login")}<br />
                        <span className="register-line">
                                <Link className="register-button-signIn" to="/login">{t("Register.sign-in")}</Link>
                            </span>
                    </p>
                </section>
                </body>
            )}
        </>
    )
}

export default Register




