import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    SafeAreaView,
    ScrollView
  } from "react-native";
import Searchbar from "./Searchbar";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function Khuyenmai() {
  return(
    <SafeAreaView>
      <ScrollView>
          <Text style={styles.texttime}> HÔM NAY, 11/07/2022</Text>
          <View style={styles.notification}>
            <Text style={styles.text}></Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}
function Giaodich() {
  return(
    <View style={styles.container}>
      <Image style={styles.icons } source={require("../assets/email.png")} />
      <Text style={styles.textTab}> Quý khách chưa có thông báo nào </Text>
    </View>
  )
}
function Biendong() {
  return(
    <View style={styles.container}>
      <Image style={styles.icons } source={require("../assets/email.png")} />
      <Text style={styles.textTab}> Quý khách chưa có thông báo nào </Text>
    </View>
  )
}
function Khac() {
  return(
    <SafeAreaView style={{marginBottom: 70}}>
    <ScrollView>
      <View style={styles.khac}>
        <Image style={styles.logo} source={require("../assets/unnamed.png")} />
        <Text style={styles.textcoupon1}>VISA50K - Giảm 50K cho đơn từ 199K khi sử dụng các dịch</Text>
        <Text style={styles.textcoupon2}>HSD: 06/12/2022</Text>
        <Text style={styles.textcoupon3}>SỬ DỤNG</Text>
        <View style={styles.line}/>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

function MyTab(){
  return(
    <Tab.Navigator>   
        <Tab.Screen name='Khuyến mại' 
          component = {Khuyenmai}
          opions={{ tabBarLabel: "Khuyến mại"}}>
        </Tab.Screen>
        <Tab.Screen name='Giao dịch' 
          component = {Giaodich}
          opions={{ tabBarLabel: "Giao dịch"}}>
        </Tab.Screen>
        <Tab.Screen name='Biến động số dư'
          component = {Biendong}
          opions={{ tabBarLabel: "Biến động"}}>
        </Tab.Screen>
        <Tab.Screen name='Khác' 
          component = {Khac}
          opions={{ tabBarLabel: "Khác"}}>
        </Tab.Screen>
    </Tab.Navigator>
  )
}

  const Notification = () => {
    return (
        <>
        <SafeAreaView background='white'>
          <Image style={styles.barIcons} source={require("../assets/back.png")} />
          <Text style={[styles.navDesc, styles.navIcons]}> Thông báo </Text>
            <View>
              <Searchbar />
            </View>
        </SafeAreaView>
        <NavigationContainer>
          <MyTab />
        </NavigationContainer>
        </>

    )
  }
  export default Notification;

  const styles = StyleSheet.create({
    barIcons: {
      margin:30, 
      marginTop: 50,
      resizeMode: "contain",
      height: 20,
      aspectRatio: 1
      
    },
    navDesc: {
      marginTop: -57,
      color: "#4f5964",
      textAlign: "center",
      fontSize: 22,
      fontWeight: Platform.OS === "android" ? "bold" : "600"
    },
    container:{
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
      marginTop: -90
    },
    textTab: {
      fontSize: 16,
      color: "gray",
      fontWeight: Platform.OS === "android" ? "normal" : "600",
      marginLeft: 80
    },
    icons: {
      width: 50,
      height: 50,
      marginLeft: 175,
      marginBottom: 20,
    },
    logo: {
      height: 40,
      width: 40,
    },
    khac:{
      flexDirection: "row",
      backgroundColor: "white",
      borderRadius: 20,
      marginTop: 20,
      height: 120,
      width: 370,
      marginLeft: 20,
      
    }
  })