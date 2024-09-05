import React from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import { Cards } from "../../../store/interfaces/cards.interface";
import Field from "./Field";

type Props = {
  card: Cards;
  left?: string;
  right?: string;
};

const CardMonster = ({ card, left, right }: Props) => {
  const Level = (
    <>
      {card.level} <i className="bi bi-star-fill"></i>
    </>
  );

  let Type = card.type;
  let EffectDescription = null;

  if (card.effect) {
    Type = `${card.type} | Effect`;
    EffectDescription = (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Effect</Accordion.Header>
          <Accordion.Body>{card.effect}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
  let FusionMaterial = null;
  if (left && right) {
    FusionMaterial = (
      <Card.Subtitle className="mb-2 text-muted">
        {left} + {right}
      </Card.Subtitle>
    );
  }
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
        {FusionMaterial}
        <Container fluid>
          <Row xs={2} md={2} lg={2}>
            <Field label="Attribute" value={card.attribute} />
            <Field label="Level" value={Level} />
            <Field label="Type" value={Type} />
            <Field
              label="Atk / Def"
              value={`${card.attack} / ${card.defense}`}
            />
            <Field label="DC" value={card.deckcost} />
          </Row>
          <Row className="py-2">
            <Col>{EffectDescription}</Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default CardMonster;
