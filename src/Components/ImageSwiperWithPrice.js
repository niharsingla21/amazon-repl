import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Scrollbar } from "swiper";
import "swiper/swiper.min.css";
import carItems from "../Json/carItems.json";
import carItems2 from "../Json/carItems2.json";
import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/components/navigation/navigation.min.css";
import { v4 as uuidv4 } from "uuid";

const prepareSlide = (item, idx) => {
  return (
    <SwiperSlide className="hand-cursor" key={idx + 1} id={uuidv4()}>
      <img className="swiper-img" src={item.img} alt={`${idx + 1} slide`} />
      <h3 className="swiper-item-price">{item.price}</h3>
    </SwiperSlide>
  );
};

export const ImageSwiperWithPrice = (props) => {
  const itemsName = props.filename;
  let slides = [];
  if (itemsName === "carItems") {
    slides = carItems.map((item, idx) => {
      return prepareSlide(item, idx);
    });
  } else if (itemsName === "carItems2") {
    slides = carItems2.map((item) => {
      return prepareSlide(item);
    });
  }
  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <div className="swiper-wrpper">
        <h2 className="car-head">Today's deals</h2>
        <Swiper
          id={uuidv4()}
          className="swiper"
          spaceBetween={5}
          longSwipes={false}
          slidesPerView={5}
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
};
