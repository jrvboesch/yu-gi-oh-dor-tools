import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { useAppSelector } from "../../store/store";
import CardMonster from "../CardList/components/CardMonster";
import { Fusions } from "../../store/interfaces/cards.interface";

const HandFusionTool = () => {
  const cards = useAppSelector((state) => state.cards.list);
  const fusions = useAppSelector((state) => state.fusions.list);

  const [fusionDeck, setFusionDeck] = useState<Fusions[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    const data: string[] = [];
    const formData = form.querySelectorAll("select");
    for (const field of formData) {
      data.push(field.value);
    }
    setFusionDeck(
      fusions.filter(
        ({ left, right }) => data.includes(left) && data.includes(right)
      )
    );
  };

  const Options = cards
    .filter(({ cardtype }) => cardtype === "Monster")
    .map(({ id, name }) => (
      <option key={id} value={id}>
        {id} - {name}
      </option>
    ));

  const FusionMaterials = fusionDeck.map((fusion) => {
    const card = cards.find(({ id }) => fusion.output === id);
    const left = cards.find(({ id }) => fusion.left === id);
    const right = cards.find(({ id }) => fusion.right === id);
    if (!card || !left || !right) {
      return null;
    }
    return (
      <Col key={card.id}>
        <CardMonster
          card={card}
          left={`${left.id} - ${left.name}`}
          right={`${right.id} - ${right.name}`}
        />
      </Col>
    );
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Container fluid className="gy-5">
        <Row className="gy-5">
          <Col>
            <FloatingLabel controlId="card1" label="Pick a Tribute Monster.">
              <Form.Select>
                <option>No - Monster</option>
                {Options}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="card2" label="Pick a Tribute Monster.">
              <Form.Select>
                <option>No - Monster</option>
                {Options}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="card3" label="Pick a Tribute Monster.">
              <Form.Select>
                <option>No - Monster</option>
                {Options}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="card4" label="Pick a Tribute Monster.">
              <Form.Select>
                <option>No - Monster</option>
                {Options}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="card5" label="Pick a Tribute Monster.">
              <Form.Select>
                <option>No - Monster</option>
                {Options}
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col className="gy-5 text-center">
            <Button type="submit">Show Fusions</Button>
          </Col>
        </Row>
        <Row className="gy-5">{FusionMaterials}</Row>
      </Container>
    </Form>
  );
};

export default HandFusionTool;
