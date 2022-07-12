import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Searchbar from "./Searchbar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function Giaodichganday() {
  return (
    <View>
      <Text>Test text 1</Text>
    </View>
  );
}
function DanhBa() {
  return (
    <View>
      <Text> Test Text 2 </Text>
    </View>
  );
}


const Tabs = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="GiaoDichGanDay" component={Giaodichganday}/>
      <Tab.Screen name="DanhBa" component={DanhBa}/>

    </Tab.Navigator>
  )
}

export default Tabs;