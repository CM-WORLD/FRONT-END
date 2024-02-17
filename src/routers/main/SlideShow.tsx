import { useEffect, useState } from "react";
import { ApiClient } from "../../libs/ApiClient";
import { AssetsRoot } from "../../libs/Const";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    dots: true,
  };

  // TODO:: 테스트 종료 후 제거해야함.
  const bannerData = [
    {
      id: 1,
      url: `${AssetsRoot}/images/banner_1.png`,
    },
    {
      id: 1,
      url: `${AssetsRoot}/images/banner_1.png`,
    },
    {
      id: 1,
      url: `${AssetsRoot}/images/banner_1.png`,
    },
    {
      id: 1,
      url: `${AssetsRoot}/images/banner_1.png`,
    },
    {
      id: 1,
      url: `${AssetsRoot}/images/banner_1.png`,
    },
  ]

  useEffect(() => {
    ApiClient.getInstance().get(
      "/bnr/list",
      {},
      (data) => {
        console.log(data.data);
        if (data) setData(data.data);
      },
      (data) => { }
    );
  }, []);

  const bannerList = () => {
    return bannerData.map((item, idx) => {
      return <a key={`banner-item-${item.id}-${idx}`} className="relative overflow-hidden">
        <img className="w-auto h-full" src={`${AssetsRoot}/images/banner_1.png`} alt="banner_img" />
      </a>
    });
  };

  return (
    <div className="slider-container py-8">
      <Slider {...settings}>
        {bannerList()}
      </Slider>
    </div>
  );
};

export default SlideShow;
