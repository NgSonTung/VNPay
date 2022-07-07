import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  Animated,
  StyleSheet,
  Alert,
  UIManager,
  findNodeHandle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
class LoginScreen extends Component {
  state = {};
  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* HEADER */}
        <View>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </View>
      </SafeAreaView>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FBFF",
    overflow: "hidden",
  },
});
