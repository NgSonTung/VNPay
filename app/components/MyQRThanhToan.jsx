import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;

export default function MyQRThanhToan(props) {
  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const [hideBalance, setHide] = useState(true);
  const handleHide = () => {
    hideBalance ? setHide(false) : setHide(true);
  };
  const getExp = () => {
    let today = new Date();
    today.setHours(today.getHours(), today.getMinutes() + 10, 0, 0);
    let hours = (today.getHours() < 10 ? "0" : "") + today.getHours();
    let minutes = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    return (
      hours +
      ":" +
      minutes +
      "  " +
      String(today.getMonth() + 1).padStart(2, "0") +
      "/" +
      String(today.getDate()).padStart(2, "0") +
      "/" +
      today.getFullYear()
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoCont}>
          <Image
            style={styles.logo}
            resizeMode={"contain"}
            source={require("../assets/logo4.png")}
          />
        </View>
        <Text style={styles.logoDesc}>Ví VNPAY</Text>
        <Text style={styles.balance}>
          {hideBalance ? "********" : currencyFormat(props.balance)}
        </Text>
        <View
          style={styles.hide}
          onStartShouldSetResponder={() => handleHide()}
        >
          <Ionicons
            style={{ display: hideBalance ? "none" : "flex" }}
            name="eye"
            size={17}
            color="#FFAA4F"
          />
          <Ionicons
            style={{ display: hideBalance ? "flex" : "none" }}
            name="eye-off-sharp"
            size={17}
            color="#FFAA4F"
          />
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder={"Nhập mã giảm giá (nếu có)"}
        maxLength={5}
        onChangeText={(value) =>
          value.length == 5 ? Keyboard.dismiss() : null
        }
      />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.inputNote}>
          Hãy nhập mã giảm giá (nếu có) để áp dụng cho đơn hàng của Quý khách
        </Text>
        <Image
          style={styles.qrTT}
          resizeMode={"contain"}
          source={require("../assets/QRthanhtoan.png")}
        />
        <View style={styles.box}>
          <Text style={styles.uName}>{props.name}</Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text style={styles.exp}>Thời gian hiệu lực:</Text>
            <Text style={styles.expDate}>{getExp()}</Text>
          </View>
        </View>
        <Text style={styles.ttNote}>
          Vui lòng đưa mã QR cho điểm bán để thực hiện thanh toán cho đơn hàng
          của Quý khách
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
  },
  header: {
    width: "100%",
    height: 55,
    flexDirection: "row",
    backgroundColor: "#E5F3FC",
  },
  logoCont: {
    width: 30,
    aspectRatio: 1,
    backgroundColor: "white",
    borderRadius: 50,
    alignSelf: "center",
    marginLeft: 20,
    zIndex: 0,
  },
  logo: {
    height: 55,
    width: 55,
    justifyContent: "center",
    alignSelf: "center",
    zIndex: 10,
  },
  logoDesc: {
    alignSelf: "center",
    marginLeft: 10,
  },
  balance: {
    justifyContent: "flex-end",
    alignSelf: "center",
    right: 50,
    fontWeight: "bold",
    position: "absolute",
  },
  hide: {
    alignSelf: "center",
    right: 20,
    position: "absolute",
  },
  input: {
    height: 65,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "#9B9D9F",
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    zIndex: 0,
  },
  inputNote: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#A6A8AA",
    marginTop: 10,
    marginHorizontal: 15,
  },
  qrTT: {
    height: 190,
    width: 190,
    marginTop: 35,
  },
  uName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  exp: {
    fontWeight: "600",
    fontSize: 13,
    paddingRight: 5,
  },
  expDate: {
    fontWeight: "700",
    fontSize: 13,
    paddingRight: 5,
    color: "red",
  },
  ttNote: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 13,
  },
  box: {
    marginTop: 50,
    paddingVertical: 10,
    borderColor: "#E8E8E8",
    width: 360,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 2,
    borderStyle: "dashed",
  },
});
