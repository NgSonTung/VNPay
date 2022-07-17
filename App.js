import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import NTHeader from "./app/components/NTHeader";
import NTHead from "./app/screens/NapTien";
import XNPage from "./app/screens/XacNhanGiaoDich";
import CTPage from "./app/screens/ChuyenTien";
import Notification from "./app/screens/Notification";
import Gift from "./app/screens/Gift";
import { Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect, useRef } from "react";
import MyQrScreen from "./app/screens/MyQrScreen";
import ViGD from "./app/screens/ViGDScreen";
import { log } from "react-native-reanimated";
import { initDB } from "./firebase";
import { getData } from "./firebase";

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

  if (isLoading) return <Text style={styles.loading}>LOADING</Text>;
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
            {(props) => <NTHead navigation={props.navigation} />}
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
});
