import "react-native-gesture-handler";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

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

import CTHeader from "../components/CTHeader";
import Tabs from "../components/CTMain";
import Searchbar1 from "../components/Searchbar1.jsx";
import Searchbar from "../components/Searchbar";

export default function CTPage(props) {
  const chuyentiendenvi = () => {
    props.navigation.navigate("chuyentiendenvi");
  };

  return (
    <View style={styles.container}>
      <CTHeader
        chuyentiendenvi={chuyentiendenvi}
        navigation={props.navigation}
      />
      <Searchbar1 />
      {/* <NavigationContainer> */}
      <Tabs />
      {/* </NavigationContainer> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
