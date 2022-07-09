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
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  const [step, setStep] = useState(1);
  const [number, setNumber] = useState("");
  const [isRight, checkNumber] = useState("");

  function handleSubmit() {
    if (number.length == 0) return "thieu";
    else if (!number.startsWith("09", 0)) return "sai";
    else if (isNaN(number)) return "sai";
    else if (number.length == 10) return "dung";
    else return "sai";
  }

  return (
    <SafeAreaView style={styles.container}>
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
            keyboardType="phone-pad"
            maxLength={10}
            onChangeText={(value) => setNumber((number) => value)}
          />
          {step == 2 ? (
            <Ionicons
              style={[styles.eyeOn]}
              name="eye"
              size={17}
              color="#FFAA4F"
            />
          ) : null}
          {step == 2 ? (
            <Ionicons
              style={[styles.eyeOff]}
              name="eye-off-sharp"
              size={17}
              color="#FFAA4F"
            />
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
        <Text style={styles.forgot}>Quên mật khẩu?</Text>
        <View
          onStartShouldSetResponder={() => checkNumber(() => handleSubmit())}
          style={styles.submitBtn}
        >
          <Text style={styles.submitText}>Tiếp tục</Text>
        </View>
      </View>

      {/* FOOTER */}
      <View>
        <View>
          <Text>Điều khoản và điều kiện</Text>
          <Text>|</Text>
          <Text>Hướng dẫn sử dụng</Text>
        </View>
        <Image source={require("../assets/bottomBar.png")} />
      </View>
      <StatusBar style={"auto"} />
    </SafeAreaView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    overflow: "hidden",
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
  eyeOn: {
    right: 15,
    alignSelf: "center",
    position: "absolute",
  },
  eyeOff: {
    right: 15,
    alignSelf: "center",
    position: "absolute",
  },
  forgot: {
    fontSize: 12.5,
    marginVertical: 15,
  },
});
