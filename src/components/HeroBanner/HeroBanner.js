import Button from "../Form/Button";
import "./hero-banner.css";

export default function HeroBanner ({
  title,
  subTitle,
  text,
  CTAText,
  onClick,
  imgSrc
}) {
  return (
    <section className="hero-banner" aria-labelledby="hero-title">
      <div className="container">
        <div className="row row--middle">
          <div className="col col-6 col-sm-12">
            { title && <h1 className="hero-banner__title" id="hero-title">{title}</h1> }
            { subTitle && <p className="hero-banner__subtitle">{subTitle}</p> }
            { text && <p className="hero-banner__text" id="hero-text">{text}</p> }
            { (CTAText && onClick) && (
              <div className="hero-banner__actions">
                <Button onClick={onClick}>{CTAText}</Button>
              </div>
            ) }
          </div>
          <div className="col col-6 col-sm-12 hidden-sm">
            { imgSrc && (
              <picture className="hero-banner__picture">
                <img src={imgSrc} aria-describedby="hero-title hero-text" />
              </picture>
            ) }
          </div>
        </div>
      </div>
    </section>
  );
}