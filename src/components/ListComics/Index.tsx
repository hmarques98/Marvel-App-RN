import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  RefreshControl,
  ImageBackground,
} from "react-native";
import { TouchableHighlight, RectButton } from "react-native-gesture-handler";

import { getApiMarvel } from "../../services/api";
import { wait } from "../../utils/timer";
import Seperators from "../Separators/Separators";
import { Result } from "./interfaces";

import imageDefault from "../../assets/images/5f7216d797e38.jpg";
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

  let comicsImage =
    comics.map((image) => image.images).length > 0
      ? "tem foto"
      : "Não tem foto";

  useEffect(() => {
    fetchApi();
  }, []);
  // call api when started
  useEffect(() => {
    fetchApi(limit, offSet);
    console.log(comicsImage);
  }, [limit]);
  //call api again when state to change

  const ImageCustomDefault = () => {
    return (
      <Image
        resizeMode="contain"
        style={[{ width: 380, height: 120 }]}
        source={imageDefault}
      />
    );
  };
  return (
    <View style={styles.container}>
      <RectButton onPress={onRefresh} style={styles.buttonRect}>
        <Text style={styles.textUpdate}>Atualizar com + 5</Text>
      </RectButton>
      <ImageCustomDefault />
      <Text style={styles.textUpdate}>
        Estão sendo mostrados {comics.length} da ordem {offSet}
      </Text>
      {comics.length > 0 ? (
        <FlatList
          ItemSeparatorComponent={() => <Seperators />}
          refreshControl={
            <RefreshControl refreshing={ŕefreshing} onRefresh={onRefresh} />
          }
          keyExtractor={(item: Result, index) => item.id.toString()}
          data={comics}
          renderItem={({ item, index, separators }) => (
            <ImageBackground
              resizeMode="contain"
              defaultSource={imageDefault}
              style={{
                padding: 20,
              }}
              imageStyle={styles.ImageBackground}
              source={{
                uri: `${item.images.map((items) => items.path)}.jpg`,
              }}
            >
              <TouchableHighlight
                containerStyle={styles.containerStyleButton}
                underlayColor="transparent"
                activeOpacity={0.9}
                key={item.id}
                onPress={() => index}
                onShowUnderlay={separators.highlight}
              >
                <View style={styles.containerImage}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: `${item.images.map((items) => items.path)}.jpg`,
                    }}
                  />
                  <View style={styles.containerDescription}>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontSize: 16,
                        lineHeight: 21,
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {item.series.name}
                    </Text>
                    <Text numberOfLines={8} style={{ textAlign: "center" }}>
                      Criadores {"\n"}
                      {item.creators.items.map((item: { name: string }) => (
                        <Text style={styles.textDescription} key={item.name}>
                          {item.name} {"\n"}
                        </Text>
                      ))}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </ImageBackground>
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
  buttonRect: {
    width: 240,
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    backgroundColor: "blue",
    borderRadius: 12,
    elevation: 8,
    marginVertical: 40,
  },
  textUpdate: { color: "white", fontWeight: "bold", fontSize: 18 },
  ImageBackground: {
    opacity: 0.8,
    borderRadius: 18,
    marginHorizontal: 24,
    marginVertical: "10%",
    paddingVertical: 18,
    marginBottom: 10,
    marginTop: 8,
  },
  containerStyleButton: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginVertical: "10%",
  },
  containerImage: {
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: {
    width: 320,
    height: 240,
    resizeMode: "contain",
    borderRadius: 4,
    marginBottom: 8,
  },
  containerDescription: {
    backgroundColor: "whitesmoke",
    opacity: 0.8,
    width: 260,
    alignItems: "center",
    borderRadius: 8,
  },
  textDescription: {
    color: "red",
    margin: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
export default ListComics;
