import React from "react";
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Text,
  color,
  Pressable,
  FlatList,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useFormik } from "formik";
import * as yup from "yup";


export default function NTMain(props) {
  const [moneyInput, setAmount] = React.useState("");
  const formik = useFormik({
    initialValues:{SoTien: ""},
    validationSchema: yup.object({
      SoTien: yup.string().min(5, "Số tiền nạp tối thiểu là 10000VNĐ").required()
    }),
  })

  return (
    <View>
      <View style={styles.mainNT}>
        <ScrollView>
          <Text style={styles.mainNT_Text}>Nguồn tiền</Text>

          <View style={styles.mainNT_Balance}>
            <Image
              source={require("../assets/TPBank_Logo.png")}
              style={styles.icon1}
            />
            <View>
              <Text style={styles.VNP}>TPBANK</Text>
              <Text>********8910</Text>
            </View>
          </View>

          <View style={styles.mainNT_Input}>
            <View style={styles.mainNT_InputBox}>
              <Ionicons name="cash" size={24} color="#469cd8" />
              <TextInput
                placeholder="Số tiền nạp (VND)"
                name= "SoTien"
                id="SoTien"
                style={styles.mainNT_Input_Placeholder}
                keyboardType="decimal-pad"
                defaultValue=""
                value={formik.values.SoTien}
                onChangeText={formik.handleChange("SoTien")}
              />
            </View>
            <View style={styles.mainNT_Input_Question}>
              <Text> Hạn mức </Text>
              <AntDesign name="questioncircle" size={24} color="#469cd8" />
            </View>
          </View>

          <View style={styles.mainNT_Btn}>
            <Text style={styles.mainNT_Button}>100.000</Text>
            <Text style={styles.mainNT_Button}>200.000</Text>
            <Text style={styles.mainNT_Button}>500.000</Text>
            <Text style={styles.mainNT_Button}>1.000.000</Text>
            <Text style={styles.mainNT_Button}>2.000.000</Text>
            <Text style={styles.mainNT_Button}>5.000.000</Text>
          </View>
          <View style={styles.BorderBottom}>
            <Text></Text>
          </View>

          <View>
            <Text style={styles.LinkText}>Tạo liên kết ngân hàng mới</Text>

            <View style={styles.barRows}>
              <View style={styles.navCont}>
                <Image
                  style={styles.barIcons}
                  source={require("../assets/1658936868505.png")}
                />
                <Text style={styles.barDesc}>VIETCOMBANK</Text>
              </View>

              <View style={styles.navCont}>
                <Image
                  style={styles.barIcons}
                  source={require("../assets/1659170745833.png")}
                />
                <Text style={styles.barDesc}>AGRIBANK</Text>
              </View>

              <View style={styles.navCont}>
                <Image
                  style={styles.barIcons}
                  source={require("../assets/1658936901832.png")}
                />
                <Text style={styles.barDesc}>VIETTINBANK</Text>
              </View>

              <View style={styles.navCont}>
                <Image
                  style={styles.barIcons}
                  source={require("../assets/1658936953353.png")}
                />
                <Text style={styles.barDesc}>BIDV</Text>
              </View>
            </View>

            <View style={styles.barRows}>
              <View style={styles.navCont}>
                <Image
                  style={styles.barIcons}
                  source={require("../assets/1659170763104.png")}
                />
                <Text style={styles.barDesc}>SHB</Text>
              </View>

              <View style={styles.navCont}>
                <Image
                  style={styles.barIcons}
                  source={require("../assets/1659170777888.png")}
                />
                <Text style={styles.barDesc}>SACOMBANK</Text>
              </View>

              <View style={styles.navCont}>
                <Image
                  style={styles.barIcons}
                  source={require("../assets/1659170791708.png")}
                />
                <Text style={styles.barDesc}>MSB</Text>
              </View>

              <View style={styles.navCont}>
                <Image
                  style={styles.barIcons}
                  source={require("../assets/1659170791708.png")}
                />
                <Text style={styles.barDesc}>Nạp tiền điện thoại</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View 
        style={styles.submit}
        onStartShouldSetResponder={formik.errors.SoTien ? console.log("error") : props.xacnhanNT } 
      >
          <Text style={styles.submitText}>Tiếp tục</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainNT: {
    height: 600,
    backgroundColor: "white",
  },
  mainNT_Text: {
    fontSize: 15,
    color: "grey",
    padding: 20,
    paddingBottom: 0,
  },

  icon1: {
    width: 60,
    height: 60,
    marginRight: 15,
    marginLeft: 7,
    marginTop: 3,
  },

  mainNT_Balance: {
    flexDirection: "row",
    height: 95,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 3,
    borderBottomColor: "#f7f6f6",
  },

  VNP: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },

  mainNT_Input: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 30,
    paddingBottom: 30,
    borderBottomWidth: 3,
    borderBottomColor: "#f7f6f6",
  },
  mainNT_InputBox: {
    flexDirection: "row",
  },
  mainNT_Input_Question: {
    flexDirection: "row",
  },
  mainNT_Input_Placeholder: {
    marginLeft: 10,
    fontSize: 15,
    color: "deepskyblue",
    width: 240,
  },
  mainNT_Btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexWrap: "wrap",
    borderBottomWidth: 10,
    borderBottomColor: "#f7f6f6",
  },
  mainNT_Button: {
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 108,
    height: 50,
    margin: 10,
    textAlign: "center",
    borderColor: "gainsboro",
  },

  //PHẦN LIÊN KẾT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  LinkText: {
    fontSize: 15,
    padding: 20,
    paddingTop: 5,
  },
  barRows: {
    flexDirection: "row",
    alignItems: "baseline",
    flexWrap: "wrap",
    backgroundColor: "white",
    width: "100%",
    marginBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
    height: 100,
    flex: 1,
  },
  barIcons: {
    resizeMode: "contain",
    height: 70,
    aspectRatio: 1,
    marginBottom: 15,
  },
  navCont: {
    flex: 1,
    alignItems: "center",
  },
  barDesc: {
    fontSize: 10,
    textAlign: "center",
    paddingHorizontal: 5,
  },

  submit: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    width: 300,
    backgroundColor: "#469cd8",
    borderColor: "#469cd8",
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 10,
    marginLeft: "13.5%",
  },
  submitText: {
    color: "white",
    width: 300,
    textAlign: "center",
  },
});
