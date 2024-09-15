import { Modal } from "antd";
import React from "react";
import { Decks } from "../../../store";
import DeckBuilderForm from "./DeckBuilderForm";

type Props = {
  open: boolean;
  deck?: Decks;
  onClose: () => void;
};

const DeckBuilderModal = ({ open, deck, onClose }: Props) => {
  let title = "Add New Deck";
  if (deck) {
    title = `Edit ${deck.name}`;
  }
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <DeckBuilderForm onClose={onClose} deck={deck} />
    </Modal>
  );
};

export default DeckBuilderModal;
