import { v4 as uuidv4 } from "uuid";
import { Card } from "react-bootstrap";

export const prepareSmallCard = (category, idx) => {
  return (
    <div id={uuidv4()} key={idx + 1}>
      <a className="a hand-cursor" href="/login">
        <Card.Img className="sm-card-image" src={category.img} />
        <h3 className="swiper-item-categ">{category.imgCateg}</h3>
      </a>
    </div>
  );
};
