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
import { FontAwesome } from '@expo/vector-icons';

export default function ChatHeader(props) {
  return (
    <View>
      <View style={styles.headerSafeArea}>
        <View style={styles.headerCT}>
          <Ionicons
            onPress={() => props.navigation.goBack()}
            name="chevron-back-sharp"
            size={30}
            color="black"
            style={styles.headerCT_Backbtn}
          />
          <Text style={styles.headerCT_Text}>Chat </Text>
          <FontAwesome name="pencil-square-o" size={24} color="#255aa4" />
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
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
  },

  headerCT_Text: {
    color: "black",
    fontSize: 20,
    // marginRight: 20,
  },

  headerCT_Backbtn: {
    marginLeft: 5,
  },
});
