import React from "react";
import { Cards } from "../../../store";
import Field from "./Field";
import {
  Card,
  Col,
  Collapse,
  CollapseProps,
  Flex,
  Row,
  Space,
  Typography,
} from "antd";
import { MergeCellsOutlined, StarOutlined } from "@ant-design/icons";
import CardImage from "../../common/CardImage";

type Props = {
  card: Cards;
  left?: Cards;
  right?: Cards;
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
      <Col span={24} style={{ textAlign: "center", padding: "10px 0" }}>
        <Flex gap="middle" align="center" justify="space-evenly">
          <Space direction="vertical">
            <CardImage width={80} src={left.imageUrl} alt={left.name} />
            <Typography.Text type="success">{left.name}</Typography.Text>
          </Space>
          <Typography.Title type="success">
            <MergeCellsOutlined />
          </Typography.Title>
          <Space direction="vertical">
            <CardImage width={80} src={right.imageUrl} alt={right.name} />
            <Typography.Text type="success">{right.name}</Typography.Text>
          </Space>
        </Flex>
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
      cover={<CardImage alt={card.name} src={card.imageUrl} />}
    >
      <Card.Meta title={Title} description={Description} />
    </Card>
  );
};

export default CardMonster;
