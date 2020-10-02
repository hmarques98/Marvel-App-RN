import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import Logo from "../../assets/images/marvel.svg";
type BarUpdateProps = {
  onRefresh: () => void;
};

const BarUpdate = ({ onRefresh }: BarUpdateProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#F8F8F8",
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
        backgroundColor="transparent"
        color="#000"
        name="search"
        size={24}
        iconStyle={{ marginRight: 0 }}
      />
      {/* <RectButton onPress={onRefresh}>
        <Text style={styles.textUpdate}></Text>
      </RectButton> */}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRect: {
    width: 40,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#f2264B",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: {
      width: -4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 14,
  },
  textUpdate: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16,
    margin: 5,
  },
});
export default BarUpdate;
