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

export default function CTDenViHeader(props) {
  return (
    <View>
      <View style={styles.headerSafeArea}>
        <View style={styles.headerCT}>
          <Ionicons
            onPress={() => props.navigation.goBack()}
            name="chevron-back-sharp"
            size={30}
            color="white"
            style={styles.headerCT_Backbtn}
          />
          <Text style={styles.headerCT_Text}>Nạp tiền vào ví </Text>
          <Text> </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // headerSafeArea: {
  //   paddingTop: StatusBar.currentHeight,
  //   backgroundColor: "#469cd8",
  // },

  headerCT: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#469cd8",
  },

  headerCT_Text: {
    color: "white",
    fontSize: 20,
    marginRight: 20,
  },

  headerCT_Backbtn: {
    marginLeft: 5,
  },
});
