import React, { useState } from "react";
import DeckCard from "./components/DeckCard";
import { Decks, useAppSelector } from "../../store";
import { Button, Col, Row, Space, Typography } from "antd";
import DeckBuilderModal from "./components/DeckBuilderModal";
import { PlusOutlined } from "@ant-design/icons";

type BuildDeckModal = {
  open: boolean;
  deck?: Decks;
};
const DeckBuilder = () => {
  const decks = useAppSelector((state) => state.decks.list);
  const [openModal, setOpenModal] = useState<BuildDeckModal>({
    open: false,
    deck: undefined,
  });
  const onOpenModal = (open: boolean, deck?: Decks) => {
    setOpenModal({ open, deck });
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={24} style={{ textAlign: "center" }}>
        <Space align="center" direction="vertical">
          <Typography.Title>Build your deck</Typography.Title>
          <Button
            block
            onClick={() => onOpenModal(true)}
            icon={<PlusOutlined />}
          >
            New Deck
          </Button>
        </Space>
      </Col>
      {decks.map((deck) => (
        <Col xl={4} md={8} sm={12} xs={24} key={deck.name}>
          <DeckCard deck={deck} onEdit={() => onOpenModal(true, deck)} />
        </Col>
      ))}
      <DeckBuilderModal {...openModal} onClose={() => onOpenModal(false)} />
    </Row>
  );
};

export default DeckBuilder;
