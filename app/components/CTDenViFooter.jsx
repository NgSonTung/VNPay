import React from "react";
import { StyleSheet, View, Text, color, Pressable } from "react-native";

export default function CTDenViFooter(props) {
  return (
    <View style={styles.CTDV_Container_BTN}>
      <Text></Text>
      <View style={styles.add}>
        <Text style={styles.add_Button}>+ Thêm người nhận</Text>
      </View>
      <View style={styles.submit} onStartShouldSetResponder={props.xacnhan}>
        <Text style={styles.submit_Button}>Tiếp tục</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CTDV_Container_BTN: {
    height: 350,
    //justifyContent: 'flex-end',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    //alignSelf:'flex-end',
    //alignItems: 'flex-end'
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
