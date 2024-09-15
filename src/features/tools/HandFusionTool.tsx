import React, { useState } from "react";
import { Fusions, useAppSelector } from "../../store";
import CardMonster from "../CardList/components/CardMonster";
import { Button, Card, Col, Divider, Form, Row, Select } from "antd";

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
      const data = Object.entries(values).map<string>(([key, value]) => value);
      setFusionDeck(
        fusions.filter(
          ({ left, right }) => data.includes(left) && data.includes(right)
        )
      );
    } catch (error) {}
  };

  const Options = cards
    .filter(({ cardtype }) => cardtype === "Monster")
    .map(({ id, name }) => ({
      key: id,
      value: id,
      label: `${id} - ${name}`,
    }));

  const FusionMaterials = fusionDeck.map((fusion) => {
    const card = cards.find(({ id }) => fusion.output === id);
    const left = cards.find(({ id }) => fusion.left === id);
    const right = cards.find(({ id }) => fusion.right === id);
    if (!card || !left || !right) {
      return null;
    }
    return (
      <Col key={`${left.id} - ${right.id}`} span={4}>
        <CardMonster
          card={card}
          left={`${left.id} - ${left.name}`}
          right={`${right.id} - ${right.name}`}
        />
      </Col>
    );
  });
  const onFilterOption = (inputValue: string, label: string) =>
    label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card size="small" title="Set your hand!">
          <Form form={form} layout="vertical">
            <Row gutter={[16, 16]} justify="center">
              <Col span={8}>
                <Form.Item name="card1" label="Pick a Tribute Monster.">
                  <Select
                    showSearch
                    options={Options}
                    filterOption={(inputValue, option) =>
                      onFilterOption(inputValue, option!.label as string)
                    }
                  ></Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="card2" label="Pick a Tribute Monster.">
                  <Select
                    showSearch
                    options={Options}
                    filterOption={(inputValue, option) =>
                      onFilterOption(inputValue, option!.label as string)
                    }
                  ></Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="card3" label="Pick a Tribute Monster.">
                  <Select
                    showSearch
                    options={Options}
                    filterOption={(inputValue, option) =>
                      onFilterOption(inputValue, option!.label as string)
                    }
                  ></Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="card4" label="Pick a Tribute Monster.">
                  <Select
                    showSearch
                    options={Options}
                    filterOption={(inputValue, option) =>
                      onFilterOption(inputValue, option!.label as string)
                    }
                  ></Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="card5" label="Pick a Tribute Monster.">
                  <Select
                    showSearch
                    options={Options}
                    filterOption={(inputValue, option) =>
                      onFilterOption(inputValue, option!.label as string)
                    }
                  ></Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Button block type="primary" onClick={onSubmit}>
                    Show
                  </Button>
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
        <Row gutter={[16, 16]}>{FusionMaterials}</Row>
      </Col>
    </Row>
  );
};

export default HandFusionTool;
