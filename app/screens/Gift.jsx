import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  SafeAreaView,
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
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Searchbar1 from "../components/Searchbar1.jsx";
import { ScrollView } from "react-native-gesture-handler";

const Tab = createMaterialTopTabNavigator();

function Quatang() {
  return (
    <SafeAreaView style={{ marginBottom: 70 }}>
      <ScrollView>
        <View style={styles.coupon}>
          <Image style={styles.icon} source={require("../assets/Coupon.png")} />
          <Text style={styles.textcoupon1}>
            VISA50K - Giảm 50K cho đơn từ 199K khi sử dụng các dịch
          </Text>
          <Text style={styles.textcoupon2}>HSD: 06/12/2022</Text>
          <Text style={styles.textcoupon3}>SỬ DỤNG</Text>
          <View style={styles.line} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
function Magiamgia() {
  return (
    <View>
      <Searchbar1 />
    </View>
  );
}
function Dasudung() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTab}></Text>
    </View>
  );
}

function Tab1() {
  return (
    <Tab.Navigator style={{ marginTop: 15 }}>
      <Tab.Screen
        name="Quà tặng"
        component={Quatang}
        opions={{ tabBarLabel: "Quà tặng" }}
      ></Tab.Screen>
      <Tab.Screen
        name="Mã giảm giá QR"
        component={Magiamgia}
        opions={{ tabBarLabel: "Mã giảm giá" }}
      ></Tab.Screen>
      <Tab.Screen
        name="Đã sử dụng"
        component={Dasudung}
        opions={{ tabBarLabel: "Đã sử dụng" }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

const Gift = (props) => {
  const quaTang = () => {
    props.navigation.navigate("qua");
  };

  const notification = () => {
    props.navigation.navigate("thongbao");
  };

  const home = () => {
    props.navigation.navigate("home");
  };
  return (
    <>
      <SafeAreaView style={styles.bar}>
        <Image
          style={styles.barIcons}
          source={require("../assets/filter.png")}
        />
        <Text style={[styles.barDesc]}> Quà của tôi </Text>
      </SafeAreaView>

      {/* <NavigationContainer > */}
      <Tab1 />
      {/* </NavigationContainer> */}

      <Animated.View style={[styles.bottomBar]}>
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
          <View
            style={[styles.navCont, styles.home, { opacity: 0.6 }]}
            onStartShouldSetResponder={home}
          >
            <Entypo
              name="home"
              size={24}
              color="black"
              style={styles.navIcons}
            />
            <Text style={[styles.navDesc, styles.navIcons]}>Trang chủ</Text>
          </View>
          <View
            style={[styles.navCont, styles.notif, { opacity: 0.6 }]}
            onStartShouldSetResponder={notification}
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
            style={[styles.navCont, styles.gift]}
            onStartShouldSetResponder={quaTang}
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
    </>
  );
};

export default Gift;

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
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  textTab: {
    fontSize: 20,
    color: "black",
  },
  barIcons: {
    height: 20,
    width: 20,
    marginLeft: 360,
    marginTop: 50,
    resizeMode: "contain",
    height: 20,
    aspectRatio: 1,
  },
  barDesc: {
    marginTop: -18,
    color: "#4f5964",
    textAlign: "center",
    fontSize: 20,
    fontWeight: Platform.OS === "android" ? "bold" : "600",
  },
  coupon: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 20,
    height: 120,
    width: 370,
    marginLeft: 20,
  },
  icon: {
    marginTop: 25,
    marginLeft: 6,
  },
  textcoupon1: {
    fontWeight: Platform.OS === "android" ? "bold" : "600",
    fontSize: 19,
    color: "#4f5964",
    marginLeft: 20,
    marginTop: 20,
    width: 260,
  },
  textcoupon2: {
    fontWeight: Platform.OS === "android" ? "bold" : "100",
    color: "lightgray",
    marginTop: 80,
    fontSize: 15,
    marginLeft: -260,
  },
  textcoupon3: {
    fontWeight: Platform.OS === "android" ? "bold" : "100",
    color: "#005eb0",
    marginLeft: 60,
    marginTop: -22,
    fontSize: 16,
    marginTop: 79,
  },
  line: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    transform: [{ rotate: "90deg" }],
    marginLeft: -280,
    marginTop: 10,
    width: 130,
  },
  bar: {
    backgroundColor: "white",
    height: 100,
    marginBottom: -20,
  },
});
