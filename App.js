import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import NTHeader from "./app/components/NTHeader";
import NTHead from "./app/screens/NapTien";
import XNPage from "./app/screens/XacNhanGiaoDich";
import CTDenViPage from "./app/screens/ChuyenTienDenVi";
import CTPage from "./app/screens/ChuyenTien";
import Notification from "./app/screens/Notification";
import Gift from "./app/screens/Gift";
import { Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect, useRef } from "react";
import MyQrScreen from "./app/screens/MyQrScreen";
import MenuScreen from "./app/screens/MenuScreen";
import ViGD from "./app/screens/ViGDScreen";
import { log } from "react-native-reanimated";
import { initDB } from "./firebase";
import { getData } from "./firebase";
import { View, ActivityIndicator } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  initDB(); //init database

  // STATE
  const [accountInfo, setAccountInfo] = useState();
  const [loggedIn, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(true);

  //FUNCTIONS
  useEffect(() => {
    getAccountInfo();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      typeof accountInfo !== "undefined" ? setLoading(false) : null;
    }, 1000);
  }, [accountInfo]);

  const getAccountInfo = async () => {
    const array = await getData();
    setAccountInfo(array[0]);
  };

  if (isLoading)
    return (
      <Image
        source={require("./app/assets/logo1.png")}
        style={{ height: 250, width: 250, marginLeft: 80, marginTop: 220 }}
      />
    );
  else
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen options={{ headerShown: false }} name="home">
            {(props) => (
              <HomeScreen
                navigation={props.navigation}
                balance={accountInfo.balance}
                loggedIn={loggedIn}
                name={accountInfo.name}
              />
            )}
          </Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name="login">
            {(props) => (
              <LoginScreen
                navigation={props.navigation}
                number={accountInfo.number}
                password={accountInfo.password}
                setLogin={setLogin}
              />
            )}
          </Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name="naptien">
            {(props) => (
              <NTHead
                navigation={props.navigation}
                balance={accountInfo.balance}
              />
            )}
          </Stack.Screen>

          <Stack.Screen options={{ headerShown: false }} name="myQR">
            {(props) => (
              <MyQrScreen
                navigation={props.navigation}
                balance={accountInfo.balance}
                name={accountInfo.name}
                loggedIn={loggedIn}
              />
            )}
          </Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name="viGD">
            {(props) => (
              <ViGD name={accountInfo.name} navigation={props.navigation} />
            )}
          </Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name="thongbao">
            {(props) => <Notification navigation={props.navigation} />}
          </Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name="chuyentien">
            {(props) => <CTPage navigation={props.navigation} />}
          </Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name="qua">
            {(props) => <Gift navigation={props.navigation} />}
          </Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name="xacnhan">
            {(props) => (
              <XNPage
                navigation={props.navigation}
                balance={accountInfo.balance}
                name={accountInfo.name}
              />
            )}
          </Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name="chuyentiendenvi">
            {(props) => (
              <CTDenViPage
                navigation={props.navigation}
                balance={accountInfo.balance}
                name={accountInfo.name}
              />
            )}
          </Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name="menu">
            {(props) => (
              <MenuScreen
                navigation={props.navigation}
                balance={accountInfo.balance}
                loggedIn={loggedIn}
                name={accountInfo.name}
                setLogin={setLogin}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
}
const styles = StyleSheet.create({
  loading: {
    fontSize: 50,
    flex: 1,
    textAlignVertical: "center",
    alignSelf: "center",
  },
  container: {
    flex: 2,
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
    marginLeft: 175,
    marginTop: -70,
    backgroundColor: "white",
    borderRadius: 50,
  },
});
