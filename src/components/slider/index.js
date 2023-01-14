import Slider from "react-slick";

import "./styles.scss";

const ReportsSlider = ({ images = [] }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    accessibility: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {images.map((i) => {
          return (
            <div className="slider-div">
              <img className="slider-img" src={i.src} alt={i.caption}></img>
              {i.showCaption ? (
                <h3 className="slider-caption">{i.caption}</h3>
              ) : null}
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default ReportsSlider;
