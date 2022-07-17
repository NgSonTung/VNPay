import "react-native-gesture-handler";
import React from "react";
import { View, StatusBar, StyleSheet, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyQRThanhToan from "../components/MyQRThanhToan";
import MyQRNhanTien from "../components/MyQRNhanTien";
import { Entypo } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;

export default function MyQrScreen(props) {
  const Tab = createMaterialTopTabNavigator();
  const exit = () => {
    props.navigation.goBack;
  };
  return (
    <>
      <Entypo
        onPress={props.navigation.goBack}
        style={styles.backBtn}
        name="cross"
        size={24}
        color="black"
      />
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { height: 58, width: "90%" },
          }}
        >
          <Tab.Screen
            options={{
              tabBarLabel: "QR thanh toán",
            }}
            name="thanhtoan"
          >
            {() => <MyQRThanhToan balance={props.balance} name={props.name} />}
          </Tab.Screen>
          <Tab.Screen
            options={{
              tabBarLabel: "QR nhận tiền",
            }}
            name="nhantien"
          >
            {() => <MyQRNhanTien name={props.name} />}
          </Tab.Screen>
        </Tab.Navigator>
        <StatusBar style={"auto"} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
    width: "100%",
    zIndex: 1,
  },
  backBtn: {
    position: "absolute",
    right: 0,
    padding: 17,
    backgroundColor: "white",
    zIndex: 10,
  },
});
