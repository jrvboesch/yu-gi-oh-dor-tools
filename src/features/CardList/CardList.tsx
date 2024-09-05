import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../../store/store";
import CardMonster from "./components/CardMonster";
import CardSpell from "./components/CardSpell";

const CardList = () => {
  const cards = useAppSelector((state) => state.cards.list);

  const Cards = cards.map((card) => {
    let Card = null;
    switch (card.cardtype) {
      case "Monster":
        Card = <CardMonster card={card} />;
        break;
      case "Spell":
      case "Trap":
      case "Ritual":
        Card = <CardSpell card={card} />;
        break;
      default:
        console.error({ card });
    }
    return <Col key={card.id}>{Card}</Col>;
  });
  return (
    <Container fluid>
      <Row className="gy-5">{Cards}</Row>
    </Container>
  );
};

export default CardList;
