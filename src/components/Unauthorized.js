import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    const { t, i18n } = useTranslation();

    return (
        <section>
            <h1>{t("Unauthorized.title")}</h1>
            <br />
            <p>{t("Unauthorized.description")}</p>
            <div className="flexGrow">
                <button onClick={goBack}>{t("Unauthorized.home-button")}</button>
            </div>
        </section>
    )
}

export default Unauthorized