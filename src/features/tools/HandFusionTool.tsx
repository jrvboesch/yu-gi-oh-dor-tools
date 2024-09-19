import React, { useState } from "react";
import { Fusions, useAppSelector } from "../../store";
import CardMonster from "../CardList/components/CardMonster";
import {
  Button,
  Card,
  Col,
  Divider,
  Empty,
  Form,
  Row,
  Select,
  Space,
} from "antd";

type HandFusionToolForm = {
  card1: string;
  card2: string;
  card3: string;
  card4: string;
  card5: string;
};
const HandFusionTool = () => {
  const [form] = Form.useForm<HandFusionToolForm>();
  const cards = useAppSelector((state) => state.cards.list);
  const fusions = useAppSelector((state) => state.fusions.list);

  const [fusionDeck, setFusionDeck] = useState<Fusions[]>([]);

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      const data = Object.entries(values).map<string>(([_, value]) => value);
      setFusionDeck(
        fusions.filter(({ left, right }) => {
          if (left === right && data.filter((id) => id === left).length < 2) {
            return false;
          }
          return data.includes(left) && data.includes(right);
        })
      );
    } catch (error) {}
  };

  const onClear = () => {
    form.resetFields();
    setFusionDeck([]);
  };

  const Options = cards
    .filter(({ cardtype }) => cardtype === "Monster")
    .map(({ id, name }) => ({
      key: id,
      value: id,
      label: `${id} - ${name}`,
    }));

  const FusionMaterials = fusionDeck.length ? (
    fusionDeck.map((fusion) => {
      const card = cards.find(({ id }) => fusion.output === id);
      const left = cards.find(({ id }) => fusion.left === id);
      const right = cards.find(({ id }) => fusion.right === id);
      if (!card || !left || !right) {
        return null;
      }
      return (
        <Col key={`${left.id} - ${right.id}`} xl={4} md={8} sm={12} xs={24}>
          <CardMonster card={card} left={left} right={right} />
        </Col>
      );
    })
  ) : (
    <Empty
      description="No Futions Available."
      image={`${process.env.PUBLIC_URL}/back-card.png`}
    />
  );
  const onFilterOption = (inputValue: string, label: string) =>
    label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;

  const CardSelect = (
    <Select
      showSearch
      options={Options}
      placeholder="Pick a Monster"
      allowClear
      filterOption={(inputValue, option) =>
        onFilterOption(inputValue, option!.label as string)
      }
    />
  );
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card size="small" title="Set your hand!">
          <Form form={form} layout="vertical">
            <Row gutter={[16, 16]} justify="center">
              <Col xl={8} lg={8} md={12} sm={12} xs={24}>
                <Form.Item name="card1" label="Pick a Tribute Monster.">
                  {CardSelect}
                </Form.Item>
              </Col>
              <Col xl={8} lg={8} md={12} sm={12} xs={24}>
                <Form.Item name="card2" label="Pick a Tribute Monster.">
                  {CardSelect}
                </Form.Item>
              </Col>
              <Col xl={8} lg={8} md={12} sm={12} xs={24}>
                <Form.Item name="card3" label="Pick a Tribute Monster.">
                  {CardSelect}
                </Form.Item>
              </Col>
              <Col xl={8} lg={8} md={12} sm={12} xs={24}>
                <Form.Item name="card4" label="Pick a Tribute Monster.">
                  {CardSelect}
                </Form.Item>
              </Col>
              <Col lg={10} md={12} sm={12} xs={24}>
                <Form.Item name="card5" label="Pick a Tribute Monster.">
                  {CardSelect}
                </Form.Item>
              </Col>
              <Col xl={8} lg={8} xs={24}>
                <Form.Item>
                  <Space.Compact block>
                    <Button block type="primary" onClick={onSubmit}>
                      Show
                    </Button>
                    <Button block type="dashed" onClick={onClear}>
                      Clear
                    </Button>
                  </Space.Compact>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
      <Col span={24}>
        <Divider>Fusion List</Divider>
      </Col>
      <Col span={24}>
        <Row gutter={[16, 16]} justify={fusionDeck.length ? "start" : "center"}>
          {FusionMaterials}
        </Row>
      </Col>
    </Row>
  );
};

export default HandFusionTool;
