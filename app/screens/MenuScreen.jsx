import "react-native-gesture-handler";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from "react-native";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const MenuScreen = (props) => {
  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const [hidePassword, setHidePassword] = useState("true");
  const logOut = () => {
    props.setLogin(false);
    props.navigation.navigate("home");
    props.setAccountInfo({
      name: "",
      password: "",
      balance: "",
      number: "",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBG} />
      <View style={styles.header}>
        <MaterialIcons
          style={styles.returnBtn}
          name="arrow-back-ios"
          size={17}
          color="white"
          onPress={() => props.navigation.navigate("home")}
        />
        <View style={styles.uInfo}>
          <Text style={styles.uName}>{props.name}</Text>
          <View
            style={styles.eyeCont}
            onStartShouldSetResponder={() =>
              setHidePassword(() => (hidePassword ? false : true))
            }
          >
            <Ionicons
              style={[styles.hide, { display: hidePassword ? "none" : "flex" }]}
              name="eye"
              size={21}
              color="#CCE7F6"
            />
            <Ionicons
              style={[styles.hide, { display: hidePassword ? "flex" : "none" }]}
              name="eye-off-sharp"
              size={21}
              color="#CCE7F6"
            />
          </View>
          <View style={styles.balanceBar}>
            <AntDesign
              style={styles.wallet}
              name="wallet"
              size={26}
              color="white"
            />
            <Text style={styles.balance}>
              {" "}
              {!hidePassword
                ? `(VND) ${currencyFormat(props.balance)}`
                : "(VND) ********"}
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.avatar}
        resizeMode={"contain"}
        source={require("../assets/avatarwring.png")}
      />
      <ScrollView style={styles.main}>
        <View style={[styles.itemCont, { marginTop: 130 }]}>
          <Image
            style={styles.itemImg}
            resizeMode={"contain"}
            source={require("../assets/TK.png")}
          />
          <Text style={styles.itemDesc}>Tài khoản ví</Text>
          <MaterialIcons
            style={styles.forwardBtn}
            name="arrow-forward-ios"
            size={17}
            color="#4F4F4F"
          />
        </View>

        <View style={styles.itemCont}>
          <Image
            style={[styles.itemImg, { width: 65, height: 50 }]}
            resizeMode={"contain"}
            source={require("../assets/nganhang.png")}
          />
          <Text style={styles.itemDesc}>Ngân hàng liên kết</Text>
          <MaterialIcons
            style={styles.forwardBtn}
            name="arrow-forward-ios"
            size={17}
            color="#4F4F4F"
          />
        </View>

        <View style={styles.itemCont}>
          <Image
            style={[styles.itemImg, { width: 65, height: 50 }]}
            resizeMode={"contain"}
            source={require("../assets/lichsuGD.png")}
          />
          <Text style={styles.itemDesc}>Lịch sử giao dịch</Text>
          <MaterialIcons
            style={styles.forwardBtn}
            name="arrow-forward-ios"
            size={17}
            color="#4F4F4F"
          />
        </View>

        <View style={styles.itemCont}>
          <Image
            style={[styles.itemImg, { marginLeft: 7, width: 60, height: 47 }]}
            resizeMode={"contain"}
            source={require("../assets/thongtinKH.png")}
          />
          <Text style={styles.itemDesc}>Thông tin khách hàng</Text>
          <MaterialIcons
            style={styles.forwardBtn}
            name="arrow-forward-ios"
            size={17}
            color="#4F4F4F"
          />
        </View>

        <View style={styles.itemCont}>
          <Image
            style={[
              styles.itemImg,
              { marginTop: 30, marginLeft: -50, height: 85 },
            ]}
            resizeMode={"contain"}
            source={require("../assets/vgd.png")}
          />
          <Text style={styles.itemDesc}>Ví gia đình</Text>
          <MaterialIcons
            style={styles.forwardBtn}
            name="arrow-forward-ios"
            size={17}
            color="#4F4F4F"
          />
        </View>

        <View style={styles.itemCont}>
          <Image
            style={[styles.itemImg, { width: 65, height: 50 }]}
            resizeMode={"contain"}
            source={require("../assets/banbe.png")}
          />
          <Text style={styles.itemDesc}>Giới thiệu bạn bè</Text>
          <MaterialIcons
            style={styles.forwardBtn}
            name="arrow-forward-ios"
            size={17}
            color="#4F4F4F"
          />
        </View>

        <View style={styles.itemCont}>
          <Image
            style={[styles.itemImg, { marginLeft: 10, width: 55, height: 50 }]}
            resizeMode={"contain"}
            source={require("../assets/caidat.png")}
          />
          <Text style={styles.itemDesc}>Cài đặt</Text>
          <MaterialIcons
            style={styles.forwardBtn}
            name="arrow-forward-ios"
            size={17}
            color="#4F4F4F"
          />
        </View>

        <View style={styles.itemCont}>
          <Image
            style={[styles.itemImg, { width: 65, height: 50 }]}
            resizeMode={"contain"}
            source={require("../assets/ngonngu.png")}
          />
          <Text style={styles.itemDesc}>Đổi ngôn ngữ</Text>
          <MaterialIcons
            style={styles.forwardBtn}
            name="arrow-forward-ios"
            size={17}
            color="#4F4F4F"
          />
        </View>

        <View style={styles.itemCont}>
          <Image
            style={[styles.itemImg, { width: 65, height: 46 }]}
            resizeMode={"contain"}
            source={require("../assets/thongtinchung.png")}
          />
          <Text style={styles.itemDesc}>Thông tin chung</Text>
          <MaterialIcons
            style={styles.forwardBtn}
            name="arrow-forward-ios"
            size={17}
            color="#4F4F4F"
          />
        </View>

        <View
          style={styles.itemCont}
          onStartShouldSetResponder={() => logOut()}
        >
          <Image
            style={[styles.itemImg, { width: 65, height: 40 }]}
            resizeMode={"contain"}
            source={require("../assets/dangxuat.png")}
          />
          <Text style={styles.itemDesc}>Đăng xuất</Text>
          <MaterialIcons
            style={styles.forwardBtn}
            name="arrow-forward-ios"
            size={17}
            color="#4F4F4F"
          />
        </View>
      </ScrollView>
      <StatusBar style={"auto"} />
    </View>
  );
};
export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    overflow: "hidden",
    height: Dimensions.get("window").height,
    width: "100%",
    zIndex: 10,
  },
  header: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    zIndex: 12,
  },
  headerBG: {
    backgroundColor: "#007BCC",
    width: "250%",
    aspectRatio: 1,
    borderBottomRightRadius: 5000,
    borderBottomLeftRadius: 5000,
    position: "absolute",
    alignSelf: "center",
    bottom: "75%",
    zIndex: 10,
  },
  main: { zIndex: 1 },
  balanceBar: {
    flexDirection: "row",
  },
  returnBtn: {
    padding: 18,
  },
  uInfo: {
    marginTop: 10,
    width: "100%",
  },
  uName: {
    textTransform: "uppercase",
    fontSize: 22,
    fontWeight: "600",
    color: "white",
    marginBottom: 10,
  },
  wallet: {
    marginRight: 6,
  },
  balance: {
    color: "white",
    fontSize: 16,
  },
  eyeCont: {
    position: "absolute",
    top: 40,
    right: 80,
  },
  avatar: {
    alignSelf: "center",
    position: "absolute",
    top: 120,
    height: 135,
    width: 135,
    zIndex: 10,
  },
  itemCont: {
    marginTop: 7,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 60,
  },
  itemImg: {
    height: 68,
  },
  itemDesc: {
    fontSize: 16,
    width: "77%",
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6",
  },
  forwardBtn: {
    position: "absolute",
    right: 20,
    opacity: 0.5,
  },
});
