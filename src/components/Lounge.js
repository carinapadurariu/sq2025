import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const Lounge = () => {
    const { t, i18n } = useTranslation();
    return (
        <section>
            <h1>{t("Lounge.title")}</h1>
            <br />
            <p>{t("Lounge.description")}</p>
            <div className="flexGrow">
                <Link to="/">{t("Lounge.home-button")}</Link>
            </div>
        </section>
    )
}

export default Lounge