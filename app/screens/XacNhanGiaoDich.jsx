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

import XNHeader from "../components/XacNhanHeader";
import XNMain from "../components/XacNhanMain";
import XNFooter from "../components/XacNhanFooter";

export default function XNPage(props) {
  const BackHome = () => {
    props.navigation.navigate("home");
  };

  return (
    <View>
      <XNHeader
        goBack={props.navigation.goBack}
        //balance={props.accountInfo.balance}
        balance={props.balance}
      />
      <XNMain
        accountInfo={props.accountInfo}
        receiver={props.receiver}
        sendAmount={props.sendAmount}
        name={props.name}
      />
      <XNFooter
        goBack={props.navigation.goBack}
        accountInfo={props.accountInfo}
        receiver={props.receiver}
        sendAmount={props.sendAmount}
        BackHome={BackHome}
        setAccountInfo={props.setAccountInfo}
      />
    </View>
  );
}
