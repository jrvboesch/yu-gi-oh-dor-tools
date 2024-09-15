import React from "react";
import { useAppSelector } from "../../store";
import { DefaultOptionType } from "antd/es/select";
import { Form, Select } from "antd";

type Props = Omit<
  typeof Form.Item,
  "name" | "onSelect" | "label" | "useStatus"
> & {
  onCardSelect?: (value: string, { card }: DefaultOptionType) => void;
  name: number | string | string[];
  label?: React.ReactNode;
  noStyle?: boolean;
};

const CardSelect = ({
  onCardSelect,
  name,
  label,
  noStyle,
  ...field
}: Props) => {
  const cards = useAppSelector((state) => state.cards.list);

  const options: DefaultOptionType[] = cards.map((card) => ({
    value: `${card.id} - ${card.name}`,
    label: `${card.id} - ${card.name}`,
    card,
  }));

  return (
    <Form.Item
      {...field}
      name={name}
      label={label}
      noStyle={noStyle}
      getValueProps={(value) => ({
        value: value ? `${value.id} - ${value.name}` : undefined,
      })}
      valuePropName="card"
      rules={[{ required: true, message: "Please select a card!" }]}
    >
      <Select
        style={{ width: "100%" }}
        showSearch
        placeholder="Select a Card"
        options={options}
        optionFilterProp="card"
        onSelect={onCardSelect}
        filterOption={(inputValue, option) =>
          `${option?.card?.id} - ${option?.card?.name}`
            .toUpperCase()
            ?.indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </Form.Item>
  );
};

export default CardSelect;
