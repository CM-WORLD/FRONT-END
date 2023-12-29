import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.scss";

const SlideShow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="slide-gallery">
      <Slider {...settings}>
        <img src={`${process.env.PUBLIC_URL}/bnr_test.jpg`} />
        <img src={`${process.env.PUBLIC_URL}/bnr_test.jpg`} />
        <img src={`${process.env.PUBLIC_URL}/bnr_test.jpg`} />
      </Slider>
    </div>
  );
};

export default SlideShow;
