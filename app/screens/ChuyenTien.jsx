import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Image, View, ScrollView, Platform, Text, SafeAreaView, StatusBar } from "react-native";

import CTHeader from "../components/CTHeader";

export default function CTHead(){
    return(
        <View>
            <CTHeader />
        </View>
    )
}


