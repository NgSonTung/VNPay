import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Image, View, ScrollView, Platform, Text, SafeAreaView, StatusBar } from "react-native";

import XNHeader from "../components/XacNhanHeader";
import XNMain from "../components/XacNhanMain";
import XNFooter from "../components/XacNhanFooter";


export default function XNPage(props){
    return(
        <View>
            <XNHeader 
                goBack={props.navigation.goBack} 
                //balance={props.accountInfo.balance}
                balance={props.balance}            
            />
            <XNMain 
                name={props.name}
            />
            <XNFooter/>
        </View>
)}
