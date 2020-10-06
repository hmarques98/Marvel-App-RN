import React, { createContext, useEffect, useState } from "react";
import {
  ResultCharacters,
  ResultComics,
} from "../screens/ListCharacters/FlatListCharacter/interfaces";
import { getApiMarvel } from "../services/api";
import { wait } from "../utils/timer";

interface IMarvelContext {
  characters: ResultCharacters[];
  comics: ResultCharacters[];
  series: ResultCharacters[];
  ŕefreshing: boolean;
  onRefresh?: () => void;
}
interface Props {
  children: React.ReactNode;
}

export const MarvelContext = createContext<IMarvelContext>(
  {} as IMarvelContext
);

export const MarvelProvider = ({ children }: Props) => {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);

  const [ŕefreshing, setRefreshing] = useState(false);

  const [limit, setLimit] = useState(30);

  const [offSet, setOffSet] = useState(Math.floor(Math.random() * 1000));

  const fetchApi = async (limit?: number | any, offset?: number) => {
    try {
      const characters = await getApiMarvel("characters", limit, offset);
      const series = await getApiMarvel("series", limit, offset);
      const comics = await getApiMarvel("comics", limit, offset);

      setCharacters(characters.results);
      setComics(comics.results);
      setSeries(series.results);
    } catch {
      console.log("Error: verificar sua chamada");
    }
  };

  const onRefresh = () => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  };

  useEffect(() => {
    fetchApi(limit, offSet);
    return () => {
      fetchApi();
    };
  }, [limit, offSet]);

  return (
    <MarvelContext.Provider
      value={{ characters, ŕefreshing, comics, series, onRefresh }}
    >
      {children}
    </MarvelContext.Provider>
  );
};
