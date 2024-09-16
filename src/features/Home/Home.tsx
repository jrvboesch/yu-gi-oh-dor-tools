import React from "react";
import { Card, Col, Divider, Row, Space, Typography } from "antd";
import CardTypePieChart, { ChartData } from "./components/CardTypePieChart";
import { useAppSelector } from "../../store";
import { DeckTable } from "../DeckBuilder";

const Home = () => {
  const cards = useAppSelector((state) => state.cards.list);
  const groupedChartData = cards.reduce<Record<string, number>>(
    (previous, current) => {
      if (!(current.cardtype in previous)) {
        previous[current.cardtype] = 1;
      } else {
        previous[current.cardtype] = previous[current.cardtype] + 1;
      }
      return previous;
    },
    {}
  );
  const chartData = Object.entries(groupedChartData).map<ChartData>(
    ([label, value]) => ({ label, value })
  );

  const fill = ({ label }: ChartData): string => {
    let color = "#a88301";
    switch (label) {
      case "Spell":
        color = "#03602a";
        break;
      case "Trap":
        color = "#a8053d";
        break;
      case "Ritual":
        color = "#505f84";
        break;
    }
    return color;
  };
  return (
    <Row gutter={[16, 16]} className="home">
      <Col span={24}>
        <Card bordered={false}>
          <Row justify="space-evenly" align={"middle"}>
            <Col lg={8} md={24} className="home-cover">
              <img src={`${process.env.PUBLIC_URL}/cover.png`} alt="cover" />
            </Col>
            <Col lg={8} md={24}>
              <Space.Compact direction="vertical" size={"large"}>
                <Typography.Title>It's Time To Duel</Typography.Title>
                <Divider />
                <Typography.Paragraph>
                  If you’re like me and have played Yu-Gi-Oh! The Duelists of
                  the Roses, you know how tough it can be to remember all the
                  card combinations. That’s why I created this tool—to save time
                  and let you focus on the fun of dueling. I plan to keep
                  improving this tool and adding new features to help with even
                  more aspects of the game, so stay tuned for updates!
                </Typography.Paragraph>
                <Typography.Text italic type="secondary" className="home-quote">
                  "It’s not the power of the cards, but the power of your
                  strategies that will lead you to victory." — Seto Kaiba
                </Typography.Text>
              </Space.Compact>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col lg={12} sm={24}>
        <Card title="Cards by type" bordered={false}>
          <CardTypePieChart data={chartData} fill={fill} />
        </Card>
      </Col>
      <Col lg={12} sm={24}>
        <Card title="Decks" bordered={false}>
          <DeckTable />
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
