import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  Animated,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const HomeHeader = (props) => {
  const loggedIn = () => {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={styles.greet}>{props.name}</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.balance}>Số dư (VND):</Text>
          <Text style={styles.balanceValue}>
            {props.eyeOn ? currencyFormat(props.balance) : "******"}
          </Text>
          <View
            style={styles.eye}
            onStartShouldSetResponder={props.handlePress}
          >
            <Ionicons
              style={[styles.eyeOn, { display: props.eyeOn ? "flex" : "none" }]}
              name="eye"
              size={22}
              color="#FFAA4F"
            />
            <Ionicons
              style={[
                styles.eyeOff,
                { display: props.eyeOn ? "none" : "flex" },
              ]}
              name="eye-off-sharp"
              size={22}
              color="#FFAA4F"
            />
          </View>
        </View>
      </View>
    );
  };
  const loggedOut = () => {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={styles.greet}>Xin chào!</Text>
        <Text onPress={() => props.logIn} style={styles.loggedOut}>
          Đăng nhập/Đăng kí
        </Text>
      </View>
    );
  };
  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <Animated.View
      style={[
        styles.header,
        {
          zIndex: props.scrollY.interpolate({
            inputRange: [0, 250, 250.2],
            outputRange: [0, 0, 5],
          }),
        },
      ]}
    >
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [{ translateY: props.y }],
            width: "100%",
          },
        ]}
      >
        <View>
          <Image
            style={styles.avatar}
            source={require("../assets/avatar2.png")}
          />
          <Image
            style={styles.avatarRing}
            source={require("../assets/avatarRing.png")}
          />
        </View>
        <View style={styles.loginBar}>
          {props.loggedIn ? loggedIn() : loggedOut()}
        </View>
        <Image style={styles.logo} source={require("../assets/logo2.png")} />
      </Animated.View>
    </Animated.View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    width: "100%",
    zIndex: -1,
    elevation: 2,
    top: 0,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: Platform.OS === "android" ? 0.05 : 0.03,
    shadowRadius: 4,
  },
  animatedView: {
    flexDirection: "row",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  avatarRing: {
    width: 52,
    height: 52,
    left: -3.7,
    top: -3.7,
    position: "absolute",
    opacity: 0.4,
  },
  greet: {
    fontWeight: "bold",
    fontSize: Platform.OS === "android" ? 18 : 18.5,
  },
  loginBar: {
    marginLeft: 15,
  },
  balance: {
    fontWeight: "500",
    fontSize: Platform.OS === "android" ? 14 : 14,
    color: "black",
    marginTop: Platform.OS === "android" ? 1 : 3,
    letterSpacing: 0.3,
  },
  balanceValue: {
    marginLeft: 2,
    fontWeight: "500",
    fontSize: Platform.OS === "android" ? 14.5 : 14,
    color: "blue",
    marginTop: Platform.OS === "android" ? 1 : 3,
  },
  logo: {
    width: 76,
    height: 76,
    position: "absolute",
    right: -10,
    top: 0,
  },
  eye: {
    marginLeft: 7,
  },
  eyeOn: {
    position: "absolute",
  },
  eyeOff: {
    position: "absolute",
  },
  loggedOut: {
    color: "#005AAB",
    fontWeight: "bold",
    fontSize: 17,
  },
});
