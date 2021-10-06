import { Card, Row, Col, Container } from "react-bootstrap";

export const CardRow = (props) => {
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
            <Col>
              <Card
                className="card"
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
                  Upto 70% off | Electronics clearance store
                </Card.Header>
                <a className="a hand-cursor" href="/login">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg"
                  />
                </a>
                <Card.Link href="/login" className="card-link">
                  See more
                </Card.Link>
              </Card>

              <Card
                className="card"
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
                  Up to 60% off | Top deals on stationery supplies
                </Card.Header>
                <a className="a hand-cursor" href="/login">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OP/BTS/D14264916_IN_Printers_OP_GW_revamp_nov19_dashbord_Card_2X_4._SY608_CB667376048_.jpg"
                  />
                </a>
                <Card.Link href="/login" className="card-link">
                  See more
                </Card.Link>
              </Card>
            </Col>

            <Col>
              <Card
                className="card"
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
                  Automotive essentials | Up to 60% off
                </Card.Header>
                <a className="a hand-cursor" href="/login">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare2x._SY232_CB410830552_.jpg"
                  />
                </a>
                <Card.Link href="/login" className="card-link">
                  See more
                </Card.Link>
              </Card>

              <Card
                className="card"
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
                  Pay your credit card bills on Amazon
                </Card.Header>
                <a className="a hand-cursor" href="/login">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_758X608_CCBP._SY608_CB413372299_.jpg"
                  />
                </a>
                <Card.Link href="/login" className="card-link">
                  Pay now
                </Card.Link>
              </Card>
            </Col>

            <Col>
              <Card
                className="card"
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
                  Styles for Men | Up to 70% off
                </Card.Header>
                <a className="a hand-cursor" href="/login">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/372/2-min._SY232_CB666463578_.jpg"
                  />
                </a>
                <Card.Link href="/login" className="card-link">
                  End of Season Sale
                </Card.Link>
              </Card>

              <Card
                className="card"
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
                  Styles of the season | Launching Autumn Winter'21
                </Card.Header>
                <a className="a hand-cursor" href="/login">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/AW-21/Womens_QC/Rev/Rev_2/women-pc_01._SY232_CB644857358_.jpg"
                  />
                </a>
                <Card.Link href="/login" className="card-link">
                  View All
                </Card.Link>
              </Card>
            </Col>

            <Col>
              <Card
                className="card"
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
                  Styles for Women | Up to 70% off
                </Card.Header>
                <a className="a hand-cursor" href="/login">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/372/6-min._SY232_CB666463578_.jpg"
                  />
                </a>
                <Card.Link href="/login" className="card-link">
                  End of Season Sale
                </Card.Link>
              </Card>
              <Card
                className="card"
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
                  Revamp your home in style
                </Card.Header>
                <a className="a hand-cursor" href="/login">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_High._SY232_CB670263840_.jpg"
                  />
                </a>
                <Card.Link href="/login" className="card-link">
                  View All
                </Card.Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
