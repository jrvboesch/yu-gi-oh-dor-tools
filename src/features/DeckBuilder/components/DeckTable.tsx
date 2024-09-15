import { Avatar, Space, Table, TableProps, Typography } from "antd";
import React from "react";
import { Decks, useAppSelector } from "../../../store";

const DeckTable = () => {
  const decks = useAppSelector((state) => state.decks.list);

  const columns: TableProps<Decks>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Leader",
      dataIndex: "leader",
      key: "leader",
      render: (_, { leader }) => (
        <Space>
          <Avatar
            shape="square"
            icon={
              <img
                src={`${process.env.PUBLIC_URL}${leader.imageUrl}`}
                alt={leader.name}
              />
            }
          />
          <Typography.Text>{leader.name}</Typography.Text>
        </Space>
      ),
    },
    {
      title: "Cards",
      dataIndex: "cards",
      key: "cards",
      render: (_, { cards }) => (
        <Typography.Text>{cards.length}</Typography.Text>
      ),
    },
  ];
  return <Table columns={columns} dataSource={decks} />;
};

export default DeckTable;
