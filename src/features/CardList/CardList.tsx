import React, { useRef } from "react";
import { useAppSelector } from "../../store";
import CardMonster from "./components/CardMonster";
import CardSpell from "./components/CardSpell";
import { AutoComplete, Col, Input, Row } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { Cards } from "../../store";
import InfinitScroll, { InfinitScrollRef } from "../common/InfinitScroll";
import useDebounce from "../../hooks/useDebounce";

const MAX_CARDS_TO_LOAD = 100;

const CardList = () => {
  const infinitScrollRef = useRef<InfinitScrollRef<Cards>>(null);

  const cards = useAppSelector((state) => state.cards.list);

  const onScroll = (count: number): Cards[] => {
    const list = cards.slice(count, count + MAX_CARDS_TO_LOAD);
    return list;
  };

  const renderCard = (card: Cards): JSX.Element | null => {
    let Card = null;
    switch (card.cardtype) {
      case "Monster":
        Card = <CardMonster key={card.id} card={card} />;
        break;
      case "Spell":
      case "Trap":
      case "Ritual":
        Card = <CardSpell key={card.id} card={card} />;
        break;
    }
    return (
      <Col
        className="card-list-card"
        key={card.id}
        xl={4}
        md={8}
        sm={12}
        xs={24}
      >
        {Card}
      </Col>
    );
  };

  const options: DefaultOptionType[] = cards.map((card) => ({
    value: `${card.id} - ${card.name}`,
    label: `${card.id} - ${card.name}`,
  }));

  const onSearch = useDebounce((value: string = ""): void => {
    let items = cards;
    if (value.length) {
      console.log({ value });
      items = cards.filter(
        ({ id, name }) =>
          `${id} - ${name}`.toUpperCase()?.indexOf(value.toUpperCase()) !== -1
      );
    } else {
      items = cards.slice(0, MAX_CARDS_TO_LOAD);
    }
    infinitScrollRef.current?.onSearch(value, items);
  }, 300);

  return (
    <Row gutter={[16, 48]} className="card-list">
      <Col span={24} className="card-list-search">
        <AutoComplete
          className="card-list-search-auto-complete"
          placeholder="Search some cards"
          optionFilterProp="label"
          options={options}
          allowClear
          filterOption={(inputValue, option) =>
            (option!.label as string)
              ?.toUpperCase()
              ?.indexOf(inputValue.toUpperCase()) !== -1
          }
          onChange={onSearch}
        >
          <Input.Search size="large" />
        </AutoComplete>
      </Col>
      <InfinitScroll<Cards>
        ref={infinitScrollRef}
        renderItems={renderCard}
        fetchItems={onScroll}
        total={cards.length}
      />
    </Row>
  );
};

export default CardList;
