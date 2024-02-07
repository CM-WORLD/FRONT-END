import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ApiClient } from "../../libs/ApiClient";
import "./style.scss";

interface BannerItem {
  id: number;
  imgUrl: string;
  hrefUrl: string;
  comment: string;
  delYn: string;
  startDate: string;
  endDate: string;
}

const SlideShow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiClient.getInstance().get(
      "/bnr/list",
      {},
      (data) => {
        if (data) setData(data.data);
      },
      (data) => {}
    );
  }, []);

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

  const imgList = data.map((item: BannerItem, idx) => {
    return (
      <a key={`banner-${idx}`} href={`${item.hrefUrl}`} className="relative h-56 overflow-hidden rounded-lg md:h-96 border border-gray-300">
        <img src={item.imgUrl} alt="banner_img" />
      </a>
    );
  });

  return (
    <div className="slide-gallery">
      <Slider {...settings}>{imgList}</Slider>
    </div>
  );
};

export default SlideShow;
