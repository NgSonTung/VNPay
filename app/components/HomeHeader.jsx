import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  Animated,
} from "react-native";

const HomeHeader = (props) => {
  return (
    <View style={styles.header}>
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
          <Text style={styles.greet}>Xin chào!</Text>
          <Text style={styles.login}>Đăng nhập/Đăng ký</Text>
        </View>
        <Image style={styles.logo} source={require("../assets/logo2.png")} />
      </Animated.View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    width: "100%",
    zIndex: 5,
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
  login: {
    fontWeight: "bold",
    fontSize: Platform.OS === "android" ? 16 : 14,
    color: "#0C62AF",
    marginTop: Platform.OS === "android" ? 1 : 3,
    letterSpacing: 0.3,
  },
  logo: {
    width: 76,
    height: 76,
    position: "absolute",
    right: -10,
    top: 0,
  },
});
