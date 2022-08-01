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
import Searchbar1 from "../components/Searchbar1.jsx";


const Tab = createMaterialTopTabNavigator();

function Giaodichganday() {
  return (
    <View style={styles.TextContainer}>
            <Searchbar1 />
      <Text style={styles.TextTab}>Quý khách chưa có giao dịch nào gần đây</Text>
    </View>
  );
}
function DanhBa() {
  return (
    <View>
            <Searchbar1 />
      <Text style={styles.TextTab}>Quý khách chưa có bạn bè nào được lưu trong danh sách thụ hưởng</Text>
    </View>
  );
}


const Tabs = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Giao dịch gần đây" component={Giaodichganday} style={styles.GDGanDay}/>
      <Tab.Screen name="Danh bạ" component={DanhBa}/>
    </Tab.Navigator>
  )
}

export default Tabs;

const styles = StyleSheet.create({
  GDGanDay:{
    backgroundColor: 'white',
  },
  TextContainer:{
  },
  TextTab:{
    textAlign: 'center',
    fontSize: 16,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "10%",
  }
})
