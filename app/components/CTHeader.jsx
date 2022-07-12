import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Platform,
  Text,
  StatusBar,
  color,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default function CTHeader(){    
    return (
      <View>
          <View style={styles.headerSafeArea}>
            <View style={styles.headerCT}>
                <Ionicons
                name="chevron-back-sharp"
                size={30}
                color="white"
                style={styles.headerCT_Backbtn}
                />
                <Text style={styles.headerCT_Text}>Nạp tiền vào ví </Text>
                <Text> </Text>
            </View>
            </View>
  
            <View style={styles.headerCT_Balance}>
                <Image
                    source={require("../assets/Vnpay_Logo.png")}
                    style={styles.icon}
                />
                <View>
                    <View style={styles.ChuyenTienContainer}>
                        <Text style={styles.VNP}>Chuyển tiền đến ví</Text>
                        <Text style={styles.FreeTag}>Miễn phí</Text>
                    </View>

                    <View style={styles.Money}>
                    <Text style={styles.Currentcy}>Chuyển tiền cho một hoặc nhiều người trên ví</Text>
                    </View>
                </View>
          </View>

      </View>
    );
  }

  
  const styles = StyleSheet.create({
    headerSafeArea: {
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#469cd8",
    },
  
    headerCT: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
    },
  
    headerCT_Text: {
      color: "white",
      fontSize: 20,
      marginRight: 20,
    },
  
    headerCT_Backbtn: {
      marginLeft: 5,
    },
  
    icon: {
      width: 60,
      height: 60,
      marginRight: 10,
    },
  
    headerCT_Balance: {
      flexDirection: "row",
      height: 110,
      alignItems: "center",
      paddingLeft: 10,
      borderBottomWidth: 10,
      borderBottomColor: "#f7f6f6",
      backgroundColor: 'white',
    },
  
    ChuyenTienContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    FreeTag:{
        borderColor: "#54b479",
        borderRadius: 25,
        backgroundColor: "#54b479",
        padding: 3.5,
        color: 'white',
        marginLeft: 5,
        marginTop: 5,
    },
    VNP: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 5,
    },
  
    Money: {
      flexDirection: "row",
    },
    Currentcy: {
      color: "grey",
    },
    border:{
        marginLeft: 5,
        marginRight: 5,
        borderBottomColor: 'gainsboro',
        borderTopColor: 'gainsboro',
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
    },
    textTab: {
      fontSize: 20,
      color: "gray",
      fontSize: 17,
      marginLeft: 60,
  
    },
  
  });
  