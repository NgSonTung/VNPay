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
    <View>
      <CTHeader />

      <NavigationContainer>
          <Tabs />
      </NavigationContainer>
    </View>
  );
}
