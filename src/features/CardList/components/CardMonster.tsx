import React from "react";
import { Cards } from "../../../store";
import Field from "./Field";
import { Card, Col, Collapse, CollapseProps, Row, Typography } from "antd";
import { StarOutlined } from "@ant-design/icons";

type Props = {
  card: Cards;
  left?: string;
  right?: string;
};

const CardMonster = ({ card, left, right }: Props) => {
  const Level = (
    <>
      {card.level} <StarOutlined />
    </>
  );

  let Type = card.type;
  let EffectDescription = null;

  if (card.effect) {
    Type = `${card.type} | Effect`;
    const items: CollapseProps["items"] = [
      {
        key: "1",
        label: "Effect",
        children: card.effect,
      },
    ];
    EffectDescription = (
      <Col span={24} className="effect">
        <Collapse items={items} />
      </Col>
    );
  }
  let FusionMaterial = null;
  if (left && right) {
    FusionMaterial = (
      <Col span={24}>
        <Typography.Text type="success">
          {left} + {right}
        </Typography.Text>
      </Col>
    );
  }

  const Description = (
    <Row>
      {FusionMaterial}
      <Field label="Attribute" value={card.attribute} />
      <Field label="Level" value={Level} />
      <Field label="Type" value={Type} />
      <Field label="Atk / Def" value={`${card.attack} / ${card.defense}`} />
      <Field label="DC" value={card.deckcost} />
      {EffectDescription}
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
      className="card-list-card-monster"
      cover={
        <img
          alt={card.name}
          src={`${process.env.PUBLIC_URL}${card.imageUrl}`}
        />
      }
    >
      <Card.Meta title={Title} description={Description} />
    </Card>
  );
};

export default CardMonster;
