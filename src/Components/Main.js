import { BackToTopNav } from "./BackToTopNav";
import { CardInCardRow } from "./CardInCardRow";
import { CardRow } from "./CardRow";
import { Footer } from "./Footer";
import { ImageSlider } from "./ImageSlider";
import { ImageSwiper } from "./ImageSwiper";
import { ImageSwiperWithPrice } from "./ImageSwiperWithPrice";
import { NavBelt } from "./NavBelt";

export const Main = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#EAEDED",
        fontFamily: "Amazon Ember,Arial,sans-serif",
      }}
    >
      <NavBelt />
      <ImageSlider />
      <CardRow />
      <ImageSwiperWithPrice filename="carItems" />
      <ImageSwiper
        filename="furniture"
        heading="Up to 80% off | Bestselling home furniture"
      />
      <ImageSwiper
        filename="karigar"
        heading="Handmade festive decor | Amazon Karigar"
      />
      <CardInCardRow filename="categories" />
      <BackToTopNav />
      <Footer />
    </div>
  );
};
