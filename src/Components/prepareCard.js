import { Card } from "react-bootstrap";
import { prepareSmallCard } from "./prepareSmallCard";

export const prepareCard = (category, idx) => {
  let smallCards = [];

  smallCards = category.cards.map((smallCard, idx) => {
    return prepareSmallCard(smallCard, idx);
  });

  const half = Math.ceil(smallCards.length / 2);

  const firstHalf = smallCards.slice(0, half);
  const secondHalf = smallCards.slice(-half);

  return (
    <Card
      className="card-sm"
      style={{
        borderStyle: "none",
      }}
    >
      <Card.Header
        className="card-header"
        style={{
          backgroundColor: "white",
          borderStyle: "none",
        }}
      >
        {category.header}
      </Card.Header>
      <Card.Body>
        <div>
          <div
            style={{
              display: "flex",
            }}
          >
            {firstHalf}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "15px",
            }}
          >
            {secondHalf}
          </div>
        </div>
      </Card.Body>
      <Card.Link href="/login" className="card-link-test">
        {category.cardLinkText}
      </Card.Link>
    </Card>
  );
};
