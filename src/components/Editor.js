import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Editor = () => {
    const { t, i18n } = useTranslation();
    return (
        <section>
            <h1>{t("Editor.title")}</h1>
            <br />
            <p>{t("Editor.description")}</p>
            <div className="flexGrow">
                <Link to="/">{t("Editor.home-button")}</Link>
            </div>
        </section>
    )
}

export default Editor