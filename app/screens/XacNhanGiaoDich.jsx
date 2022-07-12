import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Image, View, ScrollView, Platform, Text, SafeAreaView, StatusBar } from "react-native";

import XNHeader from "../components/XacNhanHeader";
import XNMain from "../components/XacNhanMain";
import XNFooter from "../components/XacNhanFooter";


export default function XNPage(){
    return(
        <View>
            <XNHeader />
            <XNMain />
            <XNFooter/>
        </View>
)}
