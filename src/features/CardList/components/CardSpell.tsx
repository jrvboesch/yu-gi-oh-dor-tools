import React from "react";
import { Cards } from "../../../store";
import Field from "./Field";
import { Card, Col, Collapse, CollapseProps, Row, Typography } from "antd";
import CardImage from "../../common/CardImage";

type Props = {
  card: Cards;
};

const CardSpell = ({ card }: Props) => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Effect",
      children: card.effect,
    },
  ];
  const Description = (
    <Row>
      <Field label="DC" value={card.deckcost} />
      <Col span={24} className="effect">
        <Collapse items={items} />
      </Col>
    </Row>
  );

  const Title = (
    <Typography.Title
      ellipsis={{ tooltip: `${card.id} - ${card.name}` }}
      level={5}
    >
      {card.id} - {card.name}
    </Typography.Title>
  );
  return (
    <Card
      className="card-list-card-spell"
      cover={<CardImage alt={card.name} src={card.imageUrl} />}
    >
      <Card.Meta title={Title} description={Description} />
    </Card>
  );
};

export default CardSpell;
