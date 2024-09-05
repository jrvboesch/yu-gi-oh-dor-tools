import React from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import { Cards } from "../../../store/interfaces/cards.interface";
import Field from "./Field";

type Props = {
  card: Cards;
};

const CardSpell = ({ card }: Props) => {
  return (
    <Card style={{ width: "24rem" }} className="mx-auto">
      <Card.Img
        variant="top"
        src={`${process.env.PUBLIC_URL}${card.imageUrl}`}
      />
      <Card.Body>
        <Card.Title>
          {card.id} - {card.name}
        </Card.Title>
        <Container fluid>
          <Row xs={2} md={2} lg={2}>
            <Field label="DC" value={card.deckcost} />
          </Row>
          <Row className="py-2">
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Effect</Accordion.Header>
                  <Accordion.Body>{card.effect}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default CardSpell;
