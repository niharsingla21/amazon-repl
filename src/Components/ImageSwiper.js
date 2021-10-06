import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Scrollbar } from "swiper";
import "swiper/swiper.min.css";
import furItems from "../Json/furniture.json";
import elecItems from "../Json/electronics.json";
import kariItems from "../Json/karigar.json";
import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/components/navigation/navigation.min.css";
import { v4 as uuidv4 } from "uuid";

const prepareSlide = (item, idx) => {
  return (
    <SwiperSlide className="hand-cursor" key={idx + 1} id={uuidv4()}>
      <img className="swiper-img-wo" src={item.img} alt={`${idx + 1} slide`} />
    </SwiperSlide>
  );
};

export const ImageSwiper = (props) => {
  const itemsName = props.filename;
  let slides = [];
  if (itemsName === "furniture") {
    slides = furItems.map((item, idx) => {
      return prepareSlide(item, idx);
    });
  } else if (itemsName === "electronics") {
    slides = elecItems.map((item, idx) => {
      return prepareSlide(item, idx);
    });
  } else if (itemsName === "karigar") {
    slides = kariItems.map((item, idx) => {
      return prepareSlide(item, idx);
    });
  }
  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <div className="swiper-wrpper">
        <h2 className="car-head">{props.heading}</h2>
        <Swiper
          id={uuidv4()}
          className="swiper"
          spaceBetween={0}
          longSwipes={false}
          slidesPerView={7}
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
};
