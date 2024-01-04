import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HOST_URL } from "../../../../apis/Request";
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
  useEffect(()=> {
      axios.get(HOST_URL + "/bnr/list").then(resp => {
        if(resp.data) {
          setData(resp.data);
        }
      })
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

  const imgList = data.map((item: BannerItem, idx)=> {
    return <a key={`banner-${idx}`} href={`${item.hrefUrl}`}>
      <img src={item.imgUrl} alt="banner_img" />
    </a>
  })

  return (
    <div className="slide-gallery">
      <Slider {...settings}>
      {imgList}
      </Slider>
    </div>
  );
};

export default SlideShow;