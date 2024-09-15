import React from "react";
import { Decks } from "../../../store";
import { Card, Row, Typography } from "antd";
import Field from "../../CardList/components/Field";
import { EditOutlined } from "@ant-design/icons";

type Props = {
  deck: Decks;
  onEdit: () => void;
};

const DeckCard = ({ deck, onEdit }: Props) => {
  const Description = (
    <Row>
      <Field label="Cards" value={deck.cards.length} />
      <Field
        label="DC"
        value={deck.cards.reduce<number>((previous, current) => {
          previous += +current.deckcost;
          return previous;
        }, 0)}
      />
    </Row>
  );

  const Title = (
    <Typography.Title
      ellipsis={{ tooltip: deck.name }}
      level={5}
      style={{ textTransform: "capitalize" }}
    >
      {deck.name}
    </Typography.Title>
  );

  return (
    <Card
      className="card-list-card-monster"
      cover={
        <img
          alt={deck.leader.name}
          src={`${process.env.PUBLIC_URL}${deck.leader.imageUrl}`}
        />
      }
      actions={[<EditOutlined onClick={onEdit} />]}
    >
      <Card.Meta title={Title} description={Description} />
    </Card>
  );
};

export default DeckCard;
