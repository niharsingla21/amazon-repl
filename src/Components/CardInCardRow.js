import { Row, Col, Container } from "react-bootstrap";
import categories from "../Json/cardInCardCategs.json";
import { v4 as uuidv4 } from "uuid";
import { prepareCard } from "./prepareCard";

export const CardInCardRow = (props) => {
  const fileName = props.filename;
  let cards = [];
  if (fileName === "categories") {
    cards = categories.map((category, idx) => {
      return prepareCard(category, idx);
    });
  }

  return (
    <div>
      <div>
        <Container fluid>
          <Row
            xs={3}
            md={4}
            className="g-3 card-row"
            style={{
              marginLeft: "50px",
              marginRight: "50px",
            }}
          >
            {cards.map((card) => {
              return <Col key={uuidv4()}>{card}</Col>;
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};
