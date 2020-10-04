import React, { createContext, useEffect, useState } from "react";
import { ResultMarvel } from "../components/FlatListCharacter/interfaces";
import { getApiMarvel } from "../services/api";
import { wait } from "../utils/timer";

interface IMarvelContext {
  comics: ResultMarvel[];
  ŕefreshing: boolean;
  onRefresh: () => void;
}
interface Props {
  children: React.ReactNode;
}

export const MarvelContext = createContext<IMarvelContext>(
  {} as IMarvelContext
);

export const MarvelProvider = ({ children }: Props) => {
  const [comics, setComics] = useState([]);

  const [ŕefreshing, setRefreshing] = useState(false);

  const [limit, setLimit] = useState(5);

  const [offSet, setOffSet] = useState(Math.floor(Math.random() * 500));

  const fetchApi = async (limit?: number | any, offset?: number) => {
    try {
      const response = await getApiMarvel("characters", limit, offset);

      setComics(response.results);
    } catch {
      console.log("Error: verificar sua chamada");
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setLimit(limit + 5);
    wait(2000).then(() => setRefreshing(false));
  };

  useEffect(() => {
    fetchApi(limit, offSet);
  }, [limit, offSet]);

  return (
    <MarvelContext.Provider value={{ comics, ŕefreshing, onRefresh }}>
      {children}
    </MarvelContext.Provider>
  );
};
