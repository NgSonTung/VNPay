import React from "react";
import { StyleSheet, View, Platform, Animated } from "react-native";

const SmallMenu = (props) => {
  const animations = StyleSheet.create({
    firstBar: {
      shadowOpacity: props.scrollY.interpolate({
        inputRange: [0, 10],
        outputRange: [0.05, 0],
        extrapolate: "clamp",
      }),
    },
    text: {
      opacity: props.scrollY.interpolate({
        inputRange: [0, 10, 250.2],
        outputRange: [1, 0, 0],
        extrapolate: "clamp",
      }),
    },
    img1Height: {
      height: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [50, 50],
        extrapolate: "clamp",
      }),
    },
    img2Height: {
      height: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [50, 43],
        extrapolate: "clamp",
      }),
    },
    img3Height: {
      height: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [50, 36],
        extrapolate: "clamp",
      }),
    },
    container: {
      marginTop: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [20, 30],
        extrapolate: "clamp",
      }),
      flex: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [1, 0],
        extrapolate: "clamp",
      }),
      borderRadius: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [0, 50],
      }),
      backgroundColor: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: ["white", "#E6F4FC"],
        extrapolate: "clamp",
      }),
      marginLeft: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [0, 30],
        extrapolate: "clamp",
      }),
      transform: [
        {
          translateX: props.scrollY.interpolate({
            inputRange: [0, 250.2],
            outputRange: [1, 5],
            extrapolate: "clamp",
          }),
        },
      ],
    },
    imgTransformY: {
      transform: [
        {
          translateY: props.scrollY.interpolate({
            inputRange: [0, 250.2],
            outputRange: [1, 22],
            extrapolate: "clamp",
          }),
        },
      ],
    },
  });
  return (
    <Animated.View style={[styles.firstBar, animations.firstBar]}>
      <Animated.View style={[styles.animated]}>
        <Animated.View
          onStartShouldSetResponder={props.napTien}
          style={[styles.navCont, styles.napTien, animations.container]}
        >
          <Animated.Image
            style={[
              styles.firstBarIcon1,
              animations.imgTransformY,
              animations.img1Height,
            ]}
            source={require("../assets/naptien.png")}
          />
          <Animated.Text style={[styles.firstBarDesc, animations.text]}>
            Nạp tiền vào Ví
          </Animated.Text>
        </Animated.View>
        <Animated.View
          style={[styles.navCont, styles.viGD, animations.container]}
          onStartShouldSetResponder={props.viGD}
        >
          <Animated.Image
            source={require("../assets/viGD.png")}
            style={[
              styles.firstBarIcon2,
              animations.imgTransformY,
              animations.img2Height,
            ]}
          />
          <Animated.Text style={[styles.firstBarDesc, animations.text]}>
            Ví gia đình
          </Animated.Text>
        </Animated.View>
        <Animated.View
          style={[styles.navCont, styles.chuyenTien, animations.container]}
          onStartShouldSetResponder={props.chuyenTien}
        >
          <Animated.Image
            style={[
              styles.firstBarIcon3,
              animations.imgTransformY,
              animations.img2Height,
            ]}
            source={require("../assets/chuyentien.png")}
          />
          <Animated.Text style={[styles.firstBarDesc, animations.text]}>
            Chuyển tiền
          </Animated.Text>
        </Animated.View>
        <Animated.View
          onStartShouldSetResponder={props.myQR}
          style={[styles.navCont, styles.myQR, animations.container]}
        >
          <Animated.Image
            style={[
              styles.firstBarIcon4,
              animations.imgTransformY,
              animations.img3Height,
            ]}
            source={require("../assets/myQR.png")}
          />
          <Animated.Text style={[styles.firstBarDesc, animations.text]}>
            QR của tôi
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default SmallMenu;

const styles = StyleSheet.create({
  firstBar: {
    marginHorizontal: 11.5,
    backgroundColor: "white",
    height: 90,
    borderRadius: 17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "android" ? 0.05 : 0.03,
    shadowRadius: 4,
    marginVertical: 17,
  },
  firstBarIcon1: {
    resizeMode: "contain",
    height: 55,
    aspectRatio: 1,
  },
  firstBarIcon2: {
    resizeMode: "contain",
    height: 50,
    aspectRatio: 1,
  },
  firstBarIcon3: {
    resizeMode: "contain",
    height: 50,
    aspectRatio: 1,
  },
  firstBarIcon4: {
    resizeMode: "contain",
    height: 42,
    aspectRatio: 1,
  },
  firstBarDesc: {
    fontSize: 12,
    fontWeight: Platform.OS === "android" ? "600" : "700",
  },
  navCont: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
    width: 50,
    height: 50,
  },
  animated: {
    flexDirection: "row",
    alignItems: "baseline",
  },
});
