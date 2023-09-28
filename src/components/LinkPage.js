import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const LinkPage = () => {
    const { t, i18n } = useTranslation();
    return (
        <section>
            <h1>{t("LinkPage.title")}</h1>
            <br />
            <h2>{t("LinkPage.public-links")}</h2>
            <Link to="/login">{t("LinkPage.public-links-1")}</Link>
            <Link to="/register">{t("LinkPage.public-links-2")}</Link>
            <br />
            <h2>{t("LinkPage.private-links")}</h2>
            <Link to="/">{t("LinkPage.private-links-1")}</Link>
            <Link to="/editor">{t("LinkPage.private-links-2")}</Link>
            <Link to="/admin">{t("LinkPage.private-links-3")}</Link>
        </section>
    )
}

export default LinkPage