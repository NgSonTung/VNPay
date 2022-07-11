import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Searchbar from "./Searchbar";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function Khuyenmai() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTab}></Text>
    </View>
  );
}
function Giaodich() {
  return (
    <View style={styles.container}>
      <Image style={styles.icons } source={require("../assets/Untitled.png")} />
      <Text style={styles.textTab}> Quý khách chưa có thông báo nào </Text>
    </View>
  );
}
function Biendong() {
  return (
    <View style={styles.container}>
      <Image style={styles.icons } source={require("../assets/Untitled.png")} />
      <Text style={styles.textTab}> Quý khách chưa có thông báo nào </Text>
    </View>
  );
}
function Khac() {
  return (
      <><Text style={styles.text1}>HÔM NAY, 11/07/2022</Text><View style={styles.khac}>
      <Image style={styles.logo} source={require("../assets/unnamed.png")} />
      <Text style={styles.text2}>Ví điện tử VNPAY</Text>
      <Image style={styles.logo2} source={require("../assets/read.png")} />
      <Text style={styles.text3}>11/07/2022 13:52</Text>
      <View style={styles.line1} />
      <Text style={styles.text4}>Chào mừng bạn đến với hệ thống ví điện tử VNPAY {"\n"}Wallet</Text>
    </View></>
  );
}

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Khuyến mại"
        component={Khuyenmai}
        opions={{ tabBarLabel: "Khuyến mại" }}
      ></Tab.Screen>
      <Tab.Screen
        name="Giao dịch"
        component={Giaodich}
        opions={{ tabBarLabel: "Giao dịch" }}
      ></Tab.Screen>
      <Tab.Screen
        name="Biến động số dư"
        component={Biendong}
        opions={{ tabBarLabel: "Biến động" }}
      ></Tab.Screen>
      <Tab.Screen
        name="Khác"
        component={Khac}
        opions={{ tabBarLabel: "Khác" }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

const Notification = (props) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: "white"}}>
        <MaterialIcons
          style={styles.returnBtn}
          name="arrow-back-ios"
          size={19}
          color="black"
          onPress={props.navigation.goBack}
        />
        <Text style={[styles.navDesc, styles.navIcons]}> Thông báo </Text>
        <View>
          <Searchbar />
        </View>
      </SafeAreaView>
      <MyTab />
    </>
  );
};
export default Notification;

const styles = StyleSheet.create({
  returnBtn: {
    paddingVertical: 10,
    paddingHorizontal: 23,
    position: "absolute",
    top: 20,
    zIndex: 10,
  },
  barIcons: {
    margin: 30,
    marginTop: 50,
    resizeMode: "contain",
    height: 20,
    aspectRatio: 1,
  },
  navDesc: {
    marginTop: 30,
    color: "#4f5964",
    textAlign: "center",
    fontSize: 22,
    fontWeight: Platform.OS === "android" ? "bold" : "600",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  textTab: {
    fontSize: 20,
    color: "gray",
    fontSize: 17,
    marginLeft: 60,

  },
  icons:{
    height: 150,
    width: 150,
    borderRadius: 50,
    marginLeft: 120,
    marginTop: -100
  },
  khac:{
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 20,
    height: 130,
    width: 390,
    marginLeft: 10,
    elevation: 9
  },
  text1: {
    color: "gray",
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16
  },
  text2: {
    color: "black",
    fontSize: 18,
    fontWeight: Platform.OS === "android" ? "bold" : "600",
    marginTop: 15,
     marginLeft: 20
  },
  text3: {
    color: "gray",
    marginTop: 40,
    marginLeft: 10
  },
  text4: {
    color: "black",
    marginLeft: -355,
    fontSize: 16,
    marginTop: 80
  },
  logo:{
    height: 40, 
    width: 40,
    marginLeft: 15,
    marginTop: 15
  },
  line1:{
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    width: 360,
    marginLeft: -205,
    marginBottom: 57
  },
  logo2:{
    height: 15, 
    width: 15,
    marginTop: 45,
    marginLeft: -140
  }
});
