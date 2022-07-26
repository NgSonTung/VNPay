import "react-native-gesture-handler";
import React, { Component } from "react";
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

import NTHeader from "../components/NTHeader";
import NTMain from "../components/NTMain";

export default function NTHead(props) {
  return (
    <View>
      <NTHeader
        goBack={props.navigation.goBack}
        //balance={props.accountInfo.balance}
        balance={props.balance}
      />
      <NTMain />
    </View>
  );
}
