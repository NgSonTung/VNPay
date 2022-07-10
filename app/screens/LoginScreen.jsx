import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Alert,
  Keyboard,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  const [step, setStep] = useState(1);
  const [number, setNumber] = useState("");
  const [isRight, checkNumber] = useState("");
  const [hidePassword, setHide] = useState("true");

  function handleSubmit() {
    Keyboard.dismiss();
    if (number.length == 0) return "thieu";
    else if (!number.startsWith("09", 0) | isNaN(number)) return "sai";
    else if (number.length == 10) {
      setStep(2);
      return "dung";
    } else return "sai";
  }

  function handleLogin() {
    Keyboard.dismiss();
    if (number == 123) return true;
    else {
      Alert.alert(
        "Thông báo",
        "Thông tin đăng nhập không chính xác. Lưu ý: Tài khoản của Quý khách sẽ bị tạm khóa nếu nhập sai quá 5 lần.",
        [{ text: "Đóng" }]
      );
      return false;
    }
  }

  function handleHidePassword() {
    if (hidePassword) return false;
    else return true;
  }

  function handleHidePassword() {
    if (hidePassword) return false;
    else return true;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <MaterialIcons
          style={styles.returnBtn}
          name="arrow-back-ios"
          size={19}
          color="black"
        />
        <Image
          style={styles.logo}
          resizeMode={"contain"}
          source={require("../assets/logo3.png")}
        />
      </View>
      {/* MAIN */}
      <View style={styles.main}>
        <View style={styles.greetingsCont}>
          {step == 2 ? <Text style={styles.greetings1}>Xin chào</Text> : null}
          <Text style={styles.greetings2}>
            {step == 1 ? "Xin chào!" : "Quý khách"}
          </Text>
        </View>
        <Image
          style={styles.avatar}
          resizeMode={"contain"}
          source={require("../assets/avatarBig.png")}
        />
        {step == 1 ? (
          <Text style={styles.desc}>
            Quý khách vui lòng nhập SĐT để đăng nhập/đăng ký
          </Text>
        ) : null}
        <View style={styles.eye}>
          <TextInput
            style={styles.input}
            placeholder={step == 1 ? "Số điện thoại" : "Nhập mật khẩu"}
            keyboardType={step == 1 ? "phone-pad" : "default"}
            maxLength={10}
            secureTextEntry={step == 2 && hidePassword ? true : false}
            onChangeText={(value) => setNumber((number) => value)}
          />
          {step == 2 ? (
            <View
              onStartShouldSetResponder={() =>
                setHide(() => handleHidePassword())
              }
            >
              <Ionicons
                style={[
                  styles.hide,
                  { display: hidePassword ? "none" : "flex" },
                ]}
                name="eye"
                size={17}
                color="#FFAA4F"
              />
              <Ionicons
                style={[
                  styles.hide,
                  { display: hidePassword ? "flex" : "none" },
                ]}
                name="eye-off-sharp"
                size={17}
                color="#FFAA4F"
              />
            </View>
          ) : null}
        </View>
        {isRight == "thieu" ? (
          <View style={styles.errCont}>
            <Ionicons name="ios-warning" size={15} color="#ED1C24" />
            <Text style={styles.errText}>
              Số điện thoại không được bỏ trống. Vui lòng kiểm tra lại.
            </Text>
          </View>
        ) : null}
        {isRight == "sai" ? (
          <View style={styles.errCont}>
            <Ionicons name="ios-warning" size={15} color="#ED1C24" />
            <Text style={styles.errText}>
              Số điện thoại không chính xác. Vui lòng kiểm tra lại.
            </Text>
          </View>
        ) : null}
        <Text style={[styles.forgot, { display: step == 2 ? "flex" : "none" }]}>
          Quên mật khẩu?
        </Text>
        <View
          onStartShouldSetResponder={
            step == 1
              ? () => checkNumber(() => handleSubmit())
              : () => handleLogin()
          }
          style={styles.submitBtn}
        >
          <Text style={styles.submitText}>
            {step == 1 ? "Tiếp tục" : "Đăng nhập"}
          </Text>
        </View>
      </View>
      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.termsCont}>
          <Text style={[styles.terms]}>Điều khoản và điều kiện</Text>
          <Text style={{ paddingHorizontal: 12 }}>|</Text>
          <Text style={[styles.terms]}>Hướng dẫn sử dụng</Text>
        </View>
        <Image
          style={{ alignSelf: "center", marginTop: 15 }}
          source={require("../assets/bottomBar.png")}
        />
      </View>
      <StatusBar style={"auto"} />
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;

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
  },
  returnBtn: {
    paddingVertical: 17,
    paddingHorizontal: 23,
    position: "absolute",
    top: 0,
  },
  logo: {
    alignSelf: "center",
    height: 47,
  },
  main: {
    marginTop: 21,
    alignItems: "center",
  },
  greetings2: {
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 7,
  },
  greetings1: {
    fontSize: 14,
    color: "gray",
    marginRight: 7,
    marginVertical: 10,
  },
  avatar: {
    height: 220,
  },
  desc: {
    color: "#9B9D9F",
    width: 210,
    textAlign: "center",
    fontSize: 13,
  },
  input: {
    height: 40,
    width: 285,
    margin: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#9B9D9F",
    padding: 10,
    textAlign: "center",
    marginTop: 15,
    zIndex: 0,
  },
  submitBtn: {
    backgroundColor: "#005BAA",
    width: 285,
    borderRadius: 25,
    height: 49,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  errCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  errText: {
    color: "#ED1C24",
    fontSize: 12,
  },
  greetingsCont: {
    flexDirection: "row",
  },
  eye: {
    flexDirection: "row",
  },
  hide: {
    right: 15,
    bottom: 23,
    alignSelf: "center",
    position: "absolute",
    zIndex: 5,
  },
  forgot: {
    fontSize: 12.5,
    marginVertical: 15,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "center",
  },
  termsCont: {
    alignSelf: "center",
    flexDirection: "row",
  },
  terms: {
    fontSize: 13,
    color: "gray",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    height: 16,
  },
});
