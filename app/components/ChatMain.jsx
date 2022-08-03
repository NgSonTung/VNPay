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
import { Ionicons } from '@expo/vector-icons';


const Tab = createMaterialTopTabNavigator();

function TatCa() {
  return (
    <View style={styles.TextContainer}>
      <Ionicons name="person-circle-outline" size={90} color="black" style={styles.TabIcon}/>
      <Text style={styles.TextTab}>Chưa có bạn bè trên Ví VNPay</Text>
      <Text style={styles.TextTab}>Quý khách chưa có bạn bè nào trên ví VNPay hãy chia sẻ Ví VNPay với bạn bè để cùng nhau trải nghiệm nhiều tiện ích</Text>
      <Text style={styles.ShareBtn}>Chia sẻ</Text>
    </View>
  );
}
function BanBe() {
  return (
    <View>
      <Ionicons name="person-circle-outline" size={90} color="black" style={styles.TabIcon}/>
      <Text style={styles.TextTab}>Chưa có bạn bè trên Ví VNPay</Text>
      <Text style={styles.TextTab}>Quý khách chưa có bạn bè nào trên ví VNPay hãy chia sẻ Ví VNPay với bạn bè để cùng nhau trải nghiệm nhiều tiện ích</Text>
      <Text style={styles.ShareBtn}>Chia sẻ</Text>
    </View>
  );
}
function Nhom() {
    return (
      <View style={styles.TextContainer}>
      <Ionicons name="person-circle-outline" size={90} color="black" style={styles.TabIcon}/>
      <Text style={styles.TextTab}>Chưa có bạn bè trên Ví VNPay</Text>
      <Text style={styles.TextTab}>Quý khách chưa có bạn bè nào trên ví VNPay hãy chia sẻ Ví VNPay với bạn bè để cùng nhau trải nghiệm nhiều tiện ích</Text>
      <Text style={styles.ShareBtn}>Chia sẻ</Text>
      </View>
    );
  }
  function TinNhanCho() {
    return (
      <View>
      <Ionicons name="person-circle-outline" size={90} color="black" style={styles.TabIcon}/>
      <Text style={styles.TextTab}>Chưa có bạn bè trên Ví VNPay</Text>
      <Text style={styles.TextTab}>Quý khách chưa có bạn bè nào trên ví VNPay hãy chia sẻ Ví VNPay với bạn bè để cùng nhau trải nghiệm nhiều tiện ích</Text>
      <Text style={styles.ShareBtn}>Chia sẻ</Text>
      </View>
    );
  }
  

const Tabss = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Tất cả" component={TatCa} style={styles.GDGanDay}/>
      <Tab.Screen name="Bạn bè" component={BanBe}/>
      <Tab.Screen name="Nhóm" component={Nhom} style={styles.GDGanDay}/>
      <Tab.Screen name="Tin nhắn chờ" component={TinNhanCho}/>
    </Tab.Navigator>
  )
}

export default Tabss;

const styles = StyleSheet.create({
  GDGanDay:{
    backgroundColor: 'white',
  },
  TextContainer:{
  },
  TextTab:{
    textAlign: 'center',
    fontSize: 16,
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
  },
  TabIcon:{
    textAlign: 'center',
    marginTop: "15%",
  },
  ShareBtn:{
    textAlign: 'center',
    flexDirection: 'row',
    textAlignVertical: 'center',
    borderColor: '#1569a3',
    height: 40,
    borderWidth: 3,
    borderRadius: 25,
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: "5%",
    fontSize: 16,
    color: '#1569a3',

  }
})
