import React from "react";
import { Button, Divider, Form, Input, message, Space } from "antd";
import { Decks, useAppDispatch } from "../../../store";
import { useForm } from "antd/es/form/Form";
import { DefaultOptionType } from "antd/es/select";
import CardSelect from "../../common/CardSelect";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { NamePath } from "antd/es/form/interface";
import {
  addDecksData,
  editDecksData,
} from "../../../store/reducers/decks.reducer";
import { v4 as uuidv4 } from "uuid";

type Props = {
  deck?: Decks;
  onClose: () => void;
};

const DeckBuilderForm = ({ deck, onClose }: Props) => {
  const [form] = useForm<Decks>();
  const dispatch = useAppDispatch();

  const onSave = async () => {
    try {
      const values = await form.validateFields();
      if (deck) {
        dispatch(editDecksData(values));
      } else {
        dispatch(addDecksData(values));
      }
      onClose();
    } catch (error) {
      message.error("Something went wrong, try again later.");
    }
  };
  const onCardSelect = (
    field: NamePath<Decks>,
    _: string,
    { card }: DefaultOptionType
  ) => {
    form.setFieldValue(field, card);
  };

  const initialValues = {
    id: deck?.id ?? uuidv4(),
    name: deck?.name,
    leader: deck?.leader,
    cards: deck?.cards ?? [undefined],
  };
  return (
    <Form form={form} initialValues={initialValues} layout="vertical">
      <Form.Item name="id" hidden>
        <Input hidden />
      </Form.Item>
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Every deck needs a Moto!" }]}
      >
        <Input />
      </Form.Item>
      <CardSelect
        name="leader"
        label="Leader"
        onCardSelect={(value, option) => onCardSelect("leader", value, option)}
      />
      <Form.List
        name="cards"
        rules={[
          {
            validator: async (_, cards) => {
              if (!cards || cards.length !== 40) {
                return Promise.reject(
                  new Error("All decks shoul have 40 Cards.")
                );
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            <Divider orientation="left">Cards ({fields.length})</Divider>
            <Space
              direction="vertical"
              style={{ width: "100%", height: "300px", overflow: "auto" }}
            >
              {fields.map(({ key, ...field }) => (
                <Space.Compact block>
                  <CardSelect
                    key={key}
                    {...field}
                    noStyle
                    onCardSelect={(value, option) =>
                      onCardSelect(["cards", key], value, option)
                    }
                  />
                  <Button
                    icon={<MinusCircleOutlined />}
                    onClick={() => remove(field.name)}
                  />
                </Space.Compact>
              ))}
            </Space>

            <Form.Item style={{ marginTop: "16px" }}>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
                block
              >
                Add Card
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button onClick={onSave}>Save</Button>
      </Form.Item>
    </Form>
  );
};

export default DeckBuilderForm;
