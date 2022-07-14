import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import NTHeader from "./app/components/NTHeader";
import NTHead from "./app/screens/NapTien";
import XNPage from "./app/screens/XacNhanGiaoDich"
import CTPage from "./app/screens/ChuyenTien"
import Notification from "./app/components/Notification";
import Gift from "./app/components/Gift";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState , useEffect } from "react";
import { Alert, Keyboard } from "react-native";
import MyQrScreen from "./app/screens/MyQrScreen";

const Stack = createNativeStackNavigator();

export default function App() {

// STATE
const [name, setName] = useState("NGUYỄN VĂN A"); //TEN NGUOI DUNG
const [balance, setBalance] = useState(123456); //SO TIEN
const [eyeOn, setEyeOn] = useState(false);
const [loggedIn, setLogin] = useState(false); //TRANG THAI DANG NHAP

const [password, setPassword] = useState(123);
const [phoneNumber, setPhoneNumber] = useState();
const [loginStep, setLoginStep] = useState(1);
const [inputIsRight, checkInput] = useState("");
const [hidePassword, setHidePassword] = useState("true");


  
// FUNCTIONS
const balanceHide = () => {
  eyeOn ? setEyeOn(false) : setEyeOn(true);
};


   return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="home">
       <Stack.Screen options={{ headerShown: false }} name="home">
         {(props) => (
           <HomeScreen
             navigation={props.navigation}
             balanceHide={balanceHide}
             eyeOn={eyeOn}
             balance={balance}
             loggedIn={loggedIn}
             name={name}
             
           />
         )}
       </Stack.Screen>
       <Stack.Screen options={{ headerShown: false }} name="login">
         {(props) => (
           <LoginScreen
             navigation={props.navigation}
             step={loginStep}
             number={phoneNumber}
             isRight={inputIsRight}
             hidePassword={hidePassword}
               password={password}
               setPassword = {setPassword}
             setNumber={setPhoneNumber}
             checkNumber={checkInput}
             setHide={setHidePassword}
               setLoginStep={setLoginStep}
               setLogin = {setLogin}
           />
         )}
       </Stack.Screen>
       <Stack.Screen  options={{ headerShown: false }} name="naptien">
         {(props) => <NTHead navigation={props.navigation}/>}
         </Stack.Screen>
         <Stack.Screen options={{ headerShown: false }} name="myQR">
         {(props) => (
           <MyQrScreen
             navigation={props.navigation}
             balanceHide={balanceHide}
             balance={balance}
             name={name}
               password={password}
               loggedIn = {loggedIn}
               number = {phoneNumber}
               />
         )}
       </Stack.Screen>
       <Stack.Screen  options={{ headerShown: false }} name="thongbao">
         {(props) => <Notification navigation={props.navigation}/>}
       </Stack.Screen>
     </Stack.Navigator>
     </NavigationContainer>
// return(
// <CTPage />
   );
}
