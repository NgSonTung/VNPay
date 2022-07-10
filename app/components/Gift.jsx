import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  SafeAreaView,
  Animated
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import SvgComponent from "../assets/bottomBar.jsx";
import { NavigationContainer } from "@react-navigation/native";
import Searchbar from "./Searchbar";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Searchbar1 from "./Searchbar1.jsx";

const Tab = createMaterialTopTabNavigator();

function Quatang() {
  return(
    <View style={styles.container}>
      <Text style={styles.textTab}>khuyenmai</Text>
    </View>
  )
}
function Magiamgia() {
  return(
        <View>
             <Searchbar1 />
        </View>
  )
}
function Dasudung() {
  return(
    <View style={styles.container}>
      <Text style={styles.textTab}>bien dong</Text>
    </View>
  )
}

function Tab1(){
  return(
    <Tab.Navigator style={{ marginTop:10 }}>   
        <Tab.Screen name='Quà tặng' 
          component = {Quatang}
          opions={{ tabBarLabel: "Quà tặng"}}>
        </Tab.Screen>
        <Tab.Screen name='Mã giảm giá QR' 
          component = {Magiamgia}
          opions={{ tabBarLabel: "Mã giảm giá"}}>
        </Tab.Screen>
        <Tab.Screen name='Đã sử dụng'
          component = {Dasudung}
          opions={{ tabBarLabel: "Dã sử dụng"}}>
        </Tab.Screen>
    </Tab.Navigator>
  )
}

const Gift = () => {
  return (

      <><SafeAreaView background='white'>
        <Image style={styles.barIcons} source={require("../assets/filter.png")} />
        <Text style={[styles.barDesc]}> Quà của tôi </Text>
     </SafeAreaView>

     <NavigationContainer >
        <Tab1 />
      </NavigationContainer>

      <Animated.View style={[styles.bottomBar]}>
        <SvgComponent width={414} height={63.48} />
        <View style={styles.qrContainer}>
          <MaterialCommunityIcons
            style={styles.qrIcon}
            name="qrcode-scan"
            size={24}
            color="white" />
        </View>
        <View style={styles.navMenu}>
          <View style={[styles.navCont, styles.home]}>
            <Entypo name="home" size={24} color="black" style={styles.navIcons} />
            <Text style={[styles.navDesc, styles.navIcons]}>Trang chủ</Text>
          </View>
          <View style={[styles.navCont, styles.notif]}>
            <MaterialIcons
              name="mail-outline"
              size={24}
              color="black"
              style={styles.navIcons} />
            <Text style={[styles.navDesc, styles.navIcons]}>Thông báo</Text>
          </View>
          <Image
            resizeMode={"contain"}
            style={styles.qrLogo}
            source={require("../assets/logoQR.png")} />
          <View style={[styles.navCont, styles.shop]}>
            <Feather
              name="shopping-cart"
              size={24}
              color="black"
              style={styles.navIcons} />
            <Text style={[styles.navDesc, styles.navIcons]}>Mua sắm</Text>
          </View>
          <View style={[styles.navCont, styles.gift]}>
            <SimpleLineIcons
              name="present"
              size={23}
              color="black"
              style={styles.navIcons} />
            <Text style={[styles.navDesc, styles.navIcons]}>Quà của tôi</Text>
          </View>
        </View>
      </Animated.View>
      </>
  )
};

export default Gift;

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    bottom: -4,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  qrContainer: {
    flex: 1,
    backgroundColor: "#005AAB",
    width: 53,
    height: 53,
    bottom: 39,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  navMenu: {
    position: "absolute",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  navIcons: {
    color: "white",
  },
  navDesc: {
    color: "white",
    fontSize: 10.5,
    fontWeight: Platform.OS === "android" ? "bold" : "600",
  },
  navCont: {
    flex: 1,
    alignItems: "center",
  },
  home: {
    marginLeft: -30,
  },
  notif: {
    marginLeft: -60,
  },
  shop: {
    marginRight: -60,
  },
  gift: {
    marginRight: -30,
  },
  qrLogo: {
    width: 55,
    aspectRatio: 3,
  },
  container:{
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  textTab: {
    fontSize: 20,
    color: "black"
  },
  barIcons:{
    height: 20,
    width: 20,
    marginLeft: 315,
    marginTop: 50,
    resizeMode: "contain",
    height: 20,
    aspectRatio: 1
    
  },
  barDesc: {
    marginTop: -18,
    color: "#4f5964",
    textAlign: "center",
    fontSize: 18,
    fontWeight: Platform.OS === "android" ? "bold" : "600"
  }
});