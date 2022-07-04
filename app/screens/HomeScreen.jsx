import "react-native-gesture-handler";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  Animated,
  StyleSheet,
} from "react-native";
import BannerSlider from "../components/BannerSlider.jsx";
import BannerSliderMini from "../components/BannerSliderMini.jsx";
import BigMenu from "../components/BigMenu.jsx";
import SmallMenu from "../components/SmallMenu.jsx";
import HomeHeader from "../components/HomeHeader.jsx";
import HomeFooter from "../components/HomeFooter.jsx";

const HomeScreen = () => {
  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 76.2],
    outputRange: [0, -76.2],
  });
  const translateZI = scrollY.interpolate({
    inputRange: [0, 250, 250.2],
    outputRange: [0, 0, 1],
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
        snapToInterval={Platform.OS === "android" ? 270 : 288}
        snapToAlignment={"start"}
      >
        <BannerSlider />
        <SmallMenu scrollY={scrollY} />
        <BigMenu />
        <BannerSliderMini />
      </Animated.ScrollView>
      {/* HEADER */}
      <HomeFooter scrollY={scrollY} />

      <HomeHeader y={translateY} />

      {/* FOOTER */}

      <StatusBar style={"auto"} />
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FBFF",
    overflow: "hidden",
  },
  main: {
    marginHorizontal: 11.5,
    paddingTop: 76.2,
    zIndex: 0,
    elevation: 4,
  },
});
