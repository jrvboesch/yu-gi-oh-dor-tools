import { Avatar, Space, Table, TableProps, Tooltip, Typography } from "antd";
import React from "react";
import { Decks, useAppSelector } from "../../../store";

const DeckTable = () => {
  const decks = useAppSelector((state) => state.decks.list);

  const columns: TableProps<Decks>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ellipsis: {
        showTitle: true,
      },
      render: (_, { name }) => (
        <Tooltip placement="topLeft" title={name}>
          {name}
        </Tooltip>
      ),
    },
    {
      title: "Leader",
      dataIndex: "leader",
      key: "leader",
      ellipsis: {
        showTitle: true,
      },
      render: (_, { leader }) => (
        <Tooltip placement="topLeft" title={leader.name}>
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
        </Tooltip>
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
