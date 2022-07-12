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
import React, { useState } from "react";
import { Alert, Keyboard } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {

// STATE
const [name, setName] = useState("NGUYỄN VĂN A"); //TEN NGUOI DUNG
const [balance, setBalance] = useState(123456); //SO TIEN
const [eyeOn, setEyeOn] = useState(false);
const [loggedIn, setLogin] = useState(false); //TRANG THAI DANG NHAP

const [password, setPassword] = useState(123); //MAT KHAU
const [phoneNumber, setPhoneNumber] = useState("");
const [loginStep, setLoginStep] = useState(1);
const [inputIsRight, checkInput] = useState("");
const [hidePassword, setHidePassword] = useState("true");

// FUNCTIONS
const balanceHide = () => {
  eyeOn ? setEyeOn(false) : setEyeOn(true);
};

const handleSubmit = () => {
  Keyboard.dismiss();
  if (phoneNumber.length == 0) return "thieu";
  else if (!phoneNumber.startsWith("09", 0) | isNaN(phoneNumber))
    return "sai";
  else if (phoneNumber.length == 10) {
    setLoginStep(2);
    return "dung";
  } else return "sai";
};

const handleLogin = () => {
  Keyboard.dismiss();
  if (phoneNumber == password) {
    setLogin(true);
  } else {
    Alert.alert(
      "Thông báo",
      "Thông tin đăng nhập không chính xác. Lưu ý: Tài khoản của Quý khách sẽ bị tạm khóa nếu nhập sai quá 5 lần.",
      [{ text: "Đóng" }]
    );
    return false;
  }
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
             password ={password}
             setNumber={setPhoneNumber}
             checkNumber={checkInput}
             setHide={setHidePassword}
             handleSubmit={handleSubmit}
             handleLogin={handleLogin}
           />
         )}
       </Stack.Screen>
       <Stack.Screen  options={{ headerShown: false }} name="naptien">
         {(props) => <NTHead navigation={props.navigation}/>}
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
