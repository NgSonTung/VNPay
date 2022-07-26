import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  Animated,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeHeader = (props) => {
  const animation = StyleSheet.create({
    transform: {
      transform: [
        {
          translateY: props.y,
        },
      ],
    },
    menu: {
      right: props.scrollY.interpolate({
        inputRange: [0, 250],
        outputRange: [-400, 0],
        extrapolate: "clamp",
      }),
    },
  });
  const loggedIn = (props) => {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={[styles.greet, { textTransform: "uppercase" }]}>
          {props.name}
        </Text>
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
        <Text onPress={props.logIn} style={styles.loggedOut}>
          Đăng nhập/Đăng kí
        </Text>
      </View>
    );
  };
  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <Animated.View style={[styles.header]}>
      <Animated.View style={styles.animatedView}>
        <Animated.View style={[styles.iconCont, animation.menu]}>
          <Image
            onStartShouldSetResponder={props.menu}
            style={styles.avatarIcon}
            source={require("../assets/avatar2.png")}
          />

          <View
            style={styles.iconBgr}
            onStartShouldSetResponder={props.napTien}
          >
            <Image
              style={styles.icon}
              source={require("../assets/naptien.png")}
            />
          </View>
          <View
            style={[styles.iconBgr, { backgroundColor: "#FEEDEA" }]}
            onStartShouldSetResponder={props.viGD}
          >
            <Image style={styles.icon} source={require("../assets/viGD.png")} />
          </View>
          <View
            style={styles.iconBgr}
            onStartShouldSetResponder={props.chuyenTien}
          >
            <Image
              style={styles.icon}
              source={require("../assets/chuyentien.png")}
            />
          </View>
          <View style={styles.iconBgr} onStartShouldSetResponder={props.myQR}>
            <Image style={styles.icon} source={require("../assets/myQR.png")} />
          </View>
        </Animated.View>
        <Animated.View
          style={animation.transform}
          onStartShouldSetResponder={props.menu}
        >
          <Image
            style={[styles.avatar]}
            source={require("../assets/avatar2.png")}
          />
          <Image
            style={[styles.avatarRing]}
            source={require("../assets/avatarRing.png")}
          />
        </Animated.View>
        <Animated.View style={[styles.loginBar, animation.transform]}>
          {props.loggedIn ? loggedIn(props) : loggedOut(props)}
        </Animated.View>
        <Animated.Image
          style={[styles.logo, animation.transform]}
          source={require("../assets/logo2.png")}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 76.2,
    zIndex: 0,
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
    width: "100%",
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
  iconCont: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    position: "absolute",
  },
  iconBgr: {
    justifyContent: "center",
    alignSelf: "center",
    padding: 4,
    marginHorizontal: 17,
    borderRadius: 100,
    backgroundColor: "#E6F3FC",
  },
  icon: {
    width: 32,
    height: 32,
  },
  avatarIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 17,
  },
});
