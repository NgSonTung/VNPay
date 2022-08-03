import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import NTHeader from "./app/components/NTHeader";
import NTHead from "./app/screens/NapTien";
import XNPage from "./app/screens/XacNhanGiaoDich";
import CTDenViPage from "./app/screens/ChuyenTienDenVi";
import CTPage from "./app/screens/ChuyenTien";
import Notification from "./app/screens/Notification";
import Gift from "./app/screens/Gift";
import ChatPage from "./app/screens/Chat"
import { Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect, useRef } from "react";
import MyQrScreen from "./app/screens/MyQrScreen";
import MenuScreen from "./app/screens/MenuScreen";
import ViGD from "./app/screens/ViGDScreen";
import { initDB } from "./firebase";
import { getData } from "./firebase";
import Load from "./app/components/Load";
import "firebase/compat/database";
import firebase from "firebase/compat/app";

const Stack = createNativeStackNavigator();

export default function App() {
  initDB(); //init database

  // STATE
  const [accountInfo, setAccountInfo] = useState({
    name: "",
    password: "",
    balance: "",
    number: "",
  });
  const [accountList, setAccountList] = useState();
  const [loggedIn, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [sendAmount, setAmount] = useState();
  const [receiver, setReceiver] = useState();

  //FUNCTIONS
  useEffect(() => {
    getAccountInfo();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      typeof accountList !== "undefined" ? setLoading(false) : null;
    }, 1000);
    if (typeof accountList !== "undefined") {
      let acc = accountList.find((account) => {
        return account.number === accountInfo.number;
      });
      typeof acc !== "undefined" ? setAccountInfo(acc) : null;
    }
  }, [accountList]);

  const getAccountInfo = async () => {
    // const array = await getData();
    firebase
      .database()
      .ref("users")
      .on("value", (snapshot) => {
        const array = [];
        snapshot.forEach(function (child) {
          var user = child.val();
          array.push({
            id: child.key,
            password: user.Password,
            number: user.Number,
            balance: user.Balance,
            name: user.Name,
          });
        });
        setAccountList(array);
      });
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
      // <>
      //   <NavigationContainer>
      //     <Stack.Navigator initialRouteName="home">
      //       <Stack.Screen options={{ headerShown: false }} name="home">
      //         {(props) => (
      //           <HomeScreen
      //             navigation={props.navigation}
      //             balance={accountInfo.balance}
      //             loggedIn={loggedIn}
      //             name={accountInfo.name}
      //             accountInfo={accountInfo}
      //           />
      //         )}
      //       </Stack.Screen>
      //       <Stack.Screen options={{ headerShown: false }} name="login">
      //         {(props) => (
      //           <LoginScreen
      //             navigation={props.navigation}
      //             number={accountInfo.number}
      //             password={accountInfo.password}
      //             setLogin={setLogin}
      //             accountList={accountList}
      //             setAccountInfo={setAccountInfo}
      //             loggedIn={loggedIn}
      //           />
      //         )}
      //       </Stack.Screen>
      //       <Stack.Screen options={{ headerShown: false }} name="naptien">
      //         {(props) => (
      //           <>
      //             <Load />
      //             <NTHead
      //               navigation={props.navigation}
      //               balance={accountInfo.balance}
      //             />
      //           </>
      //         )}
      //       </Stack.Screen>
      //       <Stack.Screen options={{ headerShown: false }} name="xacnhanNT">
      //         {(props) => (
      //           <>
      //             <Load />
      //             <XNPage
      //               navigation={props.navigation}
      //               balance={accountInfo.balance}
      //               name={accountInfo.name}
      //               setAccountInfo={setAccountInfo}
      //             />
      //           </>
      //         )}
      //       </Stack.Screen>

      //       <Stack.Screen options={{ headerShown: false }} name="myQR">
      //         {(props) => (
      //           <>
      //             <Load />
      //             <MyQrScreen
      //               navigation={props.navigation}
      //               balance={accountInfo.balance}
      //               name={accountInfo.name}
      //               loggedIn={loggedIn}
      //               accountInfo={accountInfo}
      //             />
      //           </>
      //         )}
      //       </Stack.Screen>
      //       <Stack.Screen options={{ headerShown: false }} name="viGD">
      //         {(props) => (
      //           <>
      //             <Load />
      //             <ViGD name={accountInfo.name} navigation={props.navigation} />
      //           </>
      //         )}
      //       </Stack.Screen>
      //       <Stack.Screen options={{ headerShown: false }} name="thongbao">
      //         {(props) => (
      //           <>
      //             <Load />
      //             <Notification navigation={props.navigation} />
      //           </>
      //         )}
      //       </Stack.Screen>
      //       <Stack.Screen options={{ headerShown: false }} name="chuyentien">
      //         {(props) => (
      //           <>
      //             <Load />
      //             <CTPage navigation={props.navigation} />
      //           </>
      //         )}
      //       </Stack.Screen>
      //       <Stack.Screen options={{ headerShown: false }} name="qua">
      //         {(props) => (
      //           <>
      //             <Load />
      //             <Gift navigation={props.navigation} />
      //           </>
      //         )}
      //       </Stack.Screen>
      //       <Stack.Screen options={{ headerShown: false }} name="Chat">
      //       {(props) => (
      //         <>
      //           <Load />
      //           <ChatPage navigation={props.navigation}/>
      //         </>)}
      //     </Stack.Screen>
      //       <Stack.Screen options={{ headerShown: false }} name="xacnhan">
      //         {(props) => (
      //           <>
      //             <Load />
      //             <XNPage
      //               accountInfo={accountInfo}
      //               receiver={receiver}
      //               sendAmount={sendAmount}
      //               navigation={props.navigation}
      //               balance={accountInfo.balance}
      //               name={accountInfo.name}
      //             />
      //           </>
      //         )}
      //       </Stack.Screen>
      //       <Stack.Screen
      //         options={{ headerShown: false }}
      //         name="chuyentiendenvi"
      //       >
      //         {(props) => (
      //           <>
      //             <Load />
      //             <CTDenViPage
      //               navigation={props.navigation}
      //               balance={accountInfo.balance}
      //               name={accountInfo.name}
      //               accountInfo={accountInfo}
      //               accountList={accountList}
      //               setReceiver={setReceiver}
      //               setAmount={setAmount}
      //             />
      //           </>
      //         )}
      //       </Stack.Screen>
      //       <Stack.Screen options={{ headerShown: false }} name="menu">
      //         {(props) => (
      //           <>
      //             <Load />
      //             <MenuScreen
      //               navigation={props.navigation}
      //               balance={accountInfo.balance}
      //               loggedIn={loggedIn}
      //               name={accountInfo.name}
      //               setLogin={setLogin}
      //               setAccountInfo={setAccountInfo}
      //             />
      //           </>
      //         )}
      //       </Stack.Screen>
      //     </Stack.Navigator>
      //   </NavigationContainer>
      //   <Load />
      // </>
      <ChatPage/>
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
