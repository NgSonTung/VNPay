import "react-native-gesture-handler";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Platform,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";

import Tabss from "../components/ChatMain";
import Searchbar from "../components/Searchbar";
import ChatHeader from "../components/ChatHeader";
import ChatFooter from "../components/ChatFooter";

export default function ChatPage() {
//   const chuyentiendenvi = () => {
//     props.navigation.navigate("chuyentiendenvi");
//   };

  return (
    <View style={styles.container}>
        <ChatHeader/>
        <Searchbar />
        <NavigationContainer>
          <Tabss />
        </NavigationContainer>
        <ChatFooter />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
