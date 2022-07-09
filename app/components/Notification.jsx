
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    Animated,
    SafeAreaView,
    ScrollView
  } from "react-native";
import Searchbar from "./Searchbar";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const a = () => {
  return(
    <View style={styles.container}>
        <Text style={styles.text} >Khuyến mại</Text>
    </View>
  )
}
const b = () => {
  return(
    <View style={styles.container}>
        <Text style={styles.text} >Giao dịch</Text>
    </View>
  )
}
const c = () => {
  return(
    <View style={styles.container}>
        <Text style={styles.text} >Biến động số dư</Text>
    </View>
  )
}
const d = () => {
  return(
    <View style={styles.container}>
        <Text style={styles.text} >Khác</Text>
    </View>
  )
}

  const Notification = () => {
    return (
      <View> 
          <SafeAreaView background = 'white' >
            <Image style={styles.barIcons} source={require("../assets/back.png")}/>
            <Text  style={[styles.navDesc, styles.navIcons]}> Thông báo </Text>
            <View>
              <Searchbar/>
            </View>
            <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen name='Khuyenmai' component = {a}></Tab.Screen>
                <Tab.Screen name='Giaodich' component = {b}></Tab.Screen>
                <Tab.Screen name='Biendong' component = {c}></Tab.Screen>
                <Tab.Screen name='Khac' component = {d}></Tab.Screen>
              </Tab.Navigator>
            </NavigationContainer>
          </SafeAreaView>

          <View style={{height :'100%'}} > 
            <ScrollView style={[styles.scollview]}>
              <View>

              </View>
            </ScrollView>
          </View>
      </View>
    )
  }
  export default Notification;

  const styles = StyleSheet.create({
    barIcons: {
      margin:30, 
      marginTop: 50,
      resizeMode: "contain",
      height: 20,
      aspectRatio: 1,
      
    },
    navDesc: {
      marginTop: -57,
      color: "#4f5964",
      textAlign: "center",
      fontSize: 22,
      fontWeight: Platform.OS === "android" ? "bold" : "600",
    },
    scollview:{
      marginTop: 50,
      backgroundColor: "#f8f9fa"
    },
    notion:{
      
    }
  });