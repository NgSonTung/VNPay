import "react-native-gesture-handler";
import React, { Component } from "react";
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

class HomeScreen extends Component {
  state = {
    balance: 1234,
    eyeOn: false,
  };

  constructor() {
    super();
  }

  scrollY = new Animated.Value(0);

  balanceHide = () => {
    this.state.eyeOn
      ? this.setState({ eyeOn: false })
      : this.setState({ eyeOn: true });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* main */}
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={[
            styles.main,
            {
              zIndex: this.scrollY.interpolate({
                inputRange: [0, 250, 250.2],
                outputRange: [0, 0, 10],
              }),
            },
          ]}
          onScroll={(e) => {
            this.scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
          scrollEventThrottle={20}
          snapToInterval={Platform.OS === "android" ? 270 : 288}
          snapToAlignment={"start"}
        >
          <BannerSlider />
          <SmallMenu scrollY={this.scrollY} />
          <BigMenu scrollY={this.scrollY} />
          <BannerSliderMini />
        </Animated.ScrollView>
        {/* HEADER */}

        <HomeHeader
          y={this.scrollY.interpolate({
            inputRange: [0, 76.2],
            outputRange: [0, -76.2],
          })}
          scrollY={this.scrollY}
          balance={this.state.balance}
          eyeOn={this.state.eyeOn}
          handlePress={this.balanceHide}
        />

        {/* FOOTER */}
        <HomeFooter scrollY={this.scrollY} />

        <StatusBar style={"auto"} />
      </SafeAreaView>
    );
  }
}
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
