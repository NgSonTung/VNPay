import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  Animated,
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import SvgComponent from "../assets/bottomBar.jsx";

const HomeFooter = (props) => {
  const translateZI2 = props.scrollY.interpolate({
    inputRange: [0, 250, 250.2],
    outputRange: [0, 0, 20],
  });

  return (
    <Animated.View style={[styles.bottomBar, { zIndex: translateZI2 }]}>
      <SvgComponent width={414} height={63.48} />
      <View style={styles.qrContainer}>
        <MaterialCommunityIcons
          style={styles.qrIcon}
          name="qrcode-scan"
          size={24}
          color="white"
        />
      </View>
      <View style={styles.navMenu}>
        <View style={[styles.navCont, styles.home]}>
          <Entypo name="home" size={24} color="black" style={styles.navIcons} />
          <Text style={[styles.navDesc, styles.navIcons]}>Trang chủ</Text>
        </View>
        <View
          onStartShouldSetResponder={props.notification}
          style={[styles.navCont, styles.notif, { opacity: 0.6 }]}
        >
          <MaterialIcons
            name="mail-outline"
            size={24}
            color="black"
            style={styles.navIcons}
          />
          <Text style={[styles.navDesc, styles.navIcons]}>Thông báo</Text>
        </View>
        <Image
          resizeMode={"contain"}
          style={styles.qrLogo}
          source={require("../assets/logoQR.png")}
        />
        <View style={[styles.navCont, styles.shop, { opacity: 0.6 }]}>
          <Feather
            name="shopping-cart"
            size={24}
            color="black"
            style={styles.navIcons}
          />
          <Text style={[styles.navDesc, styles.navIcons]}>Mua sắm</Text>
        </View>
        <View
          style={[styles.navCont, styles.gift, { opacity: 0.6 }]}
          onStartShouldSetResponder={props.quaTang}
        >
          <SimpleLineIcons
            name="present"
            size={23}
            color="black"
            style={styles.navIcons}
          />
          <Text style={[styles.navDesc, styles.navIcons]}>Quà của tôi</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default HomeFooter;

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    bottom: -4,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  qrContainer: {
    flex: 1,
    backgroundColor: "#005AAB",
    width: 53,
    height: 53,
    bottom: 39,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  navMenu: {
    position: "absolute",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  navIcons: {
    color: "white",
  },
  navDesc: {
    color: "white",
    fontSize: 10.5,
    fontWeight: Platform.OS === "android" ? "bold" : "600",
  },
  navCont: {
    flex: 1,
    alignItems: "center",
  },
  home: {
    marginLeft: -30,
  },
  notif: {
    marginLeft: -60,
  },
  shop: {
    marginRight: -60,
  },
  gift: {
    marginRight: -30,
  },
  qrLogo: {
    width: 55,
    aspectRatio: 3,
  },
});
