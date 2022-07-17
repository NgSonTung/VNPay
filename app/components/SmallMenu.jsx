import React from "react";
import { StyleSheet, View, Platform, Animated } from "react-native";

const SmallMenu = (props) => {
  const animations = StyleSheet.create({
    firstBar: {
      shadowOpacity: props.scrollY.interpolate({
        inputRange: [0, 10],
        outputRange: [0.05, 0],
      }),
    },
    text: {
      opacity: props.scrollY.interpolate({
        inputRange: [0, 10, 250.2],
        outputRange: [1, 0, 0],
      }),
    },
    img1Height: {
      height: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [50, 50],
      }),
    },
    img2Height: {
      height: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [50, 43],
      }),
    },
    img3Height: {
      height: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [50, 36],
      }),
    },
    container: {
      marginTop: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [20, 30],
      }),
      flex: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [1, 0],
      }),
      borderRadius: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [0, 50],
      }),
      backgroundColor: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: ["white", "#E6F4FC"],
      }),
      marginLeft: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [0, 30],
      }),
      transform: [
        {
          translateX: props.scrollY.interpolate({
            inputRange: [0, 250.2],
            outputRange: [1, 5],
          }),
        },
      ],
      zIndex: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [0, 10],
      }),
    },
    imgTransformY: {
      transform: [
        {
          translateY: props.scrollY.interpolate({
            inputRange: [0, 250.2],
            outputRange: [1, 22],
          }),
        },
      ],
    },
  });
  return (
    <Animated.View
      ref={props.reference}
      style={[styles.firstBar, animations.firstBar]}
    >
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
    backgroundColor: "white",
    height: 90,
    width: "100%",
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
