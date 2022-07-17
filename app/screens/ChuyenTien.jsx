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

export default function CTPage(props) {
  return (
    <View style={styles.container}>
      <CTHeader navigation={props.navigation} />

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
