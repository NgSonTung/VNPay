import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyQRThanhToan from "../components/MyQRThanhToan";
import MyQRNhanTien from "../components/MyQRNhanTien";

export default function MyQrScreen(props) {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 58 },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "QR thanh toán",
          }}
          name="thanhtoan"
        >
          {() => (
            <MyQRThanhToan
              balanceHide={props.balanceHide}
              balance={props.balance}
              name={props.name}
            />
          )}
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
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
    width: "100%",
  },
});
