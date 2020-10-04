import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Logo from "../../assets/images/marvel.svg";
import { MarvelContext } from "../../context/Marvel";
type NavBarMarvelProps = {
  onRefresh: () => void;
};

const NavBarMarvel = () => {
  const { onRefresh } = useContext(MarvelContext);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12,
      }}
    >
      <Icon.Button
        name="bars"
        backgroundColor="transparent"
        color="#000"
        size={24}
        iconStyle={{ marginRight: 0 }}
      />

      <Logo width={80} height={40} fill="#f2264b" />
      <Icon.Button
        underlayColor={"#f2264b"}
        backgroundColor="transparent"
        color="#000"
        name="search"
        size={24}
        iconStyle={{ marginRight: 0 }}
        onPress={onRefresh}
      />
    </View>
  );
};

export default NavBarMarvel;
