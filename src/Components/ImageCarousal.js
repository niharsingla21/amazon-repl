import { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import items from "../../src/car-items.json";

export const ImageCarousal = (props) => {
  const [index, setIndex] = useState(1);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem key={item.id}>
        <img
          style={{
            width: "270px",
            height: "300px",
            marginBottom: "50px",
          }}
          src={item.img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3
            style={{
              color: "black",
              fontSize: "18px",
            }}
          >
            {item.price}
          </h3>
        </Carousel.Caption>
        <div>{item.id}</div>
      </CarouselItem>
    );
  });

  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        // width: "1800px",
      }}
    >
      <div
        style={{
          overflowX: "scroll",
          backgroundColor: "white",
          color: "black",
          width: "1532px",
          marginLeft: "72px",
        }}
      >
        <Carousel
          keyboard={true}
          bg="dark"
          activeIndex={index}
          onSelect={handleSelect}
          indicatorLabels={false}
          indicators={false}
        >
          <h2 className="car-head">Today's deals</h2>
          {slides}
        </Carousel>
      </div>
    </div>
  );
};
