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

import CTDenViHeader from "../components/CTDenViHeader";
import CTDenViMain from "../components/CTDenViMain";
import CTDenViFooter from "../components/CTDenViFooter";

export default function CTDenViPage(props) {
  const xacnhan = () => {
    props.navigation.navigate("xacnhan");
  };
  return (
    <View>
      <CTDenViHeader navigation={props.navigation} />
      <CTDenViMain
        name={props.name}
        xacnhan={xacnhan}
        balance={props.balance}
        accountInfo={props.accountInfo}
        setAmount={props.setAmount}
        setReceiver={props.setReceiver}
        navigation={props.navigation}
        accountList={props.accountList}
      />
      {/* <CTDenViFooter xacnhan={xacnhan} navigation={props.navigation} /> */}
    </View>
  );
}
