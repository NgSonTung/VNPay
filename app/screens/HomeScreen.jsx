import "react-native-gesture-handler";
import React, { Componen, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  Animated,
  StyleSheet,
  Button,
  Text,
} from "react-native";
import { useSharedValue, useAnimatedStyle } from "react-native-reanimated";
import BannerSlider from "../components/BannerSlider.jsx";
import BannerSliderMini from "../components/BannerSliderMini.jsx";
import BigMenu from "../components/BigMenu.jsx";
import SmallMenu from "../components/SmallMenu.jsx";
import HomeHeader from "../components/HomeHeader.jsx";
import HomeFooter from "../components/HomeFooter.jsx";
import Load from "../components/Load";
import { updateBalance } from "../../firebase";

export default function HomeScreen(props) {
  const [eyeOn, setEye] = useState(false);
  const scrollY = new Animated.Value(0);

  const balanceHide = () => {
    eyeOn ? setEye(false) : setEye(true);
  };

  const logIn = () => {
    if (props.loggedIn == false) {
      props.navigation.navigate("login");
    }
  };
  const napTien = () => {
    if (props.loggedIn) props.navigation.navigate("naptien");
    else {
      props.navigation.navigate("naptien");
      props.navigation.navigate("login");
    }
  };
  const myQR = () => {
    if (props.loggedIn) props.navigation.navigate("myQR");
    else {
      props.navigation.navigate("myQR");
      props.navigation.navigate("login");
    }
  };
  const viGD = () => {
    if (props.loggedIn) props.navigation.navigate("viGD");
    else {
      props.navigation.navigate("viGD");
      props.navigation.navigate("login");
    }
  };
  const notification = () => {
    if (props.loggedIn) props.navigation.navigate("thongbao");
    else {
      props.navigation.navigate("thongbao");
      props.navigation.navigate("login");
    }
  };
  const chuyenTien = () => {
    if (props.loggedIn) props.navigation.navigate("chuyentien");
    else {
      props.navigation.navigate("chuyentien");
      props.navigation.navigate("login");
    }
  };
  const quaTang = () => {
    if (props.loggedIn) props.navigation.navigate("qua");
    else {
      props.navigation.navigate("qua");
      props.navigation.navigate("login");
    }
  };
  const menu = () => {
    if (props.loggedIn) props.navigation.navigate("menu");
    else {
      props.navigation.navigate("menu");
      props.navigation.navigate("login");
    }
  };

  return (
    <>
      <Load />
      <SafeAreaView style={styles.container}>
        {/* main */}
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={[
            styles.main,
            {
              zIndex: scrollY.interpolate({
                inputRange: [0, 250, 250.2],
                outputRange: [0, 0, 10],
              }),
            },
          ]}
          onScroll={(e) => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
          scrollEventThrottle={20}
          snapToInterval={Platform.OS === "android" ? 270 : 288}
          snapToAlignment={"start"}
          pagingEnabled
          stickyHeaderIndices={[0]}
        >
          {/* HEADER */}

          <HomeHeader
            screen={props.name}
            y={scrollY.interpolate({
              inputRange: [0, 76.2],
              outputRange: [0, -76.2],
              extrapolate: "clamp",
            })}
            scrollY={scrollY}
            balance={props.balance}
            eyeOn={eyeOn}
            handlePress={balanceHide}
            loggedIn={props.loggedIn}
            logIn={logIn}
            name={props.name}
            napTien={napTien}
            myQR={myQR}
            viGD={viGD}
            chuyenTien={chuyenTien}
            menu={menu}
          />
          <BannerSlider />
          <SmallMenu
            napTien={napTien}
            myQR={myQR}
            viGD={viGD}
            chuyenTien={chuyenTien}
            scrollY={scrollY}
          />
          <BigMenu scrollY={scrollY} />
          <BannerSliderMini />
        </Animated.ScrollView>

        {/* FOOTER */}
        <HomeFooter
          quaTang={quaTang}
          notification={notification}
          scrollY={scrollY}
        />

        <StatusBar hidden style={"auto"} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FBFF",
  },
});
