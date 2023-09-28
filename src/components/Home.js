import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/linkpage');
    }

    return (
        <section>
            <h1>{t("Home.title")}</h1>
            <br />
            <p>{t("Home.logged-in")}</p>
            <br />
            <Link to="/editor">{t("Home.link-1")}</Link>
            <br />
            <Link to="/admin">{t("Home.link-2")}</Link>
            <br />
            <Link to="/lounge">{t("Home.link-3")}</Link>
            <br />
            <Link to="/linkpage">{t("Home.link-4")}</Link>
            <div className="flexGrow">
                <button onClick={logout}>{t("Home.sing-out")}</button>
            </div>
        </section>
    )
}

export default Home