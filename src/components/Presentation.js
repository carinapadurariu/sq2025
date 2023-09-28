
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/meter5.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import { useTranslation } from 'react-i18next';


export const Presentation = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const { t, i18n } = useTranslation();

  return (
    <section className="presentation" id="presentation">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>{t("Presentation.title")}</h2>
                        <p>{t("Presentation.description-1")}<br></br>{t("Presentation.description-2")}</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>{t("Presentation.image-1")}</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>{t("Presentation.image-2")}</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>{t("Presentation.image-3")}</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>{t("Presentation.image-4")}</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}