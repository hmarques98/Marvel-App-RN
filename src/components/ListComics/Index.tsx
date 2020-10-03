import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import Comics from "../Comics";
import Seperators from "../Separators/Separators";

import { getApiMarvel } from "../../services/api";
import { wait } from "../../utils/timer";
import { Result } from "./interfaces";

import { FONT_800 } from "../../fonts/types";
import BarUpdate from "../BarUpdate";

const ListComics = () => {
  const [comics, setComics] = useState<Result[]>([]);

  const [ŕefreshing, setRefreshing] = useState(false);

  const [limit, setLimit] = useState(20);

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
    fetchApi(limit, offSet);
  }, [limit, offSet]);
  //call api again when state to change

  const { navigate } = useNavigation();

  return (
    <>
      <BarUpdate />
      {comics.length > 0 ? (
        <>
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            // ItemSeparatorComponent={() => <Seperators />}
            refreshControl={
              <RefreshControl refreshing={ŕefreshing} onRefresh={onRefresh} />
            }
            keyExtractor={(item: Result, index) => item.id.toString()}
            data={comics}
            renderItem={({ item, index, separators }) => (
              <Comics
                extensionImage={item.images.map((items) => items.extension)}
                keyItemTouchable={item.id}
                onPress={() => {
                  navigate("Personagem", {
                    name: item.title,
                    id: item.id,
                  });
                }}
                uriImageThumbnail={item.images.map((items) => items.path)}
                nameCharacters={item.series.name}
              />
            )}
          />
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            // ItemSeparatorComponent={() => <Seperators />}
            refreshControl={
              <RefreshControl refreshing={ŕefreshing} onRefresh={onRefresh} />
            }
            keyExtractor={(item: Result, index) => item.id.toString()}
            data={comics}
            renderItem={({ item, index, separators }) => (
              <Comics
                extensionImage={item.images.map((items) => items.extension)}
                keyItemTouchable={item.id}
                onPress={() => {
                  navigate("Personagem", {
                    name: item.title,
                    id: item.id,
                  });
                }}
                uriImageThumbnail={item.images.map((items) => items.path)}
                nameCharacters={item.series.name}
              />
            )}
          />
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            // ItemSeparatorComponent={() => <Seperators />}
            refreshControl={
              <RefreshControl refreshing={ŕefreshing} onRefresh={onRefresh} />
            }
            keyExtractor={(item: Result, index) => item.id.toString()}
            data={comics}
            renderItem={({ item, index, separators }) => (
              <Comics
                extensionImage={item.images.map((items) => items.extension)}
                keyItemTouchable={item.id}
                onPress={() => {
                  navigate("Personagem", {
                    name: item.title,
                    id: item.id,
                  });
                }}
                uriImageThumbnail={item.images.map((items) => items.path)}
                nameCharacters={item.series.name}
              />
            )}
          />
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            // ItemSeparatorComponent={() => <Seperators />}
            refreshControl={
              <RefreshControl refreshing={ŕefreshing} onRefresh={onRefresh} />
            }
            keyExtractor={(item: Result, index) => item.id.toString()}
            data={comics}
            renderItem={({ item, index, separators }) => (
              <Comics
                extensionImage={item.images.map((items) => items.extension)}
                keyItemTouchable={item.id}
                onPress={() => {
                  navigate("Personagem", {
                    name: item.title,
                    id: item.id,
                  });
                }}
                uriImageThumbnail={item.images.map((items) => items.path)}
                nameCharacters={item.series.name}
              />
            )}
          />
        </>
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.textUpdate}>Aguarde</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textUpdate: {
    color: "#000",
    fontSize: 24,
    fontFamily: FONT_800,
  },
});
export default ListComics;
// comics.length > 0 ? (
//   <>
//     <FlatList
//       horizontal
//       showsVerticalScrollIndicator={false}
//       // ItemSeparatorComponent={() => <Seperators />}
//       refreshControl={
//         <RefreshControl refreshing={ŕefreshing} onRefresh={onRefresh} />
//       }
//       keyExtractor={(item: Result, index) => item.id.toString()}
//       data={comics}
//       renderItem={({ item, index, separators }) => (
//         <Comics
//           extensionImage={item.images.map((items) => items.extension)}
//           keyItemTouchable={item.id}
//           onPress={() => {
//             navigate("Personagem", {
//               name: item.title,
//               id: item.id,
//             });
//           }}
//           uriImageThumbnail={item.images.map((items) => items.path)}
//           nameCharacters={item.series.name}
//         />
//       )}
//     />
//   </>
// ) : (
//   <View style={{ justifyContent: "center", alignItems: "center" }}>
//     <Text style={styles.textUpdate}>Aguarde</Text>
//   </View>
// );
