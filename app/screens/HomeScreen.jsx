import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  Dimensions,
  Text,
  Image,
  Alert,
  View,
  Button,
  StatusBar,
  ScrollView,
  Animated,
  Platform,
} from "react-native";
import SvgComponent from "../assets/bottomBar.jsx";
import styles from "./HomeScreenStyles.jsx";
import {
  SimpleLineIcons,
  Feather,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  Foundation,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import BannerSlider from "../components/BannerSlider.jsx";
import BannerSliderMini from "../components/BannerSliderMini.jsx";
import BigMenu from "../components/BigMenu.jsx";
import SmallMenu from "../components/SmallMenu.jsx";
import HomeHeader from "../components/HomeHeader.jsx";

const HomeScreen = () => {
  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 76.2],
    outputRange: [0, -76.2],
  });
  const translateZI = scrollY.interpolate({
    inputRange: [0, 250, 250.2],
    outputRange: [0, 0, 10],
  });
  const translateZI2 = scrollY.interpolate({
    inputRange: [0, 250, 250.2],
    outputRange: [0, 0, 20],
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* main */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.main, { zIndex: translateZI }]}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={20}
        snapToInterval={270}
        snapToAlignment={"start"}
      >
        <BannerSlider />
        <SmallMenu scrollY={scrollY} />
        <BigMenu />
        <BannerSliderMini />
      </Animated.ScrollView>
      {/* HEADER */}
      <HomeHeader y={translateY} />

      {/* FOOTER */}
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
            <Entypo
              name="home"
              size={24}
              color="black"
              style={styles.navIcons}
            />
            <Text style={[styles.navDesc, styles.navIcons]}>Trang chủ</Text>
          </View>
          <View style={[styles.navCont, styles.notif]}>
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
          <View style={[styles.navCont, styles.shop]}>
            <Feather
              name="shopping-cart"
              size={24}
              color="black"
              style={styles.navIcons}
            />
            <Text style={[styles.navDesc, styles.navIcons]}>Mua sắm</Text>
          </View>
          <View style={[styles.navCont, styles.gift]}>
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
      <StatusBar style={"auto"} />
    </SafeAreaView>
  );
};
export default HomeScreen;
