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
  MaterialCommunityIcons,
  MaterialIcons,
  Foundation,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

const BigMenu = (props) => {
  const animations = StyleSheet.create({
    container: {
      zIndex: props.scrollY.interpolate({
        inputRange: [0, 250.2],
        outputRange: [0, 4],
      }),
    },
  });
  return (
    <Animated.View
      style={[
        styles.secondBar,
        animations.container,
        { marginHorizontal: 11.5 },
      ]}
    >
      <Text style={styles.trademark}>VNPAY</Text>

      <View style={styles.barRows}>
        <View style={styles.navCont}>
          <Image
            style={styles.barIcons}
            source={require("../assets/naptiendt.png")}
          />
          <Text style={styles.barDesc}>Nạp tiền điện thoại</Text>
        </View>
        <View style={styles.navCont}>
          <Image
            style={styles.barIcons}
            source={require("../assets/datvemb.png")}
          />
          <Text style={styles.barDesc}>Đặt vé máy bay</Text>
          <Text style={styles.hotTag}>HOT</Text>
        </View>
        <View style={styles.navCont}>
          <Image
            style={[styles.barIcons, { height: 40 }]}
            source={require("../assets/chat.png")}
          />
          <Text style={styles.barDesc}>Chat</Text>
        </View>
        <View style={styles.navCont}>
          <Image
            style={styles.barIcons}
            source={require("../assets/vnshop.png")}
          />
          <Text style={styles.barDesc}>Vnshop</Text>
        </View>
      </View>

      <View style={styles.barRows}>
        <View style={styles.navCont}>
          <Image
            style={styles.barIcons}
            source={require("../assets/muathe.png")}
          />
          <Text style={styles.barDesc}>Mua mã thẻ</Text>
        </View>
        <View style={styles.navCont}>
          <Image
            style={styles.barIcons}
            source={require("../assets/goitaxi.png")}
          />
          <Text style={styles.barDesc}>Gọi taxi</Text>
        </View>
        <View style={styles.navCont}>
          <Image
            style={styles.barIcons}
            source={require("../assets/vephim.png")}
          />
          <Text style={styles.barDesc}>Vé xem phim</Text>
          <Text style={styles.hotTag}>HOT</Text>
        </View>
        <View style={styles.navCont}>
          <MaterialIcons name="delivery-dining" size={48} color="#0E64AF" />
          <Text style={styles.barDesc}>Giao hàng</Text>
          <Text style={styles.hotTag}>HOT</Text>
        </View>
      </View>

      <View style={styles.barRows}>
        <View style={styles.navCont}>
          <Image
            style={styles.barIcons}
            source={require("../assets/tiendien.png")}
          />
          <Text style={styles.barDesc}>Tiền điện</Text>
        </View>
        <View style={styles.navCont}>
          <Image
            style={styles.barIcons}
            source={require("../assets/datphong.png")}
          />
          <Text style={styles.barDesc}>Đặt phòng khách sạn</Text>
          <Text style={styles.hotTag}>HOT</Text>
        </View>
        <View style={[styles.navCont, { alignSelf: "center" }]}>
          <Foundation name="ticket" size={40} color="#0E64AF" style={{}} />
          <Text style={styles.barDesc}>Thể thao - Giải trí</Text>
        </View>
        <View style={styles.navCont}>
          <MaterialCommunityIcons
            name="ticket-percent-outline"
            size={38}
            color="#0E64AF"
          />
          <Text style={styles.barDesc}>Voucher Dealtoday</Text>
        </View>
      </View>

      <View style={styles.barRows}>
        <View style={[styles.navCont, { alignSelf: "center" }]}>
          <Ionicons name="receipt-outline" size={40} color="#0E64AF" />
          <Text style={styles.barDesc}>Thanh toán hóa đơn</Text>
        </View>
        <View style={styles.navCont}>
          <Image
            style={styles.barIcons}
            source={require("../assets/datvetau.png")}
          />
          <Text style={styles.barDesc}>Đặt vé tàu</Text>
          <Text style={styles.hotTag}>HOT</Text>
        </View>
        <View style={styles.navCont}>
          <Image
            style={styles.barIcons}
            source={require("../assets/datvexe.png")}
          />
          <Text style={styles.barDesc}>Đặt vé xe</Text>
          <Text style={styles.hotTag}>HOT</Text>
        </View>
        <View style={[styles.navCont, { alignSelf: "center" }]}>
          <AntDesign name="creditcard" size={35} color="#0E64AF" />
          <Text style={styles.barDesc}>Mở tài khoản ngân hàng</Text>
        </View>
      </View>

      <View style={[styles.barRows, { marginBottom: 0, width: "50%" }]}>
        <View style={[styles.navCont, { alignSelf: "center" }]}>
          <Image
            style={[styles.barIcons, { height: 47 }]}
            source={require("../assets/bsv.png")}
          />
          <Text style={styles.barDesc}>Hôi viên Bông Sen Vàng</Text>
        </View>
        <View style={[styles.navCont, { alignSelf: "center" }]}>
          <Ionicons name="flower-outline" size={35} color="#0E64AF" />
          <Text style={styles.barDesc}>Đặt hoa</Text>
          <Text style={styles.hotTag}>HOT</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default BigMenu;

const styles = StyleSheet.create({
  secondBar: {
    backgroundColor: "white",
    paddingVertical: 17,
    borderRadius: 17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "android" ? 0.05 : 0.03,
    shadowRadius: 4,
    elevation: Platform.OS === "android" ? 1 : 0.5,
  },
  barRows: {
    flexDirection: "row",
    alignItems: "baseline",
    flexWrap: "wrap",
    backgroundColor: "white",
    width: "100%",
    marginBottom: 15,
  },
  barIcons: {
    resizeMode: "contain",
    height: 53,
    aspectRatio: 1,
  },
  barDesc: {
    fontSize: 10,
    textAlign: "center",
    paddingHorizontal: 5,
  },
  hotTag: {
    backgroundColor: "#F34E35",
    color: "#FFFF",
    height: 16,
    width: 27,
    fontSize: 9,
    fontWeight: "600",
    paddingTop: 2,
    borderRadius: 8,
    overflow: "hidden",
    textAlign: "center",
    textAlignVertical: "top",
    position: "absolute",
    top: 0,
    right: 7,
  },
  trademark: {
    fontSize: 85,
    fontWeight: "bold",
    position: "absolute",
    opacity: 0.03,
    top: -15,
    alignSelf: "center",
    zIndex: 10,
  },
  navCont: {
    flex: 1,
    alignItems: "center",
  },
});
