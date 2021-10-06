import SimpleImageSlider from "react-simple-image-slider";
import sliderImages from "../Json/mainSlider.json";

export const ImageSlider = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
        }}
      >
        <SimpleImageSlider
          width={"91.4%"}
          height={300}
          images={sliderImages}
          showNavs={true}
          slideDuration={0.5}
          style={{
            margin: "0px 72px",
            border: "none",
          }}
        />
      </div>
    </div>
  );
};
