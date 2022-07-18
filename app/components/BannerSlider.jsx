import React from "react";
import { StyleSheet, Image, View, ScrollView, Platform } from "react-native";

const banners = [
  "https://vidientu.vnpay.vn/images/web/banner/17f1b446c710000000000000294.png",
  "https://vidientu.vnpay.vn/images/web/banner/181615fd1e40000000000000006.jpeg",
  "https://vidientu.vnpay.vn/images/web/banner/17f1b446c710000000000000321.jpeg",
];

const imgConHeight = 144;
const imgConWidth = 380;
const imgHeight = imgConHeight;
const imgWidth = 368;
const margin = (imgConWidth - imgWidth) / 2;

class BannerSlider extends React.Component {
  _isMounted = false;
  timeout = 0;
  constructor(props) {
    super(props);
    this.state = { active: 0, isLoadings: true };
  }

  scrollRef = React.createRef();

  componentDidMount = () => {
    this._isMounted = true;
    if (this._isMounted) {
      this.timeout = setInterval(() => {
        this.setState(
          (prev) => ({
            active: prev.active === banners.length - 1 ? 0 : prev.active + 1,
          }),
          () => {
            this.scrollRef.current.scrollTo({
              animated: true,
              y: 0,
              x: imgConWidth * this.state.active,
            });
          }
        );
      }, 5000);
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.timeout);
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };
  render() {
    return (
      <View style={{ marginTop: 17, zIndex: 0 }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          onScroll={this.change}
          scrollEventThrottle={30}
          style={styles.scrollView}
          ref={this.scrollRef}
        >
          {banners.map((banner, index) => (
            <Image key={index} source={{ uri: banner }} style={styles.img} />
          ))}
        </ScrollView>
        <View style={styles.counterP}>
          {banners.map((i, k) => (
            <View
              key={k}
              style={
                k == this.state.active
                  ? styles.counterCActive
                  : styles.counterCInactive
              }
            />
          ))}
        </View>
      </View>
    );
  }
}

export default BannerSlider;

const styles = StyleSheet.create({
  scrollView: {
    width: imgConWidth,
    height: imgConHeight,
    alignSelf: "center",
  },
  img: {
    width: imgWidth,
    height: imgHeight,
    marginHorizontal: margin,
    resizeMode: "contain",
    borderRadius: 20,
  },
  counterP: {
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
    alignSelf: "center",
  },
  counterCInactive: {
    backgroundColor: "#9c9c9c",
    opacity: 0.8,
    height: 3,
    width: 20,
    marginHorizontal: 2.5,
  },
  counterCActive: {
    backgroundColor: "white",
    height: 2.5,
    width: 20,
    marginHorizontal: 2.5,
  },
});
