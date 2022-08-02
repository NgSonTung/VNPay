import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Platform,
  Text,
  StatusBar,
  color,
  Pressable,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { updateBalance, DocTienBangChu } from "../../firebase.js";

export default function CTDenViMain(props) {
  const [money, setMoney] = useState(false);
  const [receiver, setReceiver] = useState("");
  const numberList = props.accountList.map((account) => account.number);

  const formik = useFormik({
    initialValues: {
      number: "",
      message: "",
      amount: "",
    },
    validationSchema: yup.object({
      number: yup.string().min(10).max(10).required(10),
      message: yup.string().min(1).max(30).required(),
      amount: yup.string().min(5).required(),
    }),
  });

  // useEffect(() => {
  //   if (
  //     !formik.errors.message &&
  //     !formik.errors.number &&
  //     !formik.errors.amount
  //   )
  //     checkInput(true);
  //   else checkInput(false);
  // }, [formik.values]);

  useEffect(() => {
    if (parseFloat(formik.values.amount) >= parseFloat(props.balance)) {
      Keyboard.dismiss();
      Alert.alert("Số dư ví không đủ");
      formik.values.amount = "";
    }
    setMoney(DocTienBangChu(formik.values.amount));
    props.setAmount(parseFloat(formik.values.amount));
  }, [formik.values.amount]);

  useEffect(() => {
    let rightNumber = false;
    let receiverInfo;
    if (formik.values.number.trim().length >= 10) {
      Keyboard.dismiss();
      if (formik.values.number === props.accountInfo.number) {
        Alert.alert(
          "Số điện thoại nhận không thể trùng với số điện thoại đăng ký ví"
        );
        formik.values.number = "";
        return;
      }
      numberList.forEach((number) => {
        formik.values.number === number ? (rightNumber = true) : null;
      });
      receiverInfo = props.accountList.find((account) => {
        return account.number.trim() === formik.values.number.toString().trim();
      });
      props.setReceiver(receiverInfo);
      if (rightNumber == true) {
        setReceiver(
          "Tên người nhận: " +
            receiverInfo.name +
            ", SDT:" +
            receiverInfo.number
        );
      } else {
        setReceiver("");
        Alert.alert("Số điện thoại chưa đăng ký ví VNPAY");
      }
    }
  }, [formik.values.number]);

  return (
    <View style={styles.mainNT_BGC}>
      <View style={styles.mainNT_Conteiner}>
        <View style={styles.mainNT_InputBox_Top}>
          <View style={styles.mainNT_InputBox_SDT}>
            <Ionicons
              name="cash"
              size={30}
              color="#469cd8"
              style={styles.mainNT_InputBox_IconMoney}
            />
            <TextInput
              placeholder="Nhập số điện thoại"
              style={styles.mainNT_Input_Placeholder}
              keyboardType="decimal-pad"
              name="number"
              value={formik.values.number}
              maxLength={10}
              onChangeText={formik.handleChange("number")}
            />
          </View>
          <View>
            <AntDesign name="contacts" size={30} color="gold" />
          </View>
        </View>

        <View style={styles.mainNT_InputBox_Bottom}>
          <MaterialIcons
            name="message"
            size={30}
            color="#469cd8"
            style={styles.mainNT_InputBox_Icon}
          />
          <View style={styles.mainNT_InputBox_Message}>
            <Text>Nội dung</Text>
            <TextInput
              placeholder="Text"
              style={styles.mainNT_Input_Placeholder}
              name="message"
              value={formik.values.message}
              onChangeText={formik.handleChange("message")}
            />
          </View>
        </View>
      </View>

      <View style={styles.mainNT_Conteiner_Middle}>
        <View style={styles.mainNT_InputBox_Money}>
          <MaterialCommunityIcons
            name="hand-coin"
            size={24}
            color="#469cd8"
            style={styles.mainNT_InputBox_IconCoin}
          />
          <TextInput
            placeholder="Số tiền (VND)"
            style={styles.mainNT_Input_Placeholder}
            keyboardType="decimal-pad"
            name="amount"
            value={formik.values.amount}
            maxLength={10}
            onChangeText={formik.handleChange("amount")}
          />
          <Text style={styles.moneyDesc}>{money}</Text>
        </View>
      </View>

      <View style={styles.mainNT_Conteiner_Bottom}>
        <Text style={styles.mainNT_Text}>Người Nhận Tiền</Text>
        <Text
          style={[
            styles.mainNT_Text,
            { fontWeight: "700", fontSize: 16, color: "black" },
          ]}
        >
          {receiver}
        </Text>
      </View>

      <View style={styles.CTDV_Container_BTN}>
        <View style={styles.add}>
          <Text style={styles.add_Button}>+ Thêm người nhận</Text>
        </View>
        <View
          style={[
            styles.submit,
            {
              opacity:
                formik.errors.message ||
                formik.errors.number ||
                formik.errors.amount
                  ? 0.5
                  : 1,
            },
          ]}
          onStartShouldSetResponder={
            formik.errors.message ||
            formik.errors.number ||
            formik.errors.amount
              ? null
              : props.xacnhan
          }
        >
          <Text style={styles.submit_Button}>Tiếp tục</Text>
        </View>
      </View>
      <StatusBar style={"auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  moneyDesc: {
    fontWeight: "400",
    color: "gray",
    position: "absolute",
    bottom: -25,
    right: -10,
  },
  mainNT_BGC: {
    backgroundColor: "white",
    height: "93%",
  },
  mainNT_Conteiner: {
    borderBottomColor: "#f7f6f6",
    borderBottomWidth: 10,
    borderTopColor: "#f7f6f6",
    borderTopWidth: 10,
    backgroundColor: "white",
  },
  mainNT_InputBox_Top: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
    paddingBottom: 5,
    borderBottomColor: "#f7f6f6",
    borderBottomWidth: 2,
  },
  mainNT_InputBox_Bottom: {
    flexDirection: "row",
    margin: 30,
    marginTop: 5,
    paddingBottom: 5,
    borderBottomColor: "#f7f6f6",
    borderBottomWidth: 2,
  },
  mainNT_InputBox_SDT: {
    flexDirection: "row",
  },
  mainNT_InputBox_Message: {
    width: "100%",
    marginBottom: 10,
  },
  mainNT_InputBox_Icon: {
    marginTop: 8,
    marginRight: 5,
  },
  mainNT_InputBox_IconMoney: {
    marginTop: 4,
    marginRight: 5,
  },

  mainNT_InputBox_Money: {
    flexDirection: "row",
    margin: 30,
    paddingBottom: 5,
    borderBottomColor: "#f7f6f6",
    borderBottomWidth: 2,
  },
  mainNT_InputBox_IconCoin: {
    marginRight: 10,
  },

  mainNT_Conteiner_Middle: {
    borderBottomColor: "#f7f6f6",
    borderBottomWidth: 10,
    backgroundColor: "white",
  },
  mainNT_Conteiner_Bottom: {
    borderBottomColor: "#f7f6f6",
    borderBottomWidth: 2,
    backgroundColor: "white",
  },
  mainNT_Text: {
    margin: 30,
    marginTop: 15,
    marginBottom: 15,
    color: "grey",
  },

  CTDV_Container_BTN: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 20,
  },
  mainNT_Input_Placeholder: {
    width: "80%",
  },
  add: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    width: 180,
    backgroundColor: "white",
    borderColor: "#255aa4",
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  submit: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    width: 180,
    backgroundColor: "#255aa4",
    borderColor: "#255aa4",
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 10,
    marginRight: 15,
    marginLeft: 10,
  },
  submit_Button: {
    color: "white",
  },
  add_Button: {
    color: "#255aa4",
  },
});
