import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./features/layouts";
import CardList from "./features/CardList";
import { useAppDispatch } from "./store";
import { setCardData } from "./store/reducers/cards.reducer";
import cards from "./data/cards.json";
import fusions from "./data/fusions.json";
import { Cards, Fusions } from "./store/interfaces/cards.interface";
import Home from "./features/Home";
import { HandFusionTool } from "./features/tools";
import { setFusionsData } from "./store/reducers/fusions.reducer";
import { ConfigProvider, theme } from "antd";
import NotFound from "./features/NotFound";
import DeckBuilder from "./features/DeckBuilder";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCardData(cards as Cards[]));
    dispatch(setFusionsData(fusions as Fusions[]));
  }, [dispatch]);

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />,
            index: true,
          },
          {
            path: "cards",
            element: <CardList />,
          },
          {
            path: "hand-fusion-tool",
            element: <HandFusionTool />,
          },
          {
            path: "deck-builder",
            element: <DeckBuilder />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
    { basename: process.env.PUBLIC_URL }
  );
  return (
    <React.StrictMode>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </React.StrictMode>
  );
};

export default App;
