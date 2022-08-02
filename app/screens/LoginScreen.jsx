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
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Load from "../components/Load";

const LoginScreen = (props) => {
  const [tempNo, setTempNo] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const [inputIsRight, checkInput] = useState("");
  const [loginStep, setLoginStep] = useState(1);
  const [hidePassword, setHidePassword] = useState("true");
  const numberList = props.accountList.map((account) => account.number);
  const [accountInfo, setAccountInfo] = useState();
  const [updated, setUpdate] = useState(false);

  const login = () => {
    Keyboard.dismiss();
    if (tempPassword.toString() === props.password) {
      props.setLogin(true);
      props.navigation.navigate("home");
    } else {
      Alert.alert(
        "Thông báo",
        "Thông tin đăng nhập không chính xác. Lưu ý: Tài khoản của Quý khách sẽ bị tạm khóa nếu nhập sai quá 5 lần.",
        [{ text: "Đóng" }]
      );
      return false;
    }
  };

  useEffect(() => {
    typeof accountInfo !== "undefined"
      ? props.setAccountInfo(accountInfo)
      : null;
  }, [accountInfo]);

  useEffect(() => {
    typeof accountInfo !== "undefined"
      ? props.setAccountInfo(accountInfo)
      : null;
  }, []);

  // useEffect(() => {
  //   props.loggedIn && typeof props.accountInfo !== "undefined"
  //     ? props.navigation.navigate("home")
  //     : null;
  // }, [props.accountInfo, props.loggedIn]);

  const getNewAccountInfo = async () => {
    let newAccount;
    new Promise((resolve, reject) => {
      newAccount = props.accountList.find((account) => {
        return account.number.trim() === tempNo.toString().trim();
      });
      resolve(newAccount);
    }).then((value) => setAccountInfo(value));
  };

  const handleSubmit = () => {
    let rightNumber = false;
    Keyboard.dismiss();
    numberList.forEach((number) => {
      tempNo === number ? (rightNumber = true) : null;
    });
    // tempNo === props.number ? (rightNumber = true) : null;
    if (tempNo.length == 0) {
      checkInput("thieu");
    } else if (!tempNo.startsWith("09", 0) | isNaN(tempNo)) checkInput("sai");
    else if (tempNo.length == 10 && rightNumber) {
      setLoginStep(2);
      // const newAccountInfo = await getNewAccountInfo();
      // props.setAccountInfo(
      //   newAccountInfo
      // );
      getNewAccountInfo();
      checkInput("dung");
    } else {
      checkInput("sai");
    }
  };
  return (
    <>
      <Load />
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
            onPress={() => props.navigation.navigate("home")}
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
            {loginStep == 2 ? (
              <Text style={styles.greetings1}>Xin chào</Text>
            ) : null}
            <Text style={styles.greetings2}>
              {loginStep == 1 ? "Xin chào!" : "Quý khách"}
            </Text>
          </View>
          <Image
            style={styles.avatar}
            resizeMode={"contain"}
            source={require("../assets/avatarBig.png")}
          />
          {loginStep == 1 ? (
            <Text style={styles.desc}>
              Quý khách vui lòng nhập SĐT để đăng nhập/đăng ký
            </Text>
          ) : null}
          <View style={styles.eye}>
            {loginStep == 1 ? (
              <TextInput
                style={styles.input}
                placeholder={"Số điện thoại"}
                keyboardType={"phone-pad"}
                maxLength={10}
                onChangeText={(value) => setTempNo(() => value)}
              />
            ) : (
              <TextInput
                style={styles.input}
                placeholder={"Nhập mật khẩu"}
                keyboardType={"default"}
                secureTextEntry={hidePassword ? true : false}
                onChangeText={(value) => setTempPassword(() => value)}
              />
            )}
            {loginStep == 2 ? (
              <View
                onStartShouldSetResponder={() =>
                  setHidePassword(() => (hidePassword ? false : true))
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
          {inputIsRight == "thieu" ? (
            <View style={styles.errCont}>
              <Ionicons name="ios-warning" size={15} color="#ED1C24" />
              <Text style={styles.errText}>
                Số điện thoại không được bỏ trống. Vui lòng kiểm tra lại.
              </Text>
            </View>
          ) : null}
          {inputIsRight == "sai" ? (
            <View style={styles.errCont}>
              <Ionicons name="ios-warning" size={15} color="#ED1C24" />
              <Text style={styles.errText}>
                Số điện thoại không chính xác. Vui lòng kiểm tra lại.
              </Text>
            </View>
          ) : null}
          <Text
            style={[
              styles.forgot,
              { display: loginStep == 2 ? "flex" : "none" },
            ]}
          >
            Quên mật khẩu?
          </Text>
          <View
            onStartShouldSetResponder={
              loginStep == 1 ? () => handleSubmit() : () => login()
            }
            style={styles.submitBtn}
          >
            <Text style={styles.submitText}>
              {loginStep == 1 ? "Tiếp tục" : "Đăng nhập"}
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
    </>
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
    height: "40%",
    aspectRatio: 1,
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
