import React from "react";
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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFormik } from "formik";
import * as yup from "yup";


export default function CTDenViMain(props){

  const formik = useFormik({
    initialValues:{
      number: "",
      message: "",
      amount: "",
    },
    validationSchema: yup.object({
      number: yup.string().min(10).max(10).required(),
      message: yup.string().max(30).required(),
      amount: yup.string().min(5).required(),
    }),
  })
    return(
      <View style={styles.mainNT_BGC}>
        <View style={styles.mainNT_Conteiner}>
            <View style={styles.mainNT_InputBox_Top}>
              <View style={styles.mainNT_InputBox_SDT}>
                  <Ionicons name="cash" size={30} color="#469cd8"style={styles.mainNT_InputBox_IconMoney}/>
                    <TextInput 
                        placeholder="Nhập số điện thoại" 
                        style={styles.mainNT_Input_Placeholder}
                        keyboardType= 'decimal-pad'
                        name="number"
                        defaultValue=""
                        value={formik.values.number}
                        onChangeText={formik.handleChange("number")}
                    />
              </View>
              <View>
                  <AntDesign name="contacts" size={30} color="gold" />
              </View>
            </View>

            <View style={styles.mainNT_InputBox_Bottom}>
                <MaterialIcons name="message" size={30} color="#469cd8" style={styles.mainNT_InputBox_Icon}/>
                <View style={styles.mainNT_InputBox_Message}>
                    <Text>Nội dung</Text>
                    <TextInput 
                        placeholder= "Text"
                        style={styles.mainNT_Input_Placeholder}
                        name="message"
                        defaultValue=""
                        value={formik.values.message}
                        onChangeText={formik.handleChange("message")}

                    />
                </View>
            </View>
        </View>

        <View style={styles.mainNT_Conteiner_Middle}>
            <View style={styles.mainNT_InputBox_Money}>
            <MaterialCommunityIcons name="hand-coin" size={24} color="#469cd8" style={styles.mainNT_InputBox_IconCoin} /> 
              <TextInput 
                  placeholder="Số tiền (VND)" 
                  style={styles.mainNT_Input_Placeholder}
                  keyboardType= 'decimal-pad'
                  name="amount"
                  defaultValue=""
                  value={formik.values.amount}
                  onChangeText={formik.handleChange("amount")}
                  />
            </View>
        </View>

        <View style={styles.mainNT_Conteiner_Bottom}>
            <Text style={styles.mainNT_Text}>Danh Sách Nhận Tiền (0/10)</Text>
        </View>

        <View style={styles.CTDV_Container_BTN}>
          <Text></Text>
            <View style={styles.add}>
              <Text style={styles.add_Button}>+ Thêm người nhận</Text>
            </View>
            <View style={styles.submit}
                    onStartShouldSetResponder={formik.errors.message && formik.errors.number && formik.errors.amount ? console.log("error") : props.xacnhan } 
            >
              <Text style={styles.submit_Button}>Tiếp tục</Text>
            </View>
        </View>

      </View>
    )
}


const styles = StyleSheet.create({
  mainNT_BGC:{
    backgroundColor: 'white'
  },
  mainNT_Conteiner:{
    borderBottomColor: '#f7f6f6',
    borderBottomWidth: 10,
    borderTopColor: '#f7f6f6',
    borderTopWidth: 10,
    backgroundColor: 'white',
},
  mainNT_InputBox_Top:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
    paddingBottom: 5,
    borderBottomColor: '#f7f6f6',
    borderBottomWidth: 2,
},
  mainNT_InputBox_Bottom:{
  flexDirection: 'row',
  margin: 30,
  marginTop: 5,
  paddingBottom: 5,
  borderBottomColor: '#f7f6f6',
  borderBottomWidth: 2,

},
mainNT_InputBox_SDT:{
  flexDirection: 'row',
},
mainNT_InputBox_Message:{
  marginBottom: 10,
},
mainNT_InputBox_Icon:{
  marginTop: 8,
  marginRight: 5,
},
mainNT_InputBox_IconMoney:{
  marginTop: 4,
  marginRight: 5,
},

mainNT_InputBox_Money:{
  flexDirection: 'row',
  margin: 30,
  paddingBottom: 5,
  borderBottomColor: '#f7f6f6',
  borderBottomWidth: 2,
},
mainNT_InputBox_IconCoin:{
  marginRight: 10,
},

mainNT_Conteiner_Middle:{
  borderBottomColor: '#f7f6f6',
  borderBottomWidth: 10,
  backgroundColor: 'white',
},
mainNT_Conteiner_Bottom:{
  borderBottomColor: '#f7f6f6',
  borderBottomWidth: 2,
  backgroundColor: 'white',
},
mainNT_Text:{
  margin: 30,
  marginTop: 15,
  marginBottom: 15,
  color: 'grey',
},

CTDV_Container_BTN: {
  height: 350,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
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

