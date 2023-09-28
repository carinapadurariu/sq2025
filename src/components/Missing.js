import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const Missing = () => {
    const { t, i18n } = useTranslation();
    return (
        <article style={{ padding: "100px" }}>
            <h1>{t("Missing.title")}</h1>
            <p>{t("Missing.description")}</p>
            <div className="flexGrow">
                <Link to="/">{t("Missing.home-button")}</Link>
            </div>
        </article>
    )
}

export default Missing