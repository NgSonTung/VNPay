import "react-native-gesture-handler";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";

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
  constructor() {
    super();
  }
  scrollY = new Animated.Value(0);
  logIn = () => {
    if (this.props.loggedIn == false) {
      this.props.navigation.navigate("login");
    }
  };
  napTien = () => {
    if (this.props.loggedIn) this.props.navigation.navigate("naptien");
    else {
      this.props.navigation.navigate("naptien");
      this.props.navigation.navigate("login");
    }
  };
  myQR = () => {
    if (this.props.loggedIn) this.props.navigation.navigate("myQR");
    else {
      this.props.navigation.navigate("myQR");
      this.props.navigation.navigate("login");
    }
  };
  viGD = () => {
    if (this.props.loggedIn) this.props.navigation.navigate("viGD");
    else {
      this.props.navigation.navigate("viGD");
      this.props.navigation.navigate("login");
    }
  };
  notification = () => {
    if (this.props.loggedIn) this.props.navigation.navigate("thongbao");
    else {
      this.props.navigation.navigate("thongbao");
      this.props.navigation.navigate("login");
    }
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
          pagingEnabled
        >
          <BannerSlider />
          <SmallMenu
            napTien={this.napTien}
            myQR={this.myQR}
            viGD={this.viGD}
            reference={(ref) => (this.view = ref)}
            scrollY={this.scrollY}
          />
          <BigMenu scrollY={this.scrollY} />
          <BannerSliderMini />
        </Animated.ScrollView>

        {/* HEADER */}

        <HomeHeader
          screen={this.props.name}
          y={this.scrollY.interpolate({
            inputRange: [0, 76.2],
            outputRange: [0, -76.2],
          })}
          scrollY={this.scrollY}
          balance={this.props.balance}
          eyeOn={this.props.eyeOn}
          handlePress={this.props.balanceHide}
          loggedIn={this.props.loggedIn}
          logIn={this.logIn}
          name={this.props.name}
        />

        {/* FOOTER */}
        <HomeFooter notification={this.notification} scrollY={this.scrollY} />

        <StatusBar hidden style={"auto"} />
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
