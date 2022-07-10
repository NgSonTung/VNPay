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
    <View style={styles.container}>
      <Text style={styles.textTab}>khuyenmai</Text>
    </View>
  )
}
function Giaodich() {
  return(
    <View style={styles.container}>
      <Text style={styles.textTab}>giaodich</Text>
    </View>
  )
}
function Biendong() {
  return(
    <View style={styles.container}>
      <Text style={styles.textTab}>bien dong</Text>
    </View>
  )
}
function Khac() {
  return(
    <View style={styles.container}>
      <Text style={styles.textTab}>khac</Text>
    </View>
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
      alignContent: "center"
    },
    textTab: {
      fontSize: 20,
      color: "black"
    }
  })