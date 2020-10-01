import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import Comics from "../Comics";
import Seperators from "../Separators/Separators";

import { getApiMarvel } from "../../services/api";
import { wait } from "../../utils/timer";
import { Result } from "./interfaces";
import BarUpdate from "../BarUpdate";

const ListComics = () => {
  const [comics, setComics] = useState<Result[]>([]);

  const [ŕefreshing, setRefreshing] = useState(false);

  const [limit, setLimit] = useState(5);

  const [offSet, setOffSet] = useState(
    Math.floor(Math.random() * 20000) + 3000
  );

  const fetchApi = useCallback(
    async (limit?: number | any, offset?: number) => {
      try {
        const response = await getApiMarvel(limit, offset);

        setComics(response.results);
      } catch {
        console.log("Error: verificar sua chamada");
      }
    },
    []
  );
  const onRefresh = () => {
    setRefreshing(true);
    setLimit(limit + 5);
    wait(2000).then(() => setRefreshing(false));
  };

  useEffect(() => {
    fetchApi();
  }, []);
  // call api when started
  useEffect(() => {
    fetchApi(limit, offSet);
  }, [limit, offSet]);
  //call api again when state to change

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <BarUpdate
        lengthComics={comics.length}
        offSet={offSet}
        onRefresh={onRefresh}
      />
      {comics.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Seperators />}
          refreshControl={
            <RefreshControl refreshing={ŕefreshing} onRefresh={onRefresh} />
          }
          keyExtractor={(item: Result, index) => item.id.toString()}
          data={comics}
          renderItem={({ item, index, separators }) => (
            <Comics
              extensionImage={item.images.map((items) => items.extension)}
              uriImageBackGround={item.images.map((items) => items.path)}
              keyItemTouchable={item.id}
              onPress={() => {
                navigate("Personagem", {
                  name: item.title,
                  id: item.id,
                });
              }}
              uriImageThumbnail={item.images.map((items) => items.path)}
              seriesName={item.series.name}
              creatorsName={item.creators.items.map(
                (item: { name: string }) => item.name
              )}
            />
          )}
        />
      ) : (
        <Text style={styles.textUpdate}>Carregando. Aguarde!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,99,71 ,0.9 )",
    width: "100%",
  },

  textUpdate: { color: "white", fontWeight: "bold", fontSize: 18 },
});
export default ListComics;
