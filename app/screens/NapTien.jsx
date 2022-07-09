import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Image, View, ScrollView, Platform, Text, SafeAreaView, StatusBar } from "react-native";

import NTHeader from "../components/NTHeader";

export default function NTHead(){
    return(
        <View>
            <NTHeader />
        </View>
    )
}


